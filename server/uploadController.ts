import express from 'express';
import multer from 'multer';
import pdfParse from 'pdf-parse';
import fs from 'fs';
import { uploadPdf } from '../utils/pdfUtils';
import { saveFatura } from './faturaService';
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Middleware de CORS
router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', ' http://192.168.1.25:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

router.post('/upload-fatura', upload.single('pdfFile'), async (req, res) => {
    try {
        if (!req.file) {
            throw new Error('Arquivo não recebido.');
        }

        const { originalname, path } = req.file;
        const fileContent = fs.readFileSync(path);
        const pdfData = await pdfParse(fileContent);

        const dadosFatura = uploadPdf(pdfData, fileContent);

        await saveFatura(dadosFatura);

        res.status(200).json({ message: 'Fatura processada e armazenada com sucesso.', originalname });
    } catch (error) {
        console.error('Erro ao processar a fatura:', error);
        res.status(500).json({ error: 'Erro ao processar a fatura.' });
    }
});

export default router;

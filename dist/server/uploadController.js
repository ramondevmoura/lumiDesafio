"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const fs_1 = __importDefault(require("fs"));
const pdfUtils_1 = require("../utils/pdfUtils");
const faturaService_1 = require("./faturaService");
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
// Middleware de CORS
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
router.post('/upload-fatura', upload.single('pdfFile'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            throw new Error('Arquivo não recebido.');
        }
        const { originalname, path } = req.file;
        const fileContent = fs_1.default.readFileSync(path);
        const pdfData = yield (0, pdf_parse_1.default)(fileContent);
        const dadosFatura = (0, pdfUtils_1.uploadPdf)(pdfData, fileContent);
        yield (0, faturaService_1.saveFatura)(dadosFatura);
        res.status(200).json({ message: 'Fatura processada e armazenada com sucesso.', originalname });
    }
    catch (error) {
        console.error('Erro ao processar a fatura:', error);
        res.status(500).json({ error: 'Erro ao processar a fatura.' });
    }
}));
exports.default = router;

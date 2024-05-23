import express from 'express';
import { getAllFaturas, getFaturasByCliente } from './faturaService'; 

const router = express.Router();

router.get('/faturas', async (req, res) => {
  try {
    const faturas = await getAllFaturas();
    res.status(200).json(faturas);
  } catch (error) {
    console.error('Erro ao buscar todas as faturas:', error);
    res.status(500).json({ error: 'Erro ao buscar todas as faturas.' });
  }
});

router.get('/faturas/:cliente', async (req, res) => {
  try {
    const cliente = req.params.cliente;
    const faturas = await getFaturasByCliente(cliente);
    res.status(200).json(faturas);
  } catch (error) {
    const cliente = req.params.cliente; 
    console.error(`Erro ao buscar faturas para o cliente ${cliente}:`, error);
    res.status(500).json({ error: `Erro ao buscar faturas para o cliente ${cliente}.` });
  }
});

export default router;

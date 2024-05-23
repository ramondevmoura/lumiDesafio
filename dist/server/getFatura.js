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
const faturaService_1 = require("./faturaService");
const router = express_1.default.Router();
router.get('/faturas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const faturas = yield (0, faturaService_1.getAllFaturas)();
        res.status(200).json(faturas);
    }
    catch (error) {
        console.error('Erro ao buscar todas as faturas:', error);
        res.status(500).json({ error: 'Erro ao buscar todas as faturas.' });
    }
}));
router.get('/faturas/:cliente', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cliente = req.params.cliente;
        const faturas = yield (0, faturaService_1.getFaturasByCliente)(cliente);
        res.status(200).json(faturas);
    }
    catch (error) {
        const cliente = req.params.cliente;
        console.error(`Erro ao buscar faturas para o cliente ${cliente}:`, error);
        res.status(500).json({ error: `Erro ao buscar faturas para o cliente ${cliente}.` });
    }
}));
exports.default = router;

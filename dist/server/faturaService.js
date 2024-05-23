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
exports.getFaturasByCliente = exports.getAllFaturas = exports.saveFatura = void 0;
const faturaModels_1 = __importDefault(require("./faturaModels"));
const database_1 = __importDefault(require("./database"));
function saveFatura(dadosFatura) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.authenticate();
            yield faturaModels_1.default.create(dadosFatura);
            console.log('Fatura salva com sucesso.');
        }
        catch (error) {
            throw new Error(`Erro ao salvar a fatura: ${error}`);
        }
    });
}
exports.saveFatura = saveFatura;
function getAllFaturas() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const faturas = yield faturaModels_1.default.findAll();
            return faturas;
        }
        catch (error) {
            throw new Error(`Erro ao buscar todas as faturas: ${error}`);
        }
    });
}
exports.getAllFaturas = getAllFaturas;
function getFaturasByCliente(cliente) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const faturas = yield faturaModels_1.default.findAll({ where: { nr_cliente: cliente } });
            return faturas;
        }
        catch (error) {
            throw new Error(`Erro ao buscar faturas por cliente: ${error}`);
        }
    });
}
exports.getFaturasByCliente = getFaturasByCliente;

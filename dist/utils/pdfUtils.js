"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPdf = void 0;
const helpers_1 = require("../helpers/helpers");
function uploadPdf(pdfData, fileContent) {
    return {
        nr_cliente: (0, helpers_1.extrairInfo)(pdfData.text, 'Nº DO CLIENTE', 1, 0),
        mes_referencia: (0, helpers_1.extrairInfo)(pdfData.text, 'Referente a', 1, 0),
        energia_ele_kwh: (0, helpers_1.trataValor)((0, helpers_1.extrairInfo)(pdfData.text, 'Energia Elétrica', 0, 2)),
        energia_ele_valor: (0, helpers_1.trataValor)((0, helpers_1.extrairInfo)(pdfData.text, 'Energia Elétrica', 0, 4)),
        energia_scee_kwh: (0, helpers_1.trataValor)((0, helpers_1.extrairInfo)(pdfData.text, 'Energia SCEE s/ ICMS', 0, 4)),
        energia_scee_valor: (0, helpers_1.trataValor)((0, helpers_1.extrairInfo)(pdfData.text, 'Energia SCEE s/ ICMS', 0, 6)),
        energia_compensada_kwh: (0, helpers_1.trataValor)((0, helpers_1.extrairInfo)(pdfData.text, 'Energia compensada GD I', 0, 4)),
        energia_compensada_valor: (0, helpers_1.trataValor)((0, helpers_1.extrairInfo)(pdfData.text, 'Energia compensada GD I', 0, 6)),
        contrib_ilum_valor: (0, helpers_1.trataValor)((0, helpers_1.extrairInfo)(pdfData.text, 'Contrib Ilum Publica Municipal', 0, 4)),
        arquivo_dados: fileContent,
    };
}
exports.uploadPdf = uploadPdf;

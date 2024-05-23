"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trataValor = exports.extrairInfo = void 0;
// Função para extrair informações de uma linha específica de um PDF parseado para string
function extrairInfo(textoPdf, textoReferencia, linhaReferente, indice) {
    const lines = textoPdf.split('\n'); // Divide o texto em linhas
    const linha = lines.findIndex((line) => line.includes(textoReferencia)); // Procura a linha que contém o texto de referência
    if (linha !== -1) {
        const linhaInfo = lines[linha + linhaReferente]; // Pega a linha referente à linha de referência
        return linhaInfo.trim().split(/\s+/)[indice]; // Divide a linha, joga em um array e retorna a informação na posição do índice
    }
    else {
        return ''; // Se a linha não for encontrada, retorna vazio
    }
}
exports.extrairInfo = extrairInfo;
// Função para tratar valores numéricos
function trataValor(valor) {
    return parseFloat(valor.replace('.', '').replace(',', '.')); // Trata o separador de milhares e converte o separador decimal para ponto
}
exports.trataValor = trataValor;

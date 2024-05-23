import { extrairInfo, trataValor } from '../helpers/helpers';

export function uploadPdf(pdfData: any, fileContent: any): any {
    return {
        nr_cliente: extrairInfo(pdfData.text, 'Nº DO CLIENTE', 1, 0),
        mes_referencia: extrairInfo(pdfData.text, 'Referente a', 1, 0),
        energia_ele_kwh: trataValor(extrairInfo(pdfData.text, 'Energia Elétrica', 0, 2)),
        energia_ele_valor: trataValor(extrairInfo(pdfData.text, 'Energia Elétrica', 0, 4)),
        energia_scee_kwh: trataValor(extrairInfo(pdfData.text, 'Energia SCEE s/ ICMS', 0, 4)),
        energia_scee_valor: trataValor(extrairInfo(pdfData.text, 'Energia SCEE s/ ICMS', 0, 6)),
        energia_compensada_kwh: trataValor(extrairInfo(pdfData.text, 'Energia compensada GD I', 0, 4)),
        energia_compensada_valor: trataValor(extrairInfo(pdfData.text, 'Energia compensada GD I', 0, 6)),
        contrib_ilum_valor: trataValor(extrairInfo(pdfData.text, 'Contrib Ilum Publica Municipal', 0, 4)),
        arquivo_dados: fileContent,
    };
}


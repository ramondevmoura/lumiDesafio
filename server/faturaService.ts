import Fatura from './faturaModels';
import sequelize from './database';

async function saveFatura(dadosFatura: any): Promise<void> {
    try {
        await sequelize.authenticate(); 
        await Fatura.create(dadosFatura);
        console.log('Fatura salva com sucesso.');
    } catch (error) {
        throw new Error(`Erro ao salvar a fatura: ${error}`);
    }
}

async function getAllFaturas(): Promise<any[]> {
    try {
        const faturas = await Fatura.findAll();
        return faturas;
    } catch (error) {
        throw new Error(`Erro ao buscar todas as faturas: ${error}`);
    }
}

async function getFaturasByCliente(cliente: string): Promise<any[]> {
    try {
        const faturas = await Fatura.findAll({ where: { nr_cliente: cliente } });
        return faturas;
    } catch (error) {
        throw new Error(`Erro ao buscar faturas por cliente: ${error}`);
    }
}

export { saveFatura, getAllFaturas, getFaturasByCliente };

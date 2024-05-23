"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("./database"));
class Fatura extends sequelize_1.Model {
}
Fatura.init({
    nr_cliente: sequelize_1.DataTypes.STRING,
    mes_referencia: sequelize_1.DataTypes.STRING,
    energia_ele_kwh: sequelize_1.DataTypes.FLOAT,
    energia_ele_valor: sequelize_1.DataTypes.FLOAT,
    energia_scee_kwh: sequelize_1.DataTypes.FLOAT,
    energia_scee_valor: sequelize_1.DataTypes.FLOAT,
    energia_compensada_kwh: sequelize_1.DataTypes.FLOAT,
    energia_compensada_valor: sequelize_1.DataTypes.FLOAT,
    contrib_ilum_valor: sequelize_1.DataTypes.FLOAT,
    arquivo_dados: sequelize_1.DataTypes.BLOB,
}, { sequelize: database_1.default, modelName: 'fatura' });
exports.default = Fatura;

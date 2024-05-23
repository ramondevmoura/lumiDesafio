import { DataTypes, Model } from 'sequelize';
import  sequelize from './database';

class Fatura extends Model {}

Fatura.init({
  nr_cliente: DataTypes.STRING,
  mes_referencia: DataTypes.STRING,
  energia_ele_kwh: DataTypes.FLOAT,
  energia_ele_valor: DataTypes.FLOAT,
  energia_scee_kwh: DataTypes.FLOAT,
  energia_scee_valor: DataTypes.FLOAT,
  energia_compensada_kwh: DataTypes.FLOAT,
  energia_compensada_valor: DataTypes.FLOAT,
  contrib_ilum_valor: DataTypes.FLOAT,
  arquivo_dados: DataTypes.BLOB,
}, { sequelize, modelName: 'fatura' });

export default Fatura;

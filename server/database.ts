import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('lumidb', 'postgres', 'socialpump', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});

export default sequelize;

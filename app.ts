import express from 'express';
import uploadController from './server/uploadController'
import faturaRouter from './server/getFatura';
import  sequelize from './server/database';
import Fatura from './server/faturaModels';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Rotas
app.use('/api', uploadController);
app.use('/api', faturaRouter); 


// Sincroniza as tabelas do Sequelize com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error);
  });

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});

export default app;
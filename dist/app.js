"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadController_1 = __importDefault(require("./server/uploadController"));
const getFatura_1 = __importDefault(require("./server/getFatura"));
const database_1 = __importDefault(require("./server/database"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Middleware
app.use(express_1.default.json());
// Rotas
app.use('/api', uploadController_1.default);
app.use('/api', getFatura_1.default);
// Sincroniza as tabelas do Sequelize com o banco de dados
database_1.default.sync()
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
exports.default = app;

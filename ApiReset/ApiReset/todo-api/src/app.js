import express from 'express';
import taskRoutes from './routes/tasks.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para tratamento de JSON
// Essencial para que a API consiga interpretar o corpo (body) das requisições em formato JSON.
app.use(express.json());

// Rota principal (opcional, bom para teste)
app.get('/', (req, res) => {
  res.send('API de Lista de Tarefas funcionando!');
});

// Usando as rotas de tarefas definidas no arquivo tasks.js
app.use('/tasks', taskRoutes);

// Iniciando o servidor e o mantendo no ar
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
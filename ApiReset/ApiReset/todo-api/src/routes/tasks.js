import { Router } from 'express';
import { randomUUID } from 'crypto';

const router = Router();

// Armazenamento em memória (um simples array)
let tasks = [];

// Rota para CRIAR uma nova tarefa (Create)
// HTTP Method: POST
router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Título e descrição são obrigatórios.' });
  }

  const newTask = {
    id: randomUUID(), // Gera um ID único
    title,
    description,
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Rota para LISTAR todas as tarefas (Read)
// HTTP Method: GET
router.get('/', (req, res) => {
  res.status(200).json(tasks);
});

// Rota para ATUALIZAR uma tarefa existente pelo ID (Update)
// HTTP Method: PUT
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Tarefa não encontrada.' });
  }

  const updatedTask = {
    ...tasks[taskIndex],
    title: title || tasks[taskIndex].title,
    description: description || tasks[taskIndex].description,
    completed: typeof completed === 'boolean' ? completed : tasks[taskIndex].completed,
  };

  tasks[taskIndex] = updatedTask;

  res.status(200).json(updatedTask);
});

// Rota para EXCLUIR uma tarefa pelo ID (Delete)
// HTTP Method: DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);

  if (tasks.length === initialLength) {
    return res.status(404).json({ message: 'Tarefa não encontrada.' });
  }

  // A resposta para um DELETE bem-sucedido geralmente é 204 (No Content), sem corpo de resposta.
  res.status(204).send();
});

export default router;
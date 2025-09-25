// Importa as ferramentas que vamos precisar do Express e do Node.js
import { Router } from 'express'; // O Router é como uma "central de rotas" do Express.
import { randomUUID } from 'crypto';  
//Usado para gerar IDs únicos para cada tarefa. -> Uma forma de não precisar usar o BD, RandomUIID gera um id aleatório que vai na bliblioteca crypto. 

// central de rotas usado para organizarmos nossos endpoints de tarefas.
const router = Router();

// --- NOSSA BD sem BD  ---
// Aqui é onde vamos guardar nossas tarefas.
// Os array será nossa "memória".
// Toda vez que o servidor reiniciar, ele começará vazio novamente.
let tarefas = [];

// --- DEFINIÇÃO DAS ROTAS (ENDPOINTS) ---

// ROTA 1: CRIAR uma nova tarefa  
// Gustavo Não esquecer Post -> HTTP: POST
router.post('/', (req, res) => {
  // Pega o título e a descrição que o usuário enviou no corpo (body) da requisição.
  const { title, description } = req.body;

  // Validação: Verifica se o título e a descrição foram enviados.
  if (!title || !description) {
    // Se não foram, retorna um erro 400 conforme informado na aula e você esqueceu na prova
    // (Requisição Inválida).
    return res.status(400).json({ mensagem: 'Título e descrição são obrigatórios.' });
  }

  // Cria um objeto para a nova tarefa com todos os seus dados.
  const novaTarefa = {
    id: randomUUID(), // Gera um ID aleatório e único.
    title: title,
    description: description,
    completed: false, // Uma nova tarefa sempre começa como "não concluída".
    createdAt: new Date().toISOString() // Salva a data e hora de quando foi criada.
    //toISOString() é a forma mais segura e padronizada de salvar datas e horas em sistemas (Tive que pesquisar essa parte).
  };

  // Adiciona a nova tarefa ao nosso array de "memória".
  tarefas.push(novaTarefa);

  // Retorna a tarefa recém-criada com o status 201 (Criado com Sucesso).
  res.status(201).json(novaTarefa);
});

// ROTA 2: LISTAR todas as tarefas
// Gustavo Não esquecer Post -> HTTP: GET
router.get('/', (req, res) => {
  // retorna a lista completa de tarefas com o status 200 (OK).
  res.status(200).json(tarefas);
});


// --- ROTAS AGRUPADAS & ID específico ---
// Usamos router.route() para agrupar PUT e DELETE que usam o mesmo caminho: '/:id'
router.route('/:id')

  // ROTA 3: ATUALIZAR uma tarefa existente pelo ID
  // Gustavo Não esquecer Post -> HTTP: PUT
  .put((req, res) => {
    // Pega o ID que veio na URL (ex: /tasks/Corinthians2012)
    const { id } = req.params;
    // Pega os novos dados que o usuário enviou no corpo da requisição.
    const { title, description, completed } = req.body;

    // Procura no array a posição (índice) da tarefa que tem o mesmo ID.
    const indiceTarefa = tarefas.findIndex(tarefa => tarefa.id === id);
    //Ele percorre um array, item por item, e executa uma função de teste para cada um .

    // Validação: Se o findIndex não encontrar a tarefa, ele retorna -1.
    if (indiceTarefa === -1) {
      // Nesse caso, retornamos um erro 404 (Não Encontrado) com uma mensagem.
      return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
    }

    // Pega a tarefa antiga usando o índice que encontramos.
    const tarefaAntiga = tarefas[indiceTarefa];

    // Cria a tarefa atualizada.
    // O "..." copia os dados da tarefa antiga.
    // Em seguida, se o usuário enviou um novo título, descrição ou status, nós o usamos.
    // Se não, mantemos o valor antigo.
    const tarefaAtualizada = {
      ...tarefaAntiga,
      title: title || tarefaAntiga.title,
      description: description || tarefaAntiga.description,
      completed: typeof completed === 'boolean' ? completed : tarefaAntiga.completed,
    };

    // Substitui a tarefa antiga pela tarefa atualizada no nosso array.
    tarefas[indiceTarefa] = tarefaAtualizada;

    // Retorna a tarefa já com os dados atualizados.
    res.status(200).json(tarefaAtualizada);
  })

  // ROTA 4: EXCLUIR uma tarefa pelo ID
  // Gustavo Não esquecer Post -> HTTP: DELETE
  .delete((req, res) => {
    // Pega o ID que veio na URL.
    const { id } = req.params;

    // Cria um novo array contendo todas as tarefas, EXCETO aquela que tem o ID que queremos excluir.
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    //Filter -> ele copia a lista original e se for false, a tarefa é deixada para trás, fazendo assim o delete.

    // Validação: Se o tamanho do novo array for igual ao do antigo, significa que nenhuma tarefa foi removida.
    if (novasTarefas.length === tarefas.length) {
      // Nesse caso, a tarefa com o ID informado não existia. Retornamos um erro 404.
      return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
    }

    // Atualiza nosso array de "memória" para a nova lista (sem a tarefa excluída).
    tarefas = novasTarefas;

    // DELETE bem-sucedido é o status 204 (Sem Conteúdo).
    res.status(204).send();
  });


// exportamos nossa "central de rotas" para que o app.js possa usá-la.
export default router;
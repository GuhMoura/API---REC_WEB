# API-REC_WEB -> Gustavo Moura
Trabalho de Recuperação – Desenvolvimento Web - API de Lista de Tarefas (To-do list)


1. Descrição do Projeto
Esta é uma API REST simples, construída com Node.js e Express, para gerenciar uma lista de tarefas. A aplicação permite realizar as operações básicas de um CRUD (Criar, Ler, Atualizar e Deletar tarefas).

Os dados são armazenados em memória, em um array simples. Isso significa que a lista de tarefas será resetada toda vez que o servidor for reiniciado.

2. Pré-requisitos
Para rodar este projeto localmente, você precisará ter instalado em sua máquina:

Node.js: https://nodejs.org/pt/download.

Postman: https://www.postman.com/ -> Para testar os endpoints da API.

3. Instalação das Dependências
Com o Node.js já instalado, abra o terminal na pasta raiz do projeto e execute o seguinte comando para instalar as dependências necessárias (neste caso, o Express):

npm install

Este comando irá ler o arquivo package.json e baixar todos os pacotes listados na pasta node_modules.

4. Comando para Iniciar o Servidor
Após a instalação das dependências, inicie o servidor com o comando:

npm start

Você verá a seguinte mensagem no terminal, indicando que a API está no ar e pronta para receber requisições:
Servidor rodando na porta 3000

5. Rotas Disponíveis da API
A URL base para todos os endpoints é http://localhost:3000.

Método HTTP

Rota (Endpoint)

Descrição da Funcionalidade

-------------------------------------------

*POST* -> Criar

/tasks

Cria uma nova tarefa.

-------------------------------------------

*GET* -> Listar

/tasks

Lista todas as tarefas cadastradas.

-------------------------------------------

*PUT* -> Atualiza/Substitui

/tasks/:id

Atualiza uma tarefa existente pelo seu ID.

-------------------------------------------

*DELETE* -> Remove

/tasks/:id

Exclui uma tarefa existente pelo seu ID.

-------------------------------------------

6. Exemplo de JSON para Envio
Para criar ou atualizar uma tarefa, você precisará enviar um objeto JSON no corpo (body) da requisição.

Exemplo para criar uma nova tarefa (POST /tasks):

{
  "title": "Estudar para a prova de N1 WEB FULL STACK",
  "description": "Revisar os conceitos de Node.js, Express e APIs REST -> Para não precisar fazer Recuperação."
}

Exemplo para atualizar uma tarefa (PUT /tasks/:id):

{
  "title": "Tarefa Atualizada",
  "completed": true
}

Observação: Na rota de atualização, você pode enviar apenas os campos que deseja modificar.

7. Como Testar no Postman
Criar uma Tarefa (POST):

Selecione o método POST.

Insira a URL: http://localhost:3000/tasks.

Vá na aba Body, selecione a opção raw e, no menu suspenso, escolha JSON.

Cole o JSON de exemplo para criação.

Clique em Send. A resposta deve ser o objeto da tarefa criada, com um ID único.

Listar as Tarefas (GET):

Selecione o método GET.

Insira a URL: http://localhost:3000/tasks.

Clique em Send. A resposta será um array com todas as tarefas.

Atualizar uma Tarefa (PUT):

Copie o id de uma tarefa criada.

Selecione o método PUT.

Insira a URL, adicionando o ID no final: http://localhost:3000/tasks/SEU_ID_AQUI.

Na aba Body, configure como raw e JSON, e cole o JSON de exemplo para atualização.

Clique em Send.

Excluir uma Tarefa (DELETE):

Selecione o método DELETE.

Insira a URL com o ID da tarefa que deseja excluir: http://localhost:3000/tasks/SEU_ID_AQUI.

Clique em Send. A resposta deve ter o status 204 No Content, indicando sucesso.

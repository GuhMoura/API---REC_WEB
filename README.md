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

-------------------------------------------------------------------------------------------------

Testes da API com Postman (Prints)
Abaixo estão os resultados dos testes de cada endpoint da API, conforme solicitado.

1. Criar Tarefa (POST /tasks)
Descrição: Requisição para criar uma nova tarefa enviando title e description no corpo da requisição. A API retorna a tarefa criada com um ID único e status 201 Created.

<img width="1274" height="727" alt="post" src="https://github.com/user-attachments/assets/7293ccd4-bc34-4012-8538-da54e24d892f" />
<img width="1271" height="727" alt="Post Preview" src="https://github.com/user-attachments/assets/57da8609-a9ae-4fb2-8644-e098a024d67e" />


2. Listar Tarefas (GET /tasks)
Descrição: Requisição para listar todas as tarefas existentes. A API retorna um array contendo os objetos das tarefas e status 200 OK.

<img width="1273" height="725" alt="GET NOVO" src="https://github.com/user-attachments/assets/d477dad8-6b46-452f-bada-7ab25105ffc0" />


3. Atualizar Tarefa (PUT /tasks/:id)
Descrição: Requisição para atualizar uma tarefa específica, identificada pelo seu ID na URL. Os dados a serem modificados são enviados no corpo da requisição. A API retorna a tarefa atualizada e status 200 OK.

<img width="1271" height="723" alt="GET" src="https://github.com/user-attachments/assets/085dbc7f-48bc-4e19-8873-42eb28053dfe" />
<img width="1271" height="723" alt="GET" src="https://github.com/user-attachments/assets/60276f4e-ec50-4973-82be-348cfb24ebd6" />


4. Excluir Tarefa (DELETE /tasks/:id)
Descrição: Requisição para excluir uma tarefa específica, identificada pelo seu ID na URL. A API retorna um corpo vazio e o status 204 No Content, indicando que a operação foi bem-sucedida.

<img width="1268" height="719" alt="DELETE" src="https://github.com/user-attachments/assets/e272d35b-dcaa-43de-9d6d-401b1412565d" />


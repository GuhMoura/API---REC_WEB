# API de Lista de Tarefas (To-do List)

Uma API REST simples construída com Node.js e Express para gerenciar uma lista de tarefas. Esta API permite criar, ler, atualizar e deletar tarefas (operações CRUD). Os dados são armazenados em memória e resetados a cada reinicialização do servidor.

## Funcionalidades

-   **Criar** uma nova tarefa.
-   **Listar** todas as tarefas cadastradas.
-   **Atualizar** uma tarefa existente pelo seu ID.
-   **Excluir** uma tarefa existente pelo seu ID.

## Tecnologias Utilizadas

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)

## Pré-requisitos

-   Node.js (versão 14 ou superior)
-   NPM ou Yarn

## Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/todo-api.git](https://github.com/seu-usuario/todo-api.git)
    cd todo-api
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor:**
    ```bash
    npm start
    ```

O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

A URL base para todos os endpoints é `http://localhost:3000`.

### 1. Criar Tarefa

-   **Método:** `POST`
-   **Endpoint:** `/tasks`
-   **Corpo da Requisição (Body):** JSON
    ```json
    {
      "title": "Minha Primeira Tarefa",
      "description": "Descrição detalhada da minha primeira tarefa."
    }
    ```
-   **Resposta de Sucesso (201 Created):**
    ```json
    {
      "id": "e7a3b3e2-1b1e-4ab8-8b01-9a7c6f0c8d1e",
      "title": "Minha Primeira Tarefa",
      "description": "Descrição detalhada da minha primeira tarefa.",
      "completed": false,
      "createdAt": "2024-10-27T10:00:00.000Z"
    }
    ```

### 2. Listar Todas as Tarefas

-   **Método:** `GET`
-   **Endpoint:** `/tasks`
-   **Resposta de Sucesso (200 OK):**
    ```json
    [
      {
        "id": "e7a3b3e2-1b1e-4ab8-8b01-9a7c6f0c8d1e",
        "title": "Minha Primeira Tarefa",
        "description": "Descrição detalhada da minha primeira tarefa.",
        "completed": false,
        "createdAt": "2024-10-27T10:00:00.000Z"
      }
    ]
    ```

### 3. Atualizar Tarefa

-   **Método:** `PUT`
-   **Endpoint:** `/tasks/:id` (substitua `:id` pelo ID da tarefa)
-   **Corpo da Requisição (Body):** JSON (apenas os campos a serem atualizados)
    ```json
    {
      "title": "Título da Tarefa Atualizado",
      "completed": true
    }
    ```
-   **Resposta de Sucesso (200 OK):**
    ```json
    {
      "id": "e7a3b3e2-1b1e-4ab8-8b01-9a7c6f0c8d1e",
      "title": "Título da Tarefa Atualizado",
      "description": "Descrição detalhada da minha primeira tarefa.",
      "completed": true,
      "createdAt": "2024-10-27T10:00:00.000Z"
    }
    ```

### 4. Excluir Tarefa

-   **Método:** `DELETE`
-   **Endpoint:** `/tasks/:id` (substitua `:id` pelo ID da tarefa)
-   **Resposta de Sucesso (204 No Content):** Nenhum conteúdo no corpo da resposta.
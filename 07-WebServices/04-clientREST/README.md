## 04-Cliente REST

Se trata de um cliente REST, ou seja, uma aplicação que consome um web service baseado na arquitetura RESTful.

## Requisitos

- [NodeJS](https://nodejs.org/en)

### Estrutura do projeto

```
│   package.json
│   server.js
│
└───src
    ├───controllers
    │       examplesController.js
    │
    └───routes
            exampleRoutes.js
            index.js
```

### Funcionamento

Basta entrar no diretório "04-clientREST" e executar os comandos abaixo. Primeiro o comando para instalação de dependências

```
└──> npm install
```
E na sequência executar o comando abaixo para que seja iniciado o arquivo "server.js" com auxilio do nodemon e express

```
└──> npm start
```

### **Rotas**

| Method | Endpoint                    | Description                                         | Auth Required  |
|--------|-----------------------------|-----------------------------------------------------|----------------|
| GET    | `/`                         | Rota principal da aplicação                         | ❌ No         |
| GET    | `/example/`                 | Rota principal dos exemplos                         | ❌ No         |
| GET    | `/example/get`              | Exemplo de um rota GET                              | ❌ No         |
| GET    | `/example/getbyid/:id`      | Exemplo de uma rota GET buscando por um ID          | ❌ No         |
| POST   | `/example/post/:id`         | Exemplo de uma rota POST para um determinado ID     | ❌ No         |
| PUT    | `/example/put/:id`          | Exemplo de uma rota PUT para um determinado ID      | ❌ No         |
| DELETE | `/example/delete/:id`       | Exemplo de uma rota DELETE para um determinado ID   | ❌ No         |





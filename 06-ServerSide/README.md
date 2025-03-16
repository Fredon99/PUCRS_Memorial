# Arquitetura Server-Side

A arquitetura server-side refere-se ao modelo de desenvolvimento em que o processamento das requisições ocorre no servidor antes de enviar a resposta ao cliente. Diferente da abordagem client-side, onde a lógica é executada no navegador do usuário, a arquitetura server-side é amplamente utilizada para aplicações que exigem maior segurança, processamento de dados complexos e integração com bancos de dados.

## Scripts desenvolvidos - Lista de Afazeres

Foram desenvolvidos cinco scripts para uma melhor compreensão a cerca de uma arquitetura server-side, sendo eles: 

### 01-Programação assíncrona

Trata da programação assíncrona, que permite a execução de operações sem bloquear o fluxo principal do código.

#### Funcionamento

Basta entrar no diretório "01-programacao_assincrona" e executar os scripts com os seguintes comandos para executar qualquer um dos scripts

```
└──> node async.js
```

ou 

```
└──> node then.js
```

### 02-Importação de módulos

Refere-se ao uso de módulos em JavaScript/NodeJS para organizar e reutilizar código.

#### Funcionamento

Basta entrar no diretório "02-importacao_modulos" e executar os comandos abaixo. Primeiro o comando para instalação de dependências devido ao ECMAScript Modules

```
└──> npm install
```
E na sequência executar o comando abaixo para que seja iniciado o arquivo app.js

```
└──> npm start
```

### 03-Servidor http

Script que cria um servidor HTTP básico usando o módulo http do NodeJS.

#### Funcionamento

Basta entrar no diretório "03-http_server" e executar os comandos abaixo. Primeiro o comando para instalação de dependências

```
└──> npm install
```
E na sequência executar o comando abaixo para que seja iniciado o arquivo server.js com auxilio do nodemon

```
└──> npm start
```

### 04-Servidor http com express

Tamém refere-se a criação de um servidor http, mas utilizando o Express, um framework minimalista para NodeJS que facilita a criação de servidores http.

#### Funcionamento

Basta entrar no diretório "04-http_server_express" e executar os comandos abaixo. Primeiro o comando para instalação de dependências

```
└──> npm install
```
E na sequência executar o comando abaixo para que seja iniciado o arquivo app.js com auxilio do nodemon e express

```
└──> npm start
```

### 05-CRUD com express

Um script que provavelmente implementa um CRUD (Create, Read, Update, Delete) usando o Express.

#### Estrutura do projeto

```
│   .gitignore
│   app.js
│   package-lock.json
│   package.json
│   
├───controllers
│       productController.js     
│
└───routes
        index.js
        productRoutes.js
```

#### Funcionamento

Basta entrar no diretório "05-crud_express" e executar os comandos abaixo. Primeiro o comando para instalação de dependências

```
└──> npm install
```
E na sequência executar o comando abaixo para que seja iniciado o arquivo app.js com auxilio do nodemon e express

```
└──> npm start
```

## Tecnologias utilizadas

Como linguagem de programação foi utilizado o JavaScript, o runtime utilizado foi o NodeJS e o framework utilizado foi o Express.

## Funcionamento

### Requisitos

- [NodeJS](https://nodejs.org/en)

### Execução

Na pasta raiz do projeto onde está localizado o arquivo "package.json" é necessário executar o comando abaixo para instalação das dependências
```
└──> npm install
```

Na sequência, basta executar o comando abaixo para que a aplicação seja inicializada localmente
```
└──> npm install
```
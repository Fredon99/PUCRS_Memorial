Exemplo de pedidos
===================================

Este exemplo utiliza proxy reverso através da biblioteca "http-middleware-proxy" para fazer a integração entre o serviço de usuário e pedidos.

## Estrutura do projeto

```
│   package.json
│   README.md
│
└───src
    ├───gateway
    │       server.js
    │
    ├───order-service
    │       orders.js
    │       routes.js
    │       server.js
    │
    ├───proxy
    │       proxy.js
    │
    └───user-service
            routes.js
            server.js
            users.js
```

## Instalação e execução do projeto

Para instalação e execução do projeto é ncessário que se tenha instalado o [NodeJS](https://nodejs.org/).

### Instalação

Para instalação de dependências, basta executar o comando abaixo no diretório raiz "01-Pedidos"

```
npm install
```

### Execução

Para execução do projeto, basta executar os comandos abaixo:

Para iniciar o serviço de usuários

```
npm start:users
```
Para iniciar o serviço de pedidos

```
start:orders
```

E por fim, para iniciar o gateway server

```
npm start
```
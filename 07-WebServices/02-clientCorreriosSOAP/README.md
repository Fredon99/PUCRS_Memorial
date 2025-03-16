## 02-Cliente Correios SOAP

É um cliente SOAP que consome um web service dos Correios.

## Requisitos

- [NodeJS](https://nodejs.org/en)
- [WSDL - Correios](https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl)

### Estrutura do projeto

```
│   package.json
│   server.js
│
├───controllers
│       correiosController.js
│
└───routes
        correiosRoutes.js
        index.js
```

### Funcionamento

Basta entrar no diretório "02-clientCorreiosSOAP" e executar os comandos abaixo. Primeiro o comando para instalação de dependências

```
└──> npm install
```
E na sequência executar o comando abaixo para que seja iniciado o arquivo "server.js" com auxilio do nodemon e express

```
└──> npm start
```

### **Rotas**

| Method | Endpoint                 | Description                                                      | Auth Required  |
|--------|--------------------------|------------------------------------------------------------------|----------------|
| GET    | `/correios/description`  | Descrição dos serviços                                           | ❌ No         |
| GET    | `/correios/consulta`     | Consulta de CEP, mas agora é necessário auth (não desenvolvido)  | ✅ Yes        |

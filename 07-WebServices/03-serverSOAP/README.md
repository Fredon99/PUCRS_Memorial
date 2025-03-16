## 02-Server SOAP

É um servidor SOAP, ou seja, um web service que oferece funcionalidades para clientes consumirem.

## Requisitos

- [NodeJS](https://nodejs.org/en)
- [WSDL - Local](https://github.com/Fredon99/PUCRS_Memorial/blob/main/07-WebServices/03-serverSOAP/server/wscalc1.wsdl)

### Estrutura do projeto

```
│   package.json
│
├───client
│       client.js
│
└───server
        server.js
        wscalc1.wsdl
```

### Funcionamento

Basta entrar no diretório "03-clientCorreiosSOAP" e executar os comandos abaixo. Primeiro o comando para instalação de dependências

```
└──> npm install
```
E na sequência executar o comando abaixo para que seja iniciado o servidor SOAP

```
└──> npm run start:server
```

E por fim, executar o cliente para seja testado o servidor SOAP

```
└──> npm run start:client
```




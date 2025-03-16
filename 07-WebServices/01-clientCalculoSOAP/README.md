## 01-Cliente Cálculo SOAP

Esse script é um cliente SOAP que consome um serviço de cálculo.

## Requisitos

- [NodeJS](https://nodejs.org/en)
- [WSDL](http://www.dneonline.com/calculator.asmx?WSDL)

### Estrutura do projeto

```
│   package.json
│   README.md
│   server.js
│
├───controllers
│       calculatorControllers.js
│
└───routes
        calculatorRoutes.js
        index.js
```

### Funcionamento

Basta entrar no diretório "01-clientCalculoSOAP" e executar os comandos abaixo. Primeiro o comando para instalação de dependências

```
└──> npm install
```
E na sequência executar o comando abaixo para que seja iniciado o arquivo "server.js" com auxilio do nodemon e express

```
└──> npm start
```

### **Routes**

| Method | Endpoint                                    | Description                                           | Auth Required  |
|--------|---------------------------------------------|-------------------------------------------------------|----------------|
| GET    | `/describe`                                 | Descrição dos cálculos                                | ❌ No         |
| GET    | `/calculate/:operation/:valueA/:valueB`     | Realização dos calculos, passando operador e valores  | ❌ No         |

## 01-Teste estático

Esse script objetiva identificar erros no código sem executá-lo.

## Requisitos

- [NodeJS](https://nodejs.org/en)
- [Documentação ESLint](https://eslint.org/docs/latest/use/getting-started)

### Estrutura do projeto

```
eslint.config.js
index.js
package.json
```

### Funcionamento

Basta entrar no diretório "01-TesteEstaico" e executar os comandos abaixo. Primeiro o comando para instalação de dependências

```
└──> npm install
```
E na sequência executar o comando abaixo para testar se aplicação está seguindo o que foi definido no arquivo de configuração do ESLint "eslint.config.js" 

```
└──> npm test
```

E por fim, executar a aplicação "index.js". Que é um script bem simples para cálculo do salário total de uma pessoa, incluindo as horas extras.

```
└──> npm start
```




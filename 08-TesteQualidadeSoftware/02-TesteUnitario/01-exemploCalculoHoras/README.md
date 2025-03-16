## 01-exemplo Cálculo Horas

Visa testar funções que calculam o salário e descontos de horas de um profissional.

## Requisitos

- [NodeJS](https://nodejs.org/en)
- [Documentação ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Documentação JEST](https://jestjs.io/docs/getting-started)

### Estrutura do projeto

```
│   eslint.config.js
│   index.js
│   package.json
│
└───test
        folhaPagamento.test.js
```

### Funcionamento

Basta entrar no diretório "01-exemploCalculoHoras" e executar os comandos abaixo. Primeiro o comando para instalação de dependências

```
└──> npm install
```
E na sequência executar o comando abaixo para testar as funções presentes no index.js através do JEST. 

```
└──> npm test
```

E por fim, executar a aplicação "index.js". Que apenas exibirá uma mensagem, pois a função principal do index.js neste caso é conter as funções que o JEST testará.

```
└──> npm start
```

Caso deseje realizar outros tipos de teste, é possível através dos comandos a seguir. O primeiro deles é o modo watch, ou seja, ele fica rodando e reexecuta os testes automaticamente sempre que um arquivo for alterado. 

```
└──> npm run test:watch
```

A segunda maneira será gerado um relatório de cobertura de código, mostrando quais partes do código foram testadas e quais não foram.

```
└──> npm run test:coverage
```

Será criada uma pasta chamada "coverage", e o projeto ficará com a seguinte estrutra:

```
│   eslint.config.js
│   index.js
│   package.json
│
├───coverage
│   │   clover.xml
│   │   coverage-final.json
│   │   lcov.info
│   │
│   └───lcov-report
│           base.css
│           block-navigation.js
│           favicon.png
│           index.html
│           index.js.html
│           prettify.css
│           prettify.js
│           sort-arrow-sprite.png
│           sorter.js
│
└───test
        folhaPagamento.test.js
```

Ao abrir o arquivo "coverage/lcov-report/index.html" poderá acompanhar o status dos testes através do browser.




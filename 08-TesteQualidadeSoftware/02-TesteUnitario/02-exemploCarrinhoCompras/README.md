## 02-Carrinho de compras

Visa testar um carrinho de compras de um e-commerce.

## Requisitos

- [NodeJS](https://nodejs.org/en)
- [Documentação ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Documentação JEST](https://jestjs.io/docs/getting-started)

### Estrutura do projeto

```
│   app.js
│   carrinho.js
│   item.js
│   package.json
│   README.md
│
└───test
        carrinho.test.js
        item.test.js
```

### Funcionamento

Basta entrar no diretório "02-exemploCarrinhoCompras" e executar os comandos abaixo. Primeiro o comando para instalação de dependências

```
└──> npm install
```
E na sequência executar o comando abaixo para testar as funções presentes no index.js através do JEST. 

```
└──> npm test
```

E por fim, executar a aplicação "app.js". Que apenas exibirá o que está no carrinho de compras.

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
│   app.js
│   carrinho.js
│   item.js
│   package.json
│   README.md
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
        carrinho.test.js
        item.test.js


```

Ao abrir o arquivo "coverage/lcov-report/index.html" poderá acompanhar o status dos testes através do browser.

A terceira e última maneira é através do comando abaixo, onde é possível que o Jest tente detectar "handles" abertos (como conexões de banco de dados, sockets ou timers) que podem estar impedindo o encerramento correto dos testes.

```
└──> npm run tests
```
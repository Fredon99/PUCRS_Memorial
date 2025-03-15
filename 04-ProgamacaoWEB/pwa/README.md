# Requisitos
[NodeJS](https://nodejs.org/en)

# PWA
Este é um exemplo simples de PWA, contendo apenas uma página principal.

* Execução
É necessário entrar na pasta raiz, onde se encontra o arquivo "package.json" e executar o comando:
```
└──> npm install
```

Na sequência executar o comando abaixo escolhendo a porta 8080 por exemplo:
```
└──> npx http-server -p 8080
```

* Observação
Caso tenha a extensão do Live-Server do VSCode instalada, poderá utilizá-la como servidor HTTP.

* Funcionamento
- Uma vez rodando através de um servidor http, esta aplicação poderá ser baixada para uso local.
- Caso o usuário perca a conexão com a internet, no browser é mostrada uma mensagem que o usuário está offline.


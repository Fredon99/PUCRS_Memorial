# Banco de dados NoSQL

Banco de Dados NoSQL trata do estudo de sistemas de gerenciamento de banco de dados que não utilizam o modelo relacional tradicional. Em vez de organizar os dados em tabelas, como nos bancos relacionais, os bancos NoSQL permitem maior flexibilidade, trabalhando com diferentes modelos de dados, como documentos, chave-valor, grafos e colunas.

Neste tópico em específico será abordado apenas o modelo de documentos através do MongoDB.

## Requisitos

- [Docker](https://www.docker.com/)
- [Container Docker - Mongo](https://hub.docker.com/_/mongo)
- [Container Docker - PostgreSQL](https://hub.docker.com/_/postgres)
- [MongoDB Compass](https://www.mongodb.com/products/tools/compass)


## Instalação

A primeira etapa que deve ser realizada é a instalação do [Docker](https://www.docker.com/), na sequência basta baixar a imagem do MongoDB através do comando:

```
docker pull mongo
```

Para executar a imagem baixada basta executar o comando abaixo

```
docker run --name mongodb -p 27017:27017 -d mongo
```

A próxima etapa é fazer a instalação do MongoDB Compass através do site [MongoDB Compass](https://www.mongodb.com/products/tools/compass)


Uma vez instalado o Compass, base criar uma nova conexão apontando para o container do MongoDB. Como é ilustrado na figura abaixo

![MongoDB-Connection]()


Com isso, é necessário cirar uma base e uma coleção. E na sequência basta executar os comandos para inserção de dados em uma determinada base que as coleções serão criadas automaticamente. Como é mostrado na imagem abaixo

![MongoDB-Creation]()

## Estrutura dos arquivos e scripts

Foram desenvolvidos três pastas contendo os códigos necessários inserção, busca e junção de informaçõs no MongoDB. Essas pastas estão descritas a seguir:

### 01-Inserts

Diretório que contém os scripts para inserir documentos em coleções do MongoDB através do comando insertOne()

### 02-Busca

Scripts para buscar documentos no MongoDB.

### 03-Join

Scripts que realizam junções de coleções no MongoDB através de agregação.
## 04-Modelo Físico

Na etapa de modelo físico, é realizado o processo de definição detalhada da implementação do banco de dados, levando em consideração as características específicas do sistema de gerenciamento de banco de dados (SGBD) que será utilizado.

![Modelo Físico](https://github.com/Fredon99/PUCRS_Memorial/blob/main/09-BancoRelacional/05-ModeloFisico/Modelagem%20de%20dados%20-%20Modelo%20f%C3%ADsico.png)

## Requisitos

- [Docker](https://www.docker.com/)
- [Container Docker - PostgreSQL](https://hub.docker.com/_/postgres)
- [Container Docker - PgAdmin4](https://www.pgadmin.org/download/)

## Container Postgresql e PgAdmin4

A primeira etapa que deve ser realizada é a instalação do [Docker](https://www.docker.com/), na sequência basta baixar a imagem do PostgreSQL através do comando:

```
docker pull postgres
```

Para executar a imagem baixada basta executar o comando abaixo, substituindo as variáveis <user> e <password>

```
docker run --name postgresql -p 5432:5432 -e POSTGRES_USER=<user> -e POSTGRES_PASSWORD=<password> -d postgres
```

O próximo passo é baixar a imagem do PgAdmin através do comando abaixo. Caso não queira uma interface gráfica para administração do ambiente, esta etapa não será necessária.

```
docker pull dpage/pgadmin4
```

Para executar a imagem baixada do PgAdmin, basta executar o camndo a seguir, substituindo as variáveis <email@email.com> e <password>

```
docker run -p 3014:80 --name pgadmin -e "PGADMIN_DEFAULT_EMAIL=<email@email.com>" -e "PGADMIN_DEFAULT_PASSWORD=<password>" -d dpage/pgadmin4
```

Na sequência, basta acessar o PgAdmin pelo navegador na porta 3014 e colocar as credenciais utilizadas na criação do container do PgAdmin

![PgAdmin - Login](https://github.com/Fredon99/PUCRS_Memorial/blob/main/09-BancoRelacional/05-ModeloFisico/PgAdmin-Login.png)

Para adicionar o servidor PostgreSQL no PgAdmin, basta clicar com o botão direito em "Servers" e na sequência "Register > Server". 

Com isso basta dar um "nome para o servidor" na aba "General", e na aba "Connection" colocar o "IP da sua máquina", "usuário" e "senha" que foram utilizados na criação do container do PostgreSQL.

![PgAdmin - Server](https://github.com/Fredon99/PUCRS_Memorial/blob/main/09-BancoRelacional/05-ModeloFisico/PgAdmin-Server.png)

## Criação e inserção do dados no PostgreSQL

Para a criação de tabelas e inserção de dados na base de dados, basta criar uma nova Database e utilizar a ferramenta "Query Tool" para execução dos scripts "create.sql" e "insert.sql".

Na imagem a seguir foi criada a "TabelaDepartamento" como demonstrativo dos passos supracitados.

![PgAdmin - Database](https://github.com/Fredon99/PUCRS_Memorial/blob/main/09-BancoRelacional/05-ModeloFisico/PgAdmin-Database.png)
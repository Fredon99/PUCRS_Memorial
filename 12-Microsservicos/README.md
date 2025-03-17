# Microsserviços

A arquitetura de microsserviços é um modelo de desenvolvimento de software que divide uma aplicação em pequenos serviços independentes, cada um responsável por uma funcionalidade específica. Esses serviços se comunicam entre si por meio de APIs, permitindo maior escalabilidade, flexibilidade e facilidade na manutenção.


Neste tópico foram desenvolvidos e criados forks dos exemplos passados em sala de aula para melhor compreensão.

## Scripts

Foram desenvolvidos para entermos de maneira mais transparente como são "cifradas" e "decifridas" informações a nível de código com a utilização de bibliotecas. 

### 01-Pedidos

Este serviço é uma API baseada em microsserviços, composta por um API Gateway, um serviço de pedidos, um serviço de usuários e um proxy, que juntos gerenciam requisições e comunicação entre serviços.

### 02-Mensageria

Um microsserviço de mensageria gerencia a comunicação assíncrona entre outros microsserviços, garantindo que mensagens e eventos sejam entregues corretamente. Neste caso o broker utilizado foi o RabbitMQ.

### 03-Carrinho de compras

O microsserviço de carrinho de compras gerencia os produtos que os usuários adicionam ao carrinho antes de finalizar a compra. Ele mantém o estado do carrinho, calcula preços e pode se comunicar com serviços de estoque.

### 04-FaaS

Um microsserviço baseado em FaaS (Function as a Service) executa pequenas funções sob demanda, sem a necessidade de manter um servidor sempre ativo, esta é uma grande vantagem principalmente quando hospedado em nuvem.

## Execução dos scripts

Dentro de cada um dos diretórios será melhor exemplificado a execução de cada um deles.

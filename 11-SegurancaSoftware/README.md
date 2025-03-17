# Segurança de Software

A segurança de software é essencial para proteger sistemas e dados contra ameaças cibernéticas, como malwares, ataques de hackers e vazamento de informações. Boas práticas de desenvolvimento, como a validação de entradas, uso de criptografia e atualização constante de softwares, ajudam a minimizar vulnerabilidades.

Neste tópico em específico serão abordados através de scripts simples a utilização de criptografia e segurança na comunição.

## Requisitos

- [Python versão 3](https://www.docker.com/)
- [openSSL](https://openssl-library.org/)


## Instalação

O python e do openSSl geralmente são nativos em distribuições Linux, e no Windoss para instalar o pacote python basta baixar e instalar o executável através desta página [Python versão 3](https://www.docker.com/). 

Para a instalação do openSSL em Windows eu recomendo este vídeo, no qual mostra detalhadamente todo o processo de instalação [:link:](https://www.youtube.com/watch?v=uq_uJkK3XcA&ab_channel=Cloudzy)

É importante realizar a instalação da biblioteca ECDSA, através do comando abaixo antes de executar os scripts

```
pip install ecdsa
```

## Scripts

Foram desenvolvidos para entermos de maneira mais transparente como são "cifradas" e "decifridas" informações a nível de código com a utilização de bibliotecas. 

### 01-Criptografia Simétrica com AES

Implementa criptografia simétrica usando o algoritmo AES (Advanced Encryption Standard).

### 02-Criptografia Assimétrica com RSA

Utiliza criptografia assimétrica com o algoritmo RSA para troca segura de chaves ou comunicação segura.

### 03-Função Hash com SHA256

Gera um hash criptográfico usando o algoritmo SHA-256, comumente usado para integridade de dados e segurança de senhas.

### 04-Assinatura digital com ECDSA

Implementa assinaturas digitais usando o algoritmo ECDSA (Elliptic Curve Digital Signature Algorithm), garantindo autenticidade e integridade.

### 05-SSL / TLS

Gera certificado e chave privada SSL/TLS.

### 06-Servidor https

Um servidor HTTP seguro (HTTPS), que usa certificados TLS para criptografar a comunicação.

## Execução dos scripts

Os scripts desenvolvidos em python podem ser executados através do comando

```
python3 <nomde do script.py>
```

Já no caso do shellscript, basta executar o comando dentro do arquivo utilizando openssl

```
openssl req -x509 -newkey rsa:2048 -keyout chave_privada.pem -out certificado.pem -days 365 -nodes
```

E o para executar o "https_server", basta entrar no diretório "06-https_erver" e executar os comandos abaixo. Primeiramente o comando para instalação de dependências

```
npm install
```

E na sequência para subir o servidor https, basta executar

```
node server.js
```

É importante que os arquivos "certificado.pem" e "chave_privada.pem" estejam no mesmo diretório que "server.js". Caso precise criar esses arquivos novamente, base executar o comando abaixo dentro do diretório

```
openssl req -x509 -newkey rsa:2048 -keyout chave_privada.pem -out certificado.pem -days 365 -nodes
```

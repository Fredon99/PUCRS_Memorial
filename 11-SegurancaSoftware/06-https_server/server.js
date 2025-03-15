import https from 'https';
import fs from 'fs';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Conexão segura com TLS!");
});

const options = {
    key: fs.readFileSync('chave_privada.pem'),
    cert: fs.readFileSync('certificado.pem'),
};

https.createServer(options, app).listen(443, () => {
    console.log("Servidor HTTPS rodando na porta 443");
});

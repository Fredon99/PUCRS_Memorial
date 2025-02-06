import express from 'express';
const app = express();
const port = 8082;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home/:numerorota', (req, res) => {
    const numeroRota = req.params.numerorota
    res.send(`Bem vindo a página home de número ${numeroRota}`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

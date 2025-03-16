import express from 'express';
import routes from './routes/index.js'

const app = express()
const port = 3011

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

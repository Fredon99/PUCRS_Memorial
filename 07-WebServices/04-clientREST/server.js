import express from 'express';
import routes from './src/routes/index.js'

const app = express()
const port = 3001

routes(app)

app.listen(port, () => {
  console.log(`REST API running o port ${port}`)
})

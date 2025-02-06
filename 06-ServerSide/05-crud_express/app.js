import express from 'express';
import routes from './routes/index.js'

const app = express();
const port = 8083;

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

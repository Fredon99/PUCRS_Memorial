import express from 'express';
import correiosRoutes from './correiosRoutes.js'

const routes = (app) => {
    const router = express.Router();

    app.get('/', (req, res) => {
        res.status(200).json({"message": "main route"})
      })

    app.use('/', router); 
    app.use('/correios', correiosRoutes);
}

export default routes;
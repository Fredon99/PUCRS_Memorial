import express from 'express';
import exampleRoutes from './exampleRoutes.js'


const routes = (app) => { 
    const router = express.Router();

    router.get('/', (req, res) => {
        res.status(200).json({message: "Você está na rota principal da aplicação REST."});
      })

    app.use('/', router);
    app.use('/example', exampleRoutes);

}


export default routes;
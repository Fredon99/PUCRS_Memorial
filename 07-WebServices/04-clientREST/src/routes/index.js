import express from 'express';
import exampleRoutes from './exampleRoutes.js'


const routes = (app) => { 
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send('Hello World!');
      })

    app.use('/', router);
    app.use('/example', exampleRoutes);

}


export default routes;
import express from 'express';
import product from './productRoutes.js';

const routes = (app) => {

    app.use((_,res,next) => {
        res.header("Content-Type","application/json");
        res.header('X-Powered-By', 'Node.js');
        next()
    })

    app.get('/', (_, res) => {
        res.status(200).json({"message": "Welcome to main page"});
      })
      
      app.use(express.json(), product);
}

export default routes;

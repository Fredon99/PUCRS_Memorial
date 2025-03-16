import express from 'express';
import Example from '../controllers/examplesController.js';

const routes = express.Router()

routes.get('/', Example.mainRoute);
routes.get('/get', Example.get);
routes.get('/getbyid/:id', Example.getById);
routes.post('/post/:id', Example.post);
routes.put('/put/:id', Example.put);
routes.delete('/delete/:id', Example.delete)


export default routes;
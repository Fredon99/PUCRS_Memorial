import express from 'express';
import Correios from '../controllers/correiosController.js';

const routes = express.Router()

routes.get('/description', Correios.description);
routes.get('/consulta', Correios.consultaCEP);

export default routes;
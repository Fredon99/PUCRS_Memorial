import express from 'express';
import calculatorController from '../controllers/calculatorControllers.js'

const routes = express.Router();

routes.get("/describe", calculatorController.describe);
routes.get("/calculate/:operation/:valueA/:valueB", calculatorController.calculate);

export default routes;
import express from  'express';
import productController from '../controllers/productController.js';

const routes = express.Router()

routes.get('/product', productController.listProducts);
routes.get('/product/:id', productController.listProduct);
routes.post('/product/', productController.createProduct);
routes.put('/product/:id', productController.updateProduct);
routes.delete('/product/:id', productController.deleteProduct);

export default routes;
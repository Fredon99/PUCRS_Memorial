// /src/order-service/server.js
import express from 'express';
import { orders } from './orders.js';  // Import orders data
import { orderRoutes } from './routes.js'; // Import routes

const app = express();
const PORT = 3002;

app.use(express.json());

// Use the order-related routes
app.use('/orders', orderRoutes);

app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));

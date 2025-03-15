// /src/order-service/routes.js
import express from 'express';
import { orders } from './orders.js';
import axios from 'axios';

export const orderRoutes = express.Router();

// GET orders and enrich with user data
orderRoutes.get('/', async (req, res) => {
  try {
    const enrichedOrders = await Promise.all(
      orders.map(async (order) => {
        const userResponse = await axios.get(`http://localhost:3001/users/${order.userId}`);
        return { ...order, user: userResponse.data };
      })
    );
    res.json(enrichedOrders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user data' });
  }
});

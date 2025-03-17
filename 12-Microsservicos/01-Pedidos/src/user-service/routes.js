// /src/user-service/routes.js
import express from 'express';
import { users } from './users.js';

export const userRoutes = express.Router();

// GET users by ID
userRoutes.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

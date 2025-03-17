// /src/user-service/server.js
import express from 'express';
import { users } from './users.js';  // Import users data
import { userRoutes } from './routes.js'; // Import routes

const app = express();
const PORT = 3001;

app.use(express.json());

// Use the user-related routes
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));

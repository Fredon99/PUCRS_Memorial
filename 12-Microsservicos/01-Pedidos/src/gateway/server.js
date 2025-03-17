// /src/gateway/server.js
import express from 'express';
import { createOrderProxy, createUserProxy } from '../proxy/proxy.js';  // Import the proxy functions

const app = express();
const PORT = 3000;

// Use the proxies for both services
app.use(createOrderProxy());
app.use(createUserProxy());

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));

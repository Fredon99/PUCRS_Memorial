// /src/proxy/proxy.js
import { createProxyMiddleware } from 'http-proxy-middleware';

export const createOrderProxy = () => {
  return createProxyMiddleware('/api/orders', {
    target: 'http://localhost:3002',  // Point to the order service
    changeOrigin: true,
    pathRewrite: { "^/api/orders": "/orders" }, // Rewriting to match the backend
    logLevel: 'debug',  // Enable debugging
  });
};

export const createUserProxy = () => {
  return createProxyMiddleware('/api/users', {
    target: 'http://localhost:3001',  // Point to the user service
    changeOrigin: true,
    pathRewrite: { "^/api/users": "/users" }, // Rewriting to match the backend
    logLevel: 'debug',  // Enable debugging
  });
};

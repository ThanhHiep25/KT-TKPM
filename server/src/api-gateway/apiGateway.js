const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/quoting', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/receiving', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/assessment', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/accounting', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));
app.use('/reporting', createProxyMiddleware({ target: 'http://localhost:3005', changeOrigin: true }));

app.listen(3000, () => {
    console.log('API Gateway listening on port 3000');
});

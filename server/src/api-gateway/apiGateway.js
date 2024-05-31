const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

app.use(cors());

// Create a proxy middleware

// thống kê
app.use('/quoting', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
// thiết bị
app.use('/receiveItem', createProxyMiddleware({ target: 'http://localhost:3002/receiving/data', changeOrigin: true }));

app.use('/deletedItem/:id', createProxyMiddleware({ target: 'http://localhost:3002/receiving/delete', changeOrigin: true }));
app.use('/addreceiveItem', createProxyMiddleware({ target: 'http://localhost:3002/receiving/add', changeOrigin: true }));
//
app.use('/assessment', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/accounting', createProxyMiddleware({ target: 'http://localhost:3004/account/transactions', changeOrigin: true }));
app.use('/addaccounting', createProxyMiddleware({ target: 'http://localhost:3004/account/addtransactions', changeOrigin: true }));

// đánh giá
app.use('/reporting', createProxyMiddleware({ target: 'http://localhost:3005/reporting/report', changeOrigin: true }));
app.use('/deletereporting/:id', createProxyMiddleware({ target: 'http://localhost:3005/reporting/deletereport', changeOrigin: true }));

// đăng nhập
app.use('/login', createProxyMiddleware({ target: 'http://localhost:3006/api/login', changeOrigin: true }));
app.use('/user', createProxyMiddleware({ target: 'http://localhost:3006/api/users', changeOrigin: true }));

app.listen(3007, () => {
    console.log('API Gateway listening on port 3007');
});

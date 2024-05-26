// routes/accountingRoutes.js
const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Route để tạo mới một giao dịch
router.post('/account', async (req, res) => {
    const { deviceId, amount } = req.body;
    try {
        const transaction = new Transaction({ deviceId, amount, status: 'pending' });
        await transaction.save();
        res.status(201).json({ message: 'Transaction created', transaction });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route để lấy tất cả các giao dịch
router.get('/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route để kiểm tra kết nối
router.get('/', (req, res) => {
    res.send('Hello from the Accounting Service!');
});

module.exports = router;

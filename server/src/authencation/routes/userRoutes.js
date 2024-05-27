const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route để tạo người dùng mới
router.post('/users', async (req, res) => {
    const { email, password, name, phone, address } = req.body;
    try {
        const user = new User({ email, password, name, phone, address });
        await user.save();
        res.status(201).json({ message: 'User created', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route để lấy tất cả người dùng
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route để lấy người dùng theo email
router.get('/users/:email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Route để xử lý đăng nhập
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Email hoặc mật khẩu không đúng' });
        }
        res.json({ message: 'Đăng nhập thành công', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;


module.exports = router;

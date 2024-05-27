const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

// Route để add thiết bị
// Route để thêm thiết bị mới
router.post('/add', async (req, res) => {
    const { id, name, std, nameSP, loaiSP, diaChi, tinhTrang } = req.body;
    const device = new Device({ id, name, std, nameSP, loaiSP, diaChi, tinhTrang });
    try {
        await device.save();
        res.status(201).json({ message: 'Device added successfully', device });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// Route để thêm thiết bị mới
router.post('/', async (req, res) => {
    const { id, name, std, nameSP, loaiSP, diaChi, tinhTrang } = req.body;
    const device = new Device({ id, name, std, nameSP, loaiSP, diaChi, tinhTrang });
    try {
        await device.save();
        res.status(201).json({ message: 'Device added successfully', device });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route kiểm tra kết nối
router.get('/', (req, res) => {
    res.send('Hello from the Accounting Service!');
});

// Route để lấy tất cả dữ liệu thiết bị
router.get('/data', async (req, res) => {
    try {
        const devices = await Device.find();
        res.json(devices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

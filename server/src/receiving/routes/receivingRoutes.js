const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

// Route để add thiết bị
router.post('/add', async (req, res) => {
    const { id, name, std, nameSP, loaiSP, diaChi, tinhTrang } = req.body;
    
    // Kiểm tra xem có thiết bị nào đã tồn tại với id này chưa
    const existingDevice = await Device.findOne({ id });
    if (existingDevice) {
        return res.status(400).json({ message: 'Device with this ID already exists' });
    }

    // Nếu không có thiết bị nào tồn tại với id này, thêm mới thiết bị
    const device = new Device({ id, name, std, nameSP, loaiSP, diaChi, tinhTrang });
    try {
        await device.save();
        res.status(201).json({ message: 'Device added successfully', device });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
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


// Route để xóa thiết bị
router.delete('/delete', async (req, res) => {
    const deviceId = req.params.id;
    try {
        const deletedDevice = await Device.findOneAndDelete("id");
        if (!deletedDevice) {
            return res.status(404).json({ message: "Device not found" });
        }
        res.status(200).json({ message: "Device deleted successfully", deletedDevice });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
 
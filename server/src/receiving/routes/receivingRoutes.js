const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

// Receiving route
router.post('/receive', async (req, res) => {
    const { id } = req.body;
    const device = await Device.findById(id);
    if (device) {
        device.received = true;
        await device.save();
        res.json({ message: 'Device received' });
    } else {
        res.status(404).json({ message: 'Device not found' });
    }
});

module.exports = router;

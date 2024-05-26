const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

// Assessment route
router.post('/assess', async (req, res) => {
    const { id } = req.body;
    const device = await Device.findById(id);
    if (device) {
        device.assessed = true;
        await device.save();
        res.json({ message: 'Device assessed' });
    } else {
        res.status(404).json({ message: 'Device not found' });
    }
});

module.exports = router;

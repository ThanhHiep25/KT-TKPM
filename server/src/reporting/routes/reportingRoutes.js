const express = require('express');
const router = express.Router();

// Dummy route for reporting
router.get('/report', (req, res) => {
    res.json({ message: 'Reporting service' });
});

module.exports = router;

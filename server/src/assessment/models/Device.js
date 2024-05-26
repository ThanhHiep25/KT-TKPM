const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    name: String,
    model: String,
    condition: String,
    assessed: Boolean,
});

module.exports = mongoose.model('Device', deviceSchema);

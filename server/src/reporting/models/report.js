const mongoose =  require('mongoose');

const reportSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    std: String,
    nameSP: String,
    loaiSP: String,
    diaChi: String,
    tinhTrang: String,
    date: String,
    dateG: String,
    gia: Number,
});

module.exports = mongoose.model('Report', reportSchema);
const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  id: String,
  name: String,
  std: String,
  nameSP: String,
  loaiSP: String,
  diaChi: String,
  tinhTrang: String,
});

module.exports = mongoose.model("Device", deviceSchema);

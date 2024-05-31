// models/Transaction.js
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  id: String,
  nameUser: String,
  nameSP: String,
  loaiSP: String,
  amount: Number,
});

module.exports = mongoose.model("Transaction", transactionSchema);

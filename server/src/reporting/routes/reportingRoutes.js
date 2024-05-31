const express = require("express");
const router = express.Router();
const Report = require("../models/report");

// Dummy route for reporting
router.get("/report", async (req, res) => {
  try {
    const report = await Report.find();
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deletereport", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedReport = await Report.findOneAndDelete("id");
    if (!deletedReport) {
      res.status(404).json({ message: "`Cannot delete report with id `" });
    }
    res.json(deletedReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

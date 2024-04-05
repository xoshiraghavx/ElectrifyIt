// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const ReportData = require('../models/ReportData');

// GET all report data
router.get('/', async (req, res) => {
  try {
    const reportData = await ReportData.find();
    res.json(reportData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST filtered report data
router.post('/', async (req, res) => {
  const { reportType, frequency, timeFrame } = req.body;

  try {
    let filteredData;

    if (reportType === 'totalMilesDriven') {
      filteredData =
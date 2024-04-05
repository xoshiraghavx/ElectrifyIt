// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const ReportData = require('../models/ReportData');

// GET all report data
router.get('/api/reports', async (req, res) => {
  try {
    const reportData = await ReportData.find();
    res.json(reportData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST filtered report data
// routes/reportRoutes.js (continued)
router.post('/', async (req, res) => {
    const { reportType, frequency, timeFrame } = req.body;
  
    try {
      let filteredData;
  
      if (reportType === 'totalMilesDriven') {
        const match = {
          Date: {
            $gte: timeFrame.start,
            $lte: timeFrame.end,
          },
        };
  
        const group = {
          _id: null,
          totalMilesDriven: { $sum: '$Miles Driven' },
        };
  
        if (frequency === 'daily') {
          group._id = { $dateToString: { format: '%Y-%m-%d', date: '$Date' } };
        } else if (frequency === 'weekly') {
          group._id = {
            $week: {
              date: '$Date',
              startOfWeek: 'monday',
            },
          };
        } else if (frequency === 'monthly') {
          group._id = { $dateToString: { format: '%Y-%m', date: '$Date' } };
        } else if (frequency === 'yearly') {
          group._id = { $dateToString: { format: '%Y', date: '$Date' } };
        }
  
        filteredData = await ReportData.aggregate([
          { $match: match },
          { $group: group },
          { $sort: { _id: 1 } },
        ]);
      }
  
      res.json(filteredData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;
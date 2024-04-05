// models/ReportData.js
const mongoose = require('mongoose');

const reportDataSchema = new mongoose.Schema({
  'License Plate': String,
  Make: String,
  VIN: String,
  Model: String,
  Type: String,
  Date: Date,
  'Miles Driven': Number,
});

const ReportData = mongoose.model('ReportData', reportDataSchema);

module.exports = ReportData;
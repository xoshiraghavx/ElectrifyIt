// components/Filters.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filters = ({ filters, onFiltersChange }) => {
  const [reportType, setReportType] = useState(filters.reportType);
  const [frequency, setFrequency] = useState(filters.frequency);
  const [timeFrame, setTimeFrame] = useState(filters.timeFrame);

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
    onFiltersChange({ ...filters, reportType: e.target.value });
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
    onFiltersChange({ ...filters, frequency: e.target.value });
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setTimeFrame({ start, end });
    onFiltersChange({ ...filters, timeFrame: { start, end } });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="mb-4">
        <label htmlFor="reportType" className="block text-gray-700 font-bold mb-2">
          Report Type
        </label>
        <select
          id="reportType"
          value={reportType}
          onChange={handleReportTypeChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="totalMilesDriven">Total Miles Driven</option>
          {/* Add more report type options here */}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="frequency" className="block text-gray-700 font-bold mb-2">
          Frequency
        </label>
        <select
          id="frequency"
          value={frequency}
          onChange={handleFrequencyChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="timeFrame" className="block text-gray-700 font-bold mb-2">
          Time Frame
        </label>
        <DatePicker
          id="timeFrame"
          selectsRange
          startDate={timeFrame.start}
          endDate={timeFrame.end}
          onChange={handleDateChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default Filters;
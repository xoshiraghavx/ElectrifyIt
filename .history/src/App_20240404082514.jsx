// App.js
import React, { useState } from 'react';
import Filters from '../';
import ReportData from './components/ReportData';

const App = () => {
  const [filters, setFilters] = useState({
    reportType: 'totalMilesDriven',
    frequency: 'daily',
    timeFrame: {
      start: new Date().setMonth(new Date().getMonth() - 1),
      end: new Date(),
    },
  });

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Reports Dashboard</h1>
      <Filters filters={filters} onFiltersChange={handleFiltersChange} />
      <ReportData filters={filters} />
    </div>
  );
};

export default App;
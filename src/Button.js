import React from 'react';
import { saveAs } from 'file-saver';

const Button = ({ onClick, wordFrequency }) => {
  const exportCSV = () => {
    const csvData = wordFrequency.map((word) => `${word[0]},${word[1]}`).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'histogram.csv');
  };

  return (
    <div>
      <button onClick={onClick}>Submit</button>
      <button onClick={exportCSV}>Export</button>
    </div>
  );
};

export default Button;

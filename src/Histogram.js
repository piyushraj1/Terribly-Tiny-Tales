import React from 'react';
import { Bar } from 'react-chartjs-2';

const Histogram = ({ data }) => {
  const labels = data.map((item) => item[0]);
  const values = data.map((item) => item[1]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Word Frequency',
        data: values,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Word Frequency Histogram</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default Histogram;

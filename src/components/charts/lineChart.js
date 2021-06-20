import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ months }) {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Conferences per month',
      data: months,
      borderColor: ['rgb(75, 192, 192)'],
      backgroundColor: ['rgba(54, 162, 235, 0.2)'],
      fill: true
    }]
  }
  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default LineChart;
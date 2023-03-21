import './index.css';

import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bubble } from 'react-chartjs-2';

import CardHeader from '../../Card/Header';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Red dataset',
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Blue dataset',
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const BubbleChart = () => {
  return (
    <div className="card p-3 mb-2">
      <CardHeader title={'title'} />
      <div className="card-body">
        <div className="">
          <Bubble options={options} data={data} />
        </div>
      </div>
    </div>
  );
};
export default BubbleChart;

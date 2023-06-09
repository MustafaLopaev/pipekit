import './index.css';

import { faker } from '@faker-js/faker';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import CardHeader from '../../Card/Header';
import { TimeLineInterface } from './index.d';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  type: 'line',
  plugins: {
    title: {
      display: false,
    },
  },
  interaction: {
    mode: 'index' as 'index',
    intersect: false,
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const TimeLineChart = ({ title = 'Title' }: TimeLineInterface) => {
  return (
    <div className="card p-3 mb-2">
      <CardHeader title={title} />
      <div className="card-body">
        <div className="">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};
export default TimeLineChart;

import './index.css';

import MiniCard from '../../components/Card/MiniCard';
import { DashboardInterface } from './index.d';
import TimeLineChart from '../../components/Charts/TimeLine';
import BubbleChart from '../../components/Charts/Bubble';
import VerticalBarChart from '../../components/Charts/VerticalBar';

/* Dashboard page is used to display the general data. */
const Dashboard = (props: DashboardInterface) => {
  return (
    <div id="dashboardPage" className="container-fluid dashboard-container">
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <MiniCard value={123.42} title={'Mini Card 1'} />
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <MiniCard value={123.42} title={'Mini Card 2'} />
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <MiniCard value={123.42} title={'Mini Card 3'} />
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <MiniCard value={123.42} title={'Mini Card 4'} />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <TimeLineChart title="LargeTime Line Chart" />
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="row">
            <div className="col">
              <BubbleChart title="Buble Chart 1" />
            </div>
            <div className="col">
              <BubbleChart title="Buble Chart 2" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-md-6 mb-4">
          <TimeLineChart title="Small Time Line Chart 1" />
        </div>
        <div className="col-xl-4 col-md-6 mb-4">
          <TimeLineChart title="Small Time Line Chart 2" />
        </div>
        <div className="col-xl-4 col-md-6 mb-4">
          <TimeLineChart title="Small Time Line Chart 3" />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
          <VerticalBarChart title="Medium Vertical Bar Chart 1" />
        </div>
        <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
          <VerticalBarChart title="Medium Vertical Bar Chart 2" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

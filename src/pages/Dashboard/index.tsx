import './index.css';

import MiniCard from '../../components/Card/MiniCard';
import { DashboardInterface } from './index.d';

/* Dashboard page is used to display the general data. */
const Dashboard = (props: DashboardInterface) => {
  return (
    <div id="dashboardPage" className="container-fluid dashboard-container">
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <MiniCard value={123.42} />
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <MiniCard value={123.42} />
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <MiniCard value={123.42} />
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <MiniCard value={123.42} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

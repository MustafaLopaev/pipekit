import './index.css';

import { CardHeaderInterface } from './index.d';

const CardHeader = ({ title }: CardHeaderInterface) => {
  return (
    <div
      id="card-header"
      className="card-header py-3 d-flex flex-row align-items-center justify-content-between"
    >
      <h6 className="card-title">{title}</h6>
      <div className="">
        <button className="button-header">
          <i className="bi bi-gear" style={{ fontSize: '1rem' }}></i>
        </button>
        <button className="button-header">
          <i className="bi bi-arrow-clockwise" style={{ fontSize: '1rem' }}></i>
        </button>
        <button className="button-header">
          <i className="bi bi-x-lg" style={{ fontSize: '1rem' }}></i>
        </button>
      </div>
    </div>
  );
};

export default CardHeader;

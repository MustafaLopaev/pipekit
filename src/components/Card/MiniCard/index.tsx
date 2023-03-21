import './index.css';

import React, { useEffect, useState } from 'react';

import CardHeader from '../Header';
import { MiniCardInterface } from './index.d';

const MiniCard = ({ title = 'Title', value }: MiniCardInterface) => {
  return (
    <div className="card p-3 mb-2 mini-card-container ">
      <CardHeader title={title} />
      <div className="card-body ">
        <div className="container ">
          <div className="row pt-2">
            <div className="col-6" style={{ paddingLeft: 0 }}>
              {/* mini-card-divider */}
              <div className="media-body text-left mini-card-divider">
                <span>Value</span>
                <h4 className="primary">{value}</h4>
              </div>
            </div>
            <div className="col-6" style={{ paddingLeft: 0 }}>
              <div className="">
                <span>Time</span>
                <h4 className="primary ">
                  {new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="progress mt-1 mb-0" style={{ height: '7px' }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: '80%' }}
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;

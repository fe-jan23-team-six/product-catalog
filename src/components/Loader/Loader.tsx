import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

import './Loader.scss';

export const Loader: React.FC = () => (
  <div className="loader" data-cy="loader">
    <ThreeCircles
      height="50"
      width="50"
      color="#4fa94d"
      ariaLabel="three-circles-rotating"
      outerCircleColor="#89939A"
      innerCircleColor="#B4BDC4"
      middleCircleColor="#FEC132"
    />
  </div>
);

import React from 'react';
import './BackButton.scss';
import { Link } from 'react-router-dom';

export const BackButton: React.FC = () => {
  return (
    <Link to={'/catalog'} className="back-button">
      <img
        src="icons/leftBlack16x16.svg"
        alt="Back to top"
        className="back-button__image"/>
        <p className="back-button__text">Back</p>
    </Link>
  );
};

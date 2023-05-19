import React from 'react';
import './BackButton.scss';
import { useNavigate } from 'react-router-dom';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <a
      className="back-button"
      onClick={() => navigate(-1)}
    >
      <img
        src="icons/leftBlack16x16.svg"
        alt="Back to top"
        className="back-button__image"
      />
      Back
    </a>
  );
};

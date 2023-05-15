import React from 'react';
import './ErrorPageGenerator.scss';
import { Link } from 'react-router-dom';

type Props = {
  imageName: string;
  errorTitle: string;
}

export const ErrorPageGenerator: React.FC<Props> = ({
  imageName,
  errorTitle,
}) => {
  return (
    <div className="error_page">
      <img
        src={imageName}
        alt={`${imageName}`}
        className="error_page__image"
      />

      <h1 className="error_page__title ">
        {errorTitle}
      </h1>

      <Link to="/" className="primary-button error_page__button">
        Go to Home Page
      </Link>
    </div>
  );
};

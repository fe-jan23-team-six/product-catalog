import React from 'react';
import './ErrorPageGenerator.scss';
import { Link } from 'react-router-dom';

type Props = {
  imageName: string,
  errorTitle: string,
  buttonTitle: string,
}

export const ErrorPageGenerator: React.FC<Props> = ({
  imageName,
  errorTitle,
  buttonTitle,
}) => {
  return (
    <div className="error_page">
      <img
        src={imageName}
        alt={`${imageName}`}
        className="error_page__image"
      />

      <h2 className="error_page__title ">
        {errorTitle}
      </h2>

      <Link to="/" className="primary-button error_page__button">
        {buttonTitle}
      </Link>
    </div>
  );
};

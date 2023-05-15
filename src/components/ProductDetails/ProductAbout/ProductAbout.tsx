import React from 'react';
import './ProductAbout.scss';
import { PhoneDescription } from '../../../types/PhoneDescription';

type Props = {
  description: PhoneDescription,
}

export const ProductAbout: React.FC<Props> = ({ description }) => {
  const { title, text } = description;

  return (
    <div>
      <h3 className="about__details__subtitle">
        {title}
      </h3>

      <p className="about__details__text">
        {text}
      </p>
    </div>
  );
};

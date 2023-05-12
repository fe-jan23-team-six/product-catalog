import React from 'react';
import './TechCharacteristicsItem.scss';

type Props = {
  characteristic: string,
  details: string,
}

export const TechCharacteristicsItem: React.FC<Props> = (props) => {
  const { characteristic, details } = props;

  return (
    <div className="tech_characteristics">
      <p
        className="tech_characteristics__text"
      >
        {characteristic}
      </p>

      <p
        className="tech_characteristics__text
        tech_characteristics__text--black"
      >
        {details}
      </p>
    </div>
  );
};

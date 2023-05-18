import React from 'react';
import './ContactCard.scss';

import { Link } from 'react-router-dom';
import { CreatorsPerson } from '../../types/CreatorsPerson';

interface Props {
  creator: CreatorsPerson,
}

export const ContactCard: React.FC<Props> = ({ creator }) => {
  const {
    image,
    fullName,
    teamLead,
    linkedInLink,
    gitHubLink,
  } = creator;

  return (
    <div className="contact_card">
      <img
        src={image}
        alt="contact card image"
        className="contact_card__image"
      />

      <div className="contact_card__information">
        <div className="contact_card__information__name">
          <h3>
            {fullName}
          </h3>

          {teamLead && (
            <p className="contact_card__information__name__teamlead">
              TL
            </p>
          )}
        </div>

        <div className="contact_card__information__links">
          <Link
            to={linkedInLink}
            className="contact_card__information__links__link"
            target="_blank"
          >
            LinkedIn
          </Link>

          <Link
            to={gitHubLink}
            className="contact_card__information__links__link"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import './ContactsPage.scss';

import { projectCreators } from './projectCreators';
import { ContactCard } from '../../components/ContactCard';

export const ContactsPage: React.FC = () => {
  return (
    <div className="contacts_page">
      {projectCreators.map(creator => (
        <ContactCard
          key={creator.fullName}
          creator={creator}
        />
      ))}
    </div>
  );
};

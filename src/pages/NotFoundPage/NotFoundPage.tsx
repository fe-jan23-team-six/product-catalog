import React from 'react';
import catNotFoundPage from '../../images/catNotFoundPage.gif';
import { ErrorPageGenerator } from '../../components/ErrorPageGenerator';

export const NotFoundPage: React.FC = () => {
  return (
    <ErrorPageGenerator
      imageName={catNotFoundPage}
      errorTitle="404 Uh-oh, page not found"
    />
  );
};

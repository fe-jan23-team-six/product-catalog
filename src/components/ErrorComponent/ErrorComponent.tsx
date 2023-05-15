import React from 'react';
import catError from '../../images/catError.gif';
import { ErrorPageGenerator } from '../ErrorPageGenerator';

export const ErrorComponent: React.FC = () => {
  return (
    <ErrorPageGenerator
      imageName={catError}
      errorTitle="Sorry, something went wrong:("
    />
  );
};

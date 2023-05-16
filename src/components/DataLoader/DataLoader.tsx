import React from 'react';
import { FetchStatus } from '../../types/FetchStatus';
import { Loader } from '../Loader';
import { ErrorComponent } from '../ErrorComponent';

type Props = {
  fetchStatus: FetchStatus;
  children: React.ReactNode;
}

export const DataLoader: React.FC<Props> = ({ fetchStatus, children }) => {
  return (
    <>
      {fetchStatus === FetchStatus.Uninitialized && (
        <h2>{'unitin'}</h2>
      )}
      {fetchStatus === FetchStatus.Loading && (
        <Loader />
      )}

      {fetchStatus === FetchStatus.Error && (
        <ErrorComponent />
      )}

      {fetchStatus === FetchStatus.Success && (
        children
      )}
    </>
  );
};

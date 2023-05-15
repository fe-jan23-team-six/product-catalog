import React from 'react';
import { FetchStatus } from '../../types/FetchStatus';
import { Loader } from '../Loader';

type Props = {
  fetchStatus: FetchStatus;
  children: React.ReactNode;
}

export const DataLoader: React.FC<Props> = ({ fetchStatus, children }) => {
  return (
    <>
      {fetchStatus === FetchStatus.Loading && (
        <Loader />
      )}

      {fetchStatus === FetchStatus.Error && (
        <h2>
          Something went wrong
        </h2>
      )}

      {fetchStatus === FetchStatus.Success && (
        children
      )}
    </>
  );
};

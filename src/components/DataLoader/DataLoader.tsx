import React from 'react';
import './DataLoader.scss';
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
        <div className="notification is-danger" data-cy="CommentsError">
          Something went wrong
        </div>
      )}

      {fetchStatus === FetchStatus.Success && (
        children
      )}
    </>
  );
};

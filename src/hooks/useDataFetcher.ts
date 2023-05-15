import { useState } from 'react';
import { FetchStatus } from '../types/FetchStatus';

type DataFetcherType = [
  FetchStatus,
  (handleDataLoad: () => Promise<void>) => void,
  (handleDataLoad: Array<() => Promise<void>>) => void,
];

export const useDataFetcher = (): DataFetcherType => {
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.Uninitialized);

  const loadData = (handleDataLoad: () => Promise<void>) => {
    setFetchStatus(FetchStatus.Loading);

    handleDataLoad()
      .then(
        () => setFetchStatus(FetchStatus.Success),
        () => setFetchStatus(FetchStatus.Error),
      );
  };

  const loadDataAll = (handleDataLoad: Array<() => Promise<void>>) => {
    setFetchStatus(FetchStatus.Loading);

    Promise.all(handleDataLoad.map(handler => handler()))
      .then(
        () => setFetchStatus(FetchStatus.Success),
        () => setFetchStatus(FetchStatus.Error),
      );
  };

  return [fetchStatus, loadData, loadDataAll];
};

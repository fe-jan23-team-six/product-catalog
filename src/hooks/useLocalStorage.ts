import React, { useState } from 'react';
import { useDidUpdateEffect } from './useDidUpdateEffect';

const readFromLocalStorage = <T>(storageKey: string): T[] => {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || '[]') || [];
  } catch {
    return [];
  }
};

// TODO: add initial value
export const useLocalStorage = <T>(
  storageKey: string,
): [
  T[],
  React.Dispatch<React.SetStateAction<T[]>>
] => {
  const [localStorageState, setLocalStorageState] = useState<T[]>(
    readFromLocalStorage<T>(storageKey),
  );

  useDidUpdateEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(localStorageState));
  }, [localStorageState]);

  return [
    localStorageState,
    setLocalStorageState,
  ];
};

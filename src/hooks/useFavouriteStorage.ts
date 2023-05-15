import React, { useState } from 'react';
import { PhoneMain } from '../types/phone/PhoneMain';
import { useDidUpdateEffect } from './useDidUpdateEffect';
import {
  LOCAL_STORAGE_FAVOURITE_KEY as favouriteKey,
} from '../utils/constants/localStorage';

const readFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(favouriteKey) || '[]') || [];
  } catch {
    return [];
  }
};

export const useFavouriteStorage = (): [
  PhoneMain[],
  React.Dispatch<React.SetStateAction<PhoneMain[]>>
] => {
  const [favourite, setFavourite] = useState<PhoneMain[]>(
    readFromLocalStorage(),
  );

  useDidUpdateEffect(() => {
    localStorage.setItem(favouriteKey, JSON.stringify(favourite));
  }, [favourite]);

  return [
    favourite,
    setFavourite,
  ];
};

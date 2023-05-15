import React, { useMemo, useCallback } from 'react';
import { PhoneMain } from '../types/PhoneMain';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  LOCAL_STORAGE_FAVOURITE_KEY as favouriteKey,
} from '../utils/constants/localStorage';

type FavouriteContextType = {
  favourite: PhoneMain[];
  isInFavourite: (id: number) => boolean;
  toggleFavourite: (product: PhoneMain) => void;
};

export const FavouriteContext = React.createContext<FavouriteContextType>({
  favourite: [],
  isInFavourite: () => false,
  toggleFavourite: () => {
    global.console.warn('No implementation of toggleFavourite');
  },
});

type FavouriteProviderType = {
  children: React.ReactNode;
};

export const FavouriteProvider: React.FC<FavouriteProviderType> = ({
  children,
}) => {
  const [favourite, setFavourite] = useLocalStorage<PhoneMain>(
    favouriteKey,
  );

  const isInFavourite = useCallback((id: number): boolean => (
    favourite.some(favouriteProduct => favouriteProduct.id === id)
  ), [favourite]);

  const toggleFavourite = useCallback((product: PhoneMain): void => {
    if (isInFavourite(product.id)) {
      setFavourite((prevFavourite) => (
        prevFavourite.filter(favouriteProduct => (
          favouriteProduct.id !== product.id
        ))
      ));

      return;
    }

    setFavourite((prevFavourite) => (
      [...prevFavourite, product]
    ));
  }, [favourite]);

  const contextValue = useMemo(() => (
    {
      favourite,
      isInFavourite,
      toggleFavourite,
    }
  ), [favourite]);

  return (
    <FavouriteContext.Provider value={contextValue}>
      {children}
    </FavouriteContext.Provider>
  );
};

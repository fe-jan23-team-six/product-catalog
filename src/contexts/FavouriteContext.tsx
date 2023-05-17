import React, { useMemo, useCallback } from 'react';
import { ProductMain } from '../types/ProductMain';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  LOCAL_STORAGE_FAVOURITE_KEY as favouriteKey,
} from '../utils/constants/localStorage';

type FavouriteContextType = {
  favourite: ProductMain[];
  isInFavourite: (id: string) => boolean;
  toggleFavourite: (product: ProductMain) => void;
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
  const [favourite, setFavourite] = useLocalStorage<ProductMain>(
    favouriteKey,
  );

  const isInFavourite = useCallback((id: string): boolean => (
    favourite.some(favouriteProduct => favouriteProduct.id === id)
  ), [favourite]);

  const toggleFavourite = useCallback((product: ProductMain): void => {
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

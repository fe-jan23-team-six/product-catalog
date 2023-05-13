import { useState, useEffect } from 'react';

export type FavouritesStorage<P> = Record<number, P>;

type FavouritesActions<P> = {
  addToFavs: (id: number, product: P) => void;
  removeFromFavs: (id: number) => void;
  getAllFavourites: () => FavouritesStorage<P>;
  clearFavourites: () => void;
  checkIsInFavs: (id: number) => boolean;
  getFromFavsById: (id: number) => P | null;
};

const useFavouritesStorage = <P extends object>(): FavouritesActions<P> => {
  const favs = localStorage.getItem('favouritesStorage');
  const restored = JSON.parse(favs || `{}`);

  const [
    favouritesStorage,
    setFavouritesStorage,
  ] = useState<FavouritesStorage<P>>(restored || {});

  useEffect(() => {
    const storedFavourites = localStorage.getItem('favouritesStorage');

    if (storedFavourites) {
      setFavouritesStorage(JSON.parse(storedFavourites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'favouritesStorage',
      JSON.stringify(favouritesStorage),
    );
  }, [favouritesStorage]);

  const addToFavs = (id: number, product: P): void => {
    setFavouritesStorage((prevFavsStorage) => {
      const updatedFavsStorage = { ...prevFavsStorage };

      updatedFavsStorage[id] = product;

      return updatedFavsStorage;
    });
  };

  const removeFromFavs = (id: number): void => {
    setFavouritesStorage((prevFavsStorage) => {
      const updatedFavsStorage = { ...prevFavsStorage };

      delete updatedFavsStorage[id];

      return updatedFavsStorage;
    });
  };

  const getAllFavourites = (): FavouritesStorage<P> => {
    return favouritesStorage;
  };

  const clearFavourites = (): void => {
    setFavouritesStorage({});
  };

  const checkIsInFavs = (id: number): boolean => {
    return Boolean(favouritesStorage[id]);
  };

  const getFromFavsById = (id: number): P | null => {
    const fav = favouritesStorage[id];

    return fav;
  };

  const favsActions: FavouritesActions<P> = {
    addToFavs,
    removeFromFavs,
    getAllFavourites,
    clearFavourites,
    checkIsInFavs,
    getFromFavsById,
  };

  return favsActions;
};

export default useFavouritesStorage;

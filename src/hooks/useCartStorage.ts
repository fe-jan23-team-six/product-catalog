import { useState, useEffect } from 'react';

export type CartItem<P> = {
  quantity: number;
  product: P;
};

export type CartStorage<P> = Record<number, CartItem<P>>;

export type CartActions<P> = {
  addToCart: (id: number, product: P) => void;
  removeFromCart: (id: number) => void;
  editQuantity: (id: number, action: 'plus' | 'minus') => void;
  getAllFromCart: () => CartStorage<P>;
  clearCart: () => void;
  checkIsInCart: (id: number) => boolean;
  getFromCartById: (id: number) => CartItem<P> | undefined;
};

export const useCartStorage = <P extends object>(): CartActions<P> => {
  const cart = localStorage.getItem('cartStorage');
  const restored = JSON.parse(cart || `{}`);

  const [
    cartStorage,
    setCartStorage,
  ] = useState<CartStorage<P>>(restored || {});

  useEffect(() => {
    // Check if cartStorage is already set
    if (Object.keys(cartStorage).length === 0) {
      const storedCart = localStorage.getItem('cartStorage');

      if (storedCart) {
        setCartStorage(JSON.parse(storedCart));
      }
    }
  }, [cartStorage]);

  useEffect(() => {
    localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
  }, [cartStorage]);

  const addToCart = (id: number, product: P): void => {
    setCartStorage((prevCartStorage) => {
      const updatedCartStorage = { ...prevCartStorage };

      updatedCartStorage[id] = {
        quantity: 1,
        product,
      };

      return updatedCartStorage;
    });
  };

  const removeFromCart = (id: number): void => {
    setCartStorage((prevCartStorage) => {
      const updatedCartStorage = { ...prevCartStorage };

      delete updatedCartStorage[id];

      return updatedCartStorage;
    });
  };

  const editQuantity = (id: number, action: 'plus' | 'minus'): void => {
    setCartStorage((prevCartStorage) => {
      const updatedCartStorage = { ...prevCartStorage };
      const item = updatedCartStorage[id];

      if (item) {
        const targetQuantity = action === 'plus'
          ? item.quantity + 1
          : item.quantity - 1;

        if (targetQuantity >= 0) {
          updatedCartStorage[id] = { ...item, quantity: targetQuantity };
        }
      }

      return updatedCartStorage;
    });
  };

  const getAllFromCart = (): CartStorage<P> => {
    return cartStorage;
  };

  const clearCart = (): void => {
    setCartStorage({});
  };

  const checkIsInCart = (id: number): boolean => {
    return Boolean(cartStorage[id]);
  };

  const getFromCartById = (id: number): CartItem<P> | undefined => {
    return cartStorage[id];
  };

  const cartActions: CartActions<P> = {
    addToCart,
    removeFromCart,
    editQuantity,
    getAllFromCart,
    clearCart,
    checkIsInCart,
    getFromCartById,
  };

  return cartActions;
};

import React, { useState } from 'react';
import { CartEntity } from '../types/CartEntity';
import { useDidUpdateEffect } from './useDidUpdateEffect';
import {
  LOCAL_STORAGE_CART_KEY as cartKey,
} from '../utils/constants/localStorage';

const readFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(cartKey) || '[]') || [];
  } catch {
    return [];
  }
};

export const useCartStorage = (): [
  CartEntity[],
  React.Dispatch<React.SetStateAction<CartEntity[]>>
] => {
  const [cart, setCart] = useState<CartEntity[]>(
    readFromLocalStorage(),
  );

  useDidUpdateEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart]);

  return [
    cart,
    setCart,
  ];
};

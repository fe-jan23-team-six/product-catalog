import React, { useState } from 'react';
import { CartItemType } from '../types/CartItemType';
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
  CartItemType[],
  React.Dispatch<React.SetStateAction<CartItemType[]>>
] => {
  const [cart, setCart] = useState<CartItemType[]>(
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

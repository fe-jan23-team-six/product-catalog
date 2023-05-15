import { useState, useEffect } from 'react';
import { PhoneMain } from '../types/phone/PhoneMain';
import { CartEntity } from '../types/CartEntity';

export const useCartStorage = () => {
  const restored = localStorage.getItem('cartStorage');
  const restoredCartArray = JSON.parse(restored || `[]`);

  const [
    cartStorage,
    setCartStorage,
  ] = useState<CartEntity[]>(restoredCartArray || []);

  useEffect(() => {
    localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
  }, [cartStorage]);

  const addToCart = (product: PhoneMain) => {
    const existingItem = cartStorage.find((item) => item.id === product.id);

    if (!existingItem) {
      setCartStorage((prevState) => [
        ...prevState,
        {
          id: product.id,
          category: product.category,
          name: product.name,
          image: product.image,
          priceDiscount: product.priceDiscount,
          priceRegular: product.priceRegular,
          quantity: 1,
          totalDiscount: product.priceDiscount,
          totalPrice: product.priceRegular,
        },
      ]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartStorage((prevState) => prevState.filter((item) => item.id !== id));
  };

  const editQuantity = (id: number, action: 'plus' | 'minus') => {
    setCartStorage((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          const newQuantity = action === 'plus'
            ? item.quantity + 1
            : item.quantity - 1;

          return {
            ...item,
            quantity: newQuantity,
            totalDiscount: item.priceDiscount * newQuantity,
            totalPrice: item.priceRegular * newQuantity,
          };
        }

        return item;
      }));
  };

  const getAllFromCart = (): CartEntity[] => {
    return cartStorage;
  };

  const clearCart = () => {
    localStorage.removeItem('cartStorage');
    setCartStorage([]);
  };

  const checkIsInCart = (id: number): boolean => {
    return cartStorage.some((item) => item.id === id);
  };

  const getFromCartById = (id: number): CartEntity | undefined => {
    return cartStorage.find((item) => item.id === id);
  };

  return {
    addToCart,
    removeFromCart,
    editQuantity,
    getAllFromCart,
    clearCart,
    checkIsInCart,
    getFromCartById,
  };
};

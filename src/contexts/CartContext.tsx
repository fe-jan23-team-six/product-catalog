import React, { useMemo } from 'react';
import { CartItemType } from '../types/CartItemType';
import { PhoneMain } from '../types/PhoneMain';
import { QuantityActionType } from '../types/QuantityActionType';
import { useCartStorage } from '../hooks/useCartStorage';

type CartContextType = {
  cart: CartItemType[];
  addToCart: (product: PhoneMain) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  isInCart: (id: number) => boolean;
  changeQuantity: (id: number, action: QuantityActionType) => void;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCart: () => {
    global.console.warn('No implementation of addToCart');
  },
  removeFromCart: () => {
    global.console.warn('No implementation of removeFromCart');
  },
  clearCart: () => {
    global.console.warn('No implementation of clearCart');
  },
  isInCart: () => false,
  changeQuantity: () => {
    global.console.warn('No implementation of changeQuantity');
  },
});

type CartProviderType = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<CartProviderType> = ({
  children,
}) => {
  const [cart, setCart] = useCartStorage();

  const isInCart = (id: number): boolean => (
    cart.some(cartProduct => cartProduct.id === id)
  );

  const addToCart = (product: PhoneMain): void => {
    if (isInCart(product.id)) {
      return;
    }

    setCart((prevCart) => (
      [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ]
    ));
  };

  const removeFromCart = (id: number): void => (
    setCart((prevCart) => (
      prevCart.filter(cartProduct => cartProduct.id !== id)
    ))
  );

  const clearCart = () => setCart([]);

  const changeQuantity = (id: number, action: QuantityActionType): void => (
    setCart((prevCart) => (
      prevCart.map(cartProduct => {
        if (cartProduct.id === id) {
          const newQuantity = action === QuantityActionType.PLUS
            ? cartProduct.quantity + 1
            : cartProduct.quantity - 1;

          return {
            ...cartProduct,
            quantity: newQuantity,
            totalDiscount: cartProduct.priceDiscount * newQuantity,
            totalPrice: cartProduct.priceRegular * newQuantity,
          };
        }

        return cartProduct;
      })
    ))
  );

  const contextValue = useMemo(() => (
    {
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      isInCart,
      changeQuantity,
    }
  ), [cart]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

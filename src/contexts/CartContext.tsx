import React, { useMemo } from 'react';
import { CartItemType } from '../types/CartItemType';
import { ProductMain } from '../types/ProductMain';
import { QuantityActionType } from '../types/QuantityActionType';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  LOCAL_STORAGE_CART_KEY as cartKey,
} from '../utils/constants/localStorage';

type CartContextType = {
  cart: CartItemType[];
  addToCart: (product: ProductMain) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  checkIsInCart: (id: string) => boolean;
  changeQuantity: (id: string, action: QuantityActionType) => void;
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
  checkIsInCart: () => false,
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
  const [cart, setCart] = useLocalStorage<CartItemType>(cartKey);

  const checkIsInCart = (id: string): boolean => (
    cart.some(cartProduct => cartProduct.id === id)
  );

  const addToCart = (product: ProductMain): void => {
    if (checkIsInCart(product.id)) {
      return;
    }

    setCart((prevCart) => (
      [
        ...prevCart,
        {
          ...product,
          image: product
            .image.replace(/0(?!.*0)/, '1') // to put appropriate tile
            || product.image,
          quantity: 1,
        },
      ]
    ));
  };

  const removeFromCart = (id: string): void => (
    setCart((prevCart) => (
      prevCart.filter(cartProduct => cartProduct.id !== id)
    ))
  );

  const clearCart = () => setCart([]);

  const changeQuantity = (id: string, action: QuantityActionType): void => (
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
      checkIsInCart,
      changeQuantity,
    }
  ), [cart]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

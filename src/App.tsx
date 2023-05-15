import React from 'react';
import { FavouriteProvider } from './contexts/FavouriteContext';
import { CartProvider } from './contexts/CartContext';

import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <FavouriteProvider>
        <Header />

        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>

        <Footer />
      </FavouriteProvider>
    </CartProvider>
  );
};

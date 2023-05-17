import React from 'react';
import './App.scss';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { FavouriteProvider } from './contexts/FavouriteContext';
import { CartProvider } from './contexts/CartContext';

import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <CartProvider>
      <FavouriteProvider>
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <Header />

            <main className="main">
              <div className="container">
                <Outlet />
              </div>
            </main>

            <Footer />
          </div>
        </QueryClientProvider>
      </FavouriteProvider>
    </CartProvider>
  );
};

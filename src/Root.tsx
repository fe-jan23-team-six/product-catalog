import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { DeviceDetailsPage } from './pages/DeviceDetailsPage';
import { FavouritePage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ContactsPage } from './pages/ContactsPage';
import { ProductTypes } from './types/enums/ProductTypes';

export const Root: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="phones">
        <Route
          index
          element={<CatalogPage productType={ProductTypes.PHONES} />}
        />
        <Route path=":productSlug" element={<DeviceDetailsPage />} />
      </Route>

      <Route path="tablets">
        <Route
          index
          element={<CatalogPage productType={ProductTypes.TABLETS} />}
        />
        <Route path=":productSlug" element={<DeviceDetailsPage />} />
      </Route>

      <Route path="accessories">
        <Route
          index
          element={<CatalogPage productType={ProductTypes.ACCESSORIES} />}
      />
        <Route path=":productSlug" element={<DeviceDetailsPage />} />
      </Route>

      <Route
        path="device-details/:productSlug"
        element={<DeviceDetailsPage />}
      />

      <Route
        path="contacts"
        element={<ContactsPage />}
      />

      <Route path="favourite" element={<FavouritePage />} />
      <Route path="cart" element={<CartPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

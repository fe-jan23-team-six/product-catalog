import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { Root } from './Root';
import './App.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Router>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Router>,
);

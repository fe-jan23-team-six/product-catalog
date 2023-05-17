import React, { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../../styles/themes';
import './ToogleTheme.scss';

const ToggleTheme: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>(
    localStorage.getItem('theme') || 'light',
  );

  useEffect(() => {
    const theme = currentTheme === 'light' ? lightTheme : darkTheme;

    const root = document.documentElement;

    Object.entries(theme).forEach(([property, value]) => {
      root.style.setProperty(`--${property}`, value);
    });

    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      className='themeToggle'
      onClick={toggleTheme}
      title={`Switch to ${currentTheme === 'light' ? 'DARK' : 'LIGHT'} theme`}
    >
      {'Switch to\n'}
      <b>
      {currentTheme === 'light'
        ? 'Dark' : 'Light'}
      </b>
    </button>
  );
};

export default ToggleTheme;

import React, { useState, useEffect, useCallback } from 'react';
import { lightTheme, darkTheme } from '../../styles/themes';
import './ToggleTheme.scss';

export const useModifiedUrl = (iconUrl: string, themeName: string): string => {
  const [modifiedUrl, setModifiedUrl] = useState<string>(iconUrl);

  useEffect(() => {
    function modifyUrl(url: string, theme: string): string {
      if (theme === 'dark') {
        return url.replace('.svg', '_dark.svg');
      } else {
        return url;
      }
    }

    setModifiedUrl(modifyUrl(iconUrl, themeName));
  }, [iconUrl, themeName]);

  return modifiedUrl;
};

const ToggleTheme: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>(
    localStorage.getItem('themeName') || 'light',
  );

  const toggleTheme = useCallback(() => {
    setCurrentTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';

      localStorage.setItem('themeName', newTheme);

      return newTheme;
    });
    window.location.reload();
  }, []);

  useEffect(() => {
    const theme = currentTheme === 'light' ? lightTheme : darkTheme;

    const root = document.documentElement;

    Object.entries(theme).forEach(([property, value]) => {
      root.style.setProperty(`--${property}`, value);
    });
  }, [currentTheme]);

  return (
    <button
      className='themeToggle'
      onClick={toggleTheme}
      title={`Switch to ${currentTheme === 'light' ? 'DARK' : 'LIGHT'} theme`}
    >
      {'Switch to\n'}
      <b>{currentTheme === 'light' ? 'Dark' : 'Light'}</b>
    </button>
  );
};

export default ToggleTheme;

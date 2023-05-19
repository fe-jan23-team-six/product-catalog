import { useState, useEffect } from 'react';

export function useModifiedUrl(iconUrl: string): string {
  const [modifiedUrl, setModifiedUrl] = useState<string>(iconUrl);
  const [
    themeName,
    setThemeName,
  ] = useState<string>(localStorage.getItem('themeName') || 'light');

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

  useEffect(() => {
    function handleThemeChange() {
      const newThemeName = localStorage.getItem('themeName') || 'light';

      setThemeName(newThemeName);
    }

    window.addEventListener('storage', handleThemeChange);

    return () => {
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  return modifiedUrl;
}

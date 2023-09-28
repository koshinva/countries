import { TypeTheme } from 'types';

export const getInitialTheme = () => {
  const value = localStorage.getItem('theme');

  const theme = typeof value === 'string' ? JSON.parse(value) : '';

  if (theme) return theme;

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';

  return 'light';
};

export const setThemeStorage = (theme: TypeTheme) => {
  localStorage.setItem('theme', JSON.stringify(theme));
};

export const setThemeHTML = (theme: TypeTheme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

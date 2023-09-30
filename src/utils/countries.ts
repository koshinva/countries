import { ICountryData } from 'types';

export const getInitialCountries = (): ICountryData[] => {
  const value = localStorage.getItem('countries');

  const countries = typeof value === 'string' ? JSON.parse(value) : '';

  if (countries) return countries;

  return [];
};

import { SerializedError } from '@reduxjs/toolkit';
import { ICountryData, Region } from '.';

export type TSortBy = 'name' | 'population';
export type TSortOrder = 'asc' | 'desc';

export interface ICountriesInitialState {
  countries: ICountryData[];
  displayedCountries: ICountryData[];
  isLoading: boolean;
  error: null | string | SerializedError;
  filterRegion: null | Region;
  searchQuery: string;
  sortBy: TSortBy;
  sortOrder: TSortOrder;
}
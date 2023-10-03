import { SerializedError } from '@reduxjs/toolkit';
import { ICountryData, Region } from '.';

export interface ICountriesInitialState {
  countries: ICountryData[];
  displayedCountries: ICountryData[];
  isLoading: boolean;
  error: null | string | SerializedError;
  filterRegion: null | Region;
  searchQuery: string;
}
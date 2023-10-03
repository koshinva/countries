import { SerializedError } from "@reduxjs/toolkit";
import { ICountryData } from ".";

export interface ICountriesInitialState {
  countries: ICountryData[];
  displayedCountries: ICountryData[];
  isLoading: boolean;
  error: null | string | SerializedError;
}
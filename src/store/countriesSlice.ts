import { createSlice } from '@reduxjs/toolkit';
import { ICountriesInitialState, ICountryData } from 'types';
import { getAllCountries } from './countriesActions';
import { getInitialCountries } from 'utils';

const initialState: ICountriesInitialState = {
  countries: getInitialCountries(),
  displayedCountries: [],
  isLoading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    renderCountries(state) {
      state.displayedCountries = state.countries;
    },
    searchCountry(state, { payload }: { payload: string }) {
      if (!payload) {
        state.displayedCountries = state.countries;
        return;
      }
      state.displayedCountries = state.countries.filter((c) =>
        c.name.toLowerCase().includes(payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCountries.fulfilled, (state, { payload }: { payload: ICountryData[] }) => {
        state.isLoading = false;
        state.countries = payload;
        localStorage.setItem('countries', JSON.stringify(payload));
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.error = `${action.payload.code} - ${action.payload.message} - ${action.payload.description}`;
        } else {
          state.error = action.error;
        }
      });
  },
});

export const { renderCountries, searchCountry } = countriesSlice.actions;

export default countriesSlice.reducer;

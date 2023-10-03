import { createSlice } from '@reduxjs/toolkit';
import { getInitialCountries } from 'utils';
import { getAllCountries } from './countriesActions';
import { ICountriesInitialState, ICountryData, Region } from 'types';

const initialState: ICountriesInitialState = {
  countries: getInitialCountries(),
  displayedCountries: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  filterRegion: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    renderCountries(state) {
      let willBeRendered = state.countries;

      if (state.searchQuery) {
        willBeRendered = willBeRendered.filter((c) =>
          c.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
      if (state.filterRegion) {
        willBeRendered = willBeRendered.filter((c) => c.region === state.filterRegion);
      }

      state.displayedCountries = willBeRendered;
    },
    searchCountry(state, { payload }: { payload: string }) {
      state.searchQuery = payload;
    },
    filterByRegion(state, { payload }: { payload: Region | null }) {
      state.filterRegion = payload;
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

export const { renderCountries, searchCountry, filterByRegion } = countriesSlice.actions;

export default countriesSlice.reducer;

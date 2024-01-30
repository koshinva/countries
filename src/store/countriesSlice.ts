import { createSlice } from '@reduxjs/toolkit';
import { getInitialCountries } from 'utils';
import { getAllCountries } from './countriesActions';
import { ICountriesInitialState, ICountryData, Region } from 'types';
import { TSortBy, TSortOrder } from 'types/countriesSlice.types';

const initialState: ICountriesInitialState = {
  countries: getInitialCountries(),
  displayedCountries: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  filterRegion: JSON.parse(localStorage.getItem('countries_filterRegion') || 'null') as Region | null,
  sortBy:
    localStorage.getItem('countries_sortBy') !== null
      ? (localStorage.getItem('countries_sortBy') as TSortBy)
      : 'population',
  sortOrder:
    localStorage.getItem('countries_sortOrder') !== null
      ? (localStorage.getItem('countries_sortOrder') as TSortOrder)
      : 'desc',
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    renderCountries(state) {
      let willBeRendered = state.countries;

      // search by name
      if (state.searchQuery) {
        willBeRendered = willBeRendered.filter((c) =>
          c.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }

      // filter by region
      if (state.filterRegion) {
        willBeRendered = willBeRendered.filter((c) => c.region === state.filterRegion);
      }

      // sorting
      if (state.sortBy === 'population') {
        willBeRendered.sort((a, b) => {
          if (state.sortOrder === 'asc') {
            return a.population - b.population;
          } else {
            return b.population - a.population;
          }
        });
      } else if (state.sortBy === 'name') {
        willBeRendered.sort((a, b) => {
          if (state.sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });
      }

      state.displayedCountries = willBeRendered;
    },
    searchCountry(state, { payload }: { payload: string }) {
      state.searchQuery = payload;
    },
    filterByRegion(state, { payload }: { payload: Region | null }) {
      localStorage.setItem('countries_filterRegion', JSON.stringify(payload));
      state.filterRegion = payload;
    },
    changeSortOrder(state, { payload }: { payload: TSortOrder }) {
      localStorage.setItem('countries_sortOrder', payload);
      state.sortOrder = payload;
    },
    changeSortBy(state, { payload }: { payload: TSortBy }) {
      localStorage.setItem('countries_sortBy', payload);
      state.sortBy = payload;
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

export const {
  renderCountries,
  searchCountry,
  filterByRegion,
  changeSortBy,
  changeSortOrder,
} = countriesSlice.actions;

export default countriesSlice.reducer;

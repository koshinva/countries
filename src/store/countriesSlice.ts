import { createSlice } from '@reduxjs/toolkit';
import { ICountriesInitialState, ICountryData } from 'types';
import { getAllCountries } from './countriesActions';

const initialState: ICountriesInitialState = {
  countries: [],
  isLoading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCountries.fulfilled, (state, { payload }: { payload: ICountryData[] }) => {
        state.isLoading = false;
        state.countries = payload;
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

// export const {} = countriesSlice.actions;

export default countriesSlice.reducer;

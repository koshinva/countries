import { createSlice } from '@reduxjs/toolkit';
import { IAppInitialState } from 'types';
import { getInitialTheme, setThemeStorage } from 'utils';

const initialState: IAppInitialState = {
  theme: getInitialTheme(),
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      setThemeStorage(state.theme);
    },
  },
});

export const { toggleTheme } = appSlice.actions;

export default appSlice.reducer;
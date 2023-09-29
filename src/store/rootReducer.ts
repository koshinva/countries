import appReducer from './appSlice';
import countriesReducer from './countriesSlice';

export const rootReducer = {
  app: appReducer,
  countries: countriesReducer,
};

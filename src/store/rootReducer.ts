import appReducer from './appSlice';
import countriesReducer from './countriesSlice';
import quizReducer from './quizSlice';

export const rootReducer = {
  app: appReducer,
  countries: countriesReducer,
  quiz: quizReducer,
};

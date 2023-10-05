import * as appActions from './appSlice';
import * as countriesActions from './countriesActions';
import * as countriesSliceActions from './countriesSlice';
import * as quizSliceActions from './quizSlice';

export const allActions = {
  ...appActions,
  ...countriesActions,
  ...countriesSliceActions,
  ...quizSliceActions,
};

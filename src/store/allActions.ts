import * as appActions from './appSlice';
import * as countriesActions from './countriesActions';
import * as countriesSliceActions from './countriesSlice';

export const allActions = { ...appActions, ...countriesActions, ...countriesSliceActions };

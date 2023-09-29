import * as appActions from './appSlice';
import * as countriesActions from './countriesActions';

export const allActions = { ...appActions, ...countriesActions };

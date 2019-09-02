import { combineReducers } from 'redux';
import { reducer as drinks } from './drinks';

/* ------------- Assemble The Reducers ------------- */
const reducers = combineReducers({
  drinks,
});

export default reducers;

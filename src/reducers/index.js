import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import filterContactReducer from './filterContactReducer';
import toggleReducer from './toggleReducer';

export default combineReducers({
  contactReducer,
  filterContactReducer,
  toggleReducer
});

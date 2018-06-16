import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import filterContactReducer from './filterContactReducer';

export default combineReducers({
  contactReducer,
  filterContactReducer
});

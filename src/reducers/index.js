import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import filterContactReducer from './filterContactReducer';
import selectContactReducer from './selectContactReducer';

export default combineReducers({
  contactReducer,
  filterContactReducer,
  selectContactReducer
});

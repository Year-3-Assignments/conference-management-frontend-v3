import { combineReducers } from 'redux';
import userReducer from './userReducer';
import resourceReducer from './resourceReducer';
import keynoteReducer from './keynoteReducer';

const allReducers = combineReducers({
  userReducer,
  resourceReducer,
  keynoteReducer
});

export default allReducers;
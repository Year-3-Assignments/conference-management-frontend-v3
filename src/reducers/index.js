import { combineReducers } from 'redux';
import userReducer from './userReducer';
import resourceReducer from './resourceReducer';

const allReducers = combineReducers({
  userReducer,
  resourceReducer
});

export default allReducers;
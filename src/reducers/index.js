import { combineReducers } from 'redux';
import userReducer from './userReducer';
import resourceReducer from './resourceReducer';
import workshopReducer from './workshopReducer';

const allReducers = combineReducers({
  userReducer,
  resourceReducer,
  workshopReducer
});

export default allReducers;
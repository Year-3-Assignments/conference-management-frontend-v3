import { combineReducers } from 'redux';
import userReducer from './userReducer';
import resourceReducer from './resourceReducer';
import conferenceReducer from './conferenceReducer';

const allReducers = combineReducers({
  userReducer,
  resourceReducer,
  conferenceReducer
});

export default allReducers;
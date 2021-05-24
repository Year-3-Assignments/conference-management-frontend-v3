import { combineReducers } from 'redux';
import userReducer from './userReducer';
import resourceReducer from './resourceReducer';
import conferenceReducer from './conferenceReducer';
import workshopReducer from './workshopReducer';

const allReducers = combineReducers({
  userReducer,
  resourceReducer,
  conferenceReducer,
  workshopReducer
});

export default allReducers;
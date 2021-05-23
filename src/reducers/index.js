import { combineReducers } from 'redux';
import userReducer from './userReducer';

const allReducers = combineReducers({
  // Add alreducer files here
  userReducer,
});

export default allReducers;
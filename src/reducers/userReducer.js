import { CREATE_USER_ACCOUNT } from '../actions/index';

const initialState = {
  setUser: '',
  setUserError: null,
};

function userReducer(state = initialState, action) {
  let setUser;

  switch (action.type) {
    case `${CREATE_USER_ACCOUNT}_PENDING`:

      return { ...state, loading: true,
        setUserError: null,
      };
    
    case `${CREATE_USER_ACCOUNT}_FULFILLED`:
      setUser = action.payload.data;
      return { ...state, loading: false, setUser };
    
    default: 
      return state;
  }
}

export default userReducer;
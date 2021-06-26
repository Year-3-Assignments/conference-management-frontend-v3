import { CREATE_USER_ACCOUNT, GET_USER_ACCOUNT, UPDATE_USER_ACCOUNT, DELETE_USER_ACCOUNT, GET_ALL_ADMIN_ACCOUNTS, 
  GET_ALL_EDITOR_ACCOUNTS, GET_ALL_USER_ACCOUNTS, GET_ALL_REVIEWER_ACCOUNTS, LOGIN_USER_ACCOUNT, GET_USER_NOTIFICATIONS } from '../actions/index';

const initialState = {
  createuser: '',
  getuser: '',
  loginuser: '',
  updateuser: '',
  deleteuser: '',
  getallusers: [],
  getalleditors: [],
  getallreviewers: [],
  getalladmins: [],
  usernotifications: [],
  createuserError: null,
  getuserError: null,
  loginuserError: null,
  updateuserError: null,
  deleteuserError: null,
  getallusersError: null,
  getallreviewersError: null,
  getalleditorsError: null,
  getalladminsError: null,
  usernotificationsError: null
};

function userReducer(state = initialState, action) {
  let createuser, getuser, loginuser, updateuser, deleteuser, getalladmins, 
      getalleditors, getallreviewers, getallusers, usernotifications;

  switch (action.type) {
    case `${CREATE_USER_ACCOUNT}_PENDING`:
    case `${GET_USER_ACCOUNT}_PENDING`:
    case `${UPDATE_USER_ACCOUNT}_PENDING`:
    case `${DELETE_USER_ACCOUNT}_PENDING`:
    case `${GET_ALL_ADMIN_ACCOUNTS}_PENDING`:
    case `${GET_ALL_EDITOR_ACCOUNTS}_PENDING`:
    case `${GET_ALL_USER_ACCOUNTS}_PENDING`:
    case `${GET_ALL_REVIEWER_ACCOUNTS}_PENDING`:
    case `${LOGIN_USER_ACCOUNT}_PENDING`:
    case `${GET_USER_NOTIFICATIONS}_PENDING`:
      return { ...state, loading: true,
        createuserError: null,
        getuserError: null,
        loginuserError: null,
        updateuserError: null,
        deleteuserError: null,
        getallusersError: null,
        getallreviewersError: null,
        getalleditorsError: null,
        getalladminsError: null,
        usernotificationsError: null
      };
    
    case `${CREATE_USER_ACCOUNT}_FULFILLED`:
      createuser = action.payload.data;
      return { ...state, loading: false, createuser };
    case `${GET_USER_ACCOUNT}_FULFILLED`:
      getuser = action.payload.data.data;
      return { ...state, loading: false, getuser }; 
    case `${UPDATE_USER_ACCOUNT}_FULFILLED`:
      updateuser = action.payload.data;
      return { ...state, loading: false, updateuser };
    case `${DELETE_USER_ACCOUNT}_FULFILLED`:
      deleteuser = action.payload.data;
      return { ...state, loading: false, deleteuser };
    case `${GET_ALL_ADMIN_ACCOUNTS}_FULFILLED`:
      getalladmins = action.payload.data;
      return { ...state, loading: false, getalladmins };
    case `${GET_ALL_EDITOR_ACCOUNTS}_FULFILLED`:
      getalleditors = action.payload.data;
      return { ...state, loading: false, getalleditors };
    case `${GET_ALL_USER_ACCOUNTS}_FULFILLED`:
      getallusers = action.payload.data.data;
      return { ...state, loading: false, getallusers };
    case `${GET_ALL_REVIEWER_ACCOUNTS}_FULFILLED`:
      getallreviewers = action.payload.data;
      return { ...state, loading: false, getallreviewers };
    case `${LOGIN_USER_ACCOUNT}_FULFILLED`:
      loginuser = action.payload.data.data;
      return { ...state, loading: false, loginuser };
    case `${GET_USER_NOTIFICATIONS}_FULFILLED`:
      usernotifications = action.payload.data.data;
      return { ...state, loading: false, usernotifications };
    
    case `${CREATE_USER_ACCOUNT}_REJECTED`:
      return { ...state, loading: false, createuserError: action.payload.data, state: initialState };
    case `${GET_USER_ACCOUNT}_REJECTED`:
      return { ...state, loading: false, getuserError: action.payload.data, state: initialState };
    case `${UPDATE_USER_ACCOUNT}_REJECTED`:
      return { ...state, loading: false, updateuserError: action.payload.data, state: initialState };
    case `${DELETE_USER_ACCOUNT}_REJECTED`:
      return { ...state, loading: false, deleteuserError: action.payload.data, state: initialState };
    case `${GET_ALL_ADMIN_ACCOUNTS}_REJECTED`:
      return { ...state, loading: false, getalladminsError: action.payload.data, state: initialState };
    case `${GET_ALL_EDITOR_ACCOUNTS}_REJECTED`:
      return { ...state, loading: false, getalleditorsError: action.payload.data, state: initialState };
    case `${GET_ALL_USER_ACCOUNTS}_REJECTED`:
      return { ...state, loading: false, getallusersError: action.payload.data, state: initialState };
    case `${GET_ALL_REVIEWER_ACCOUNTS}_REJECTED`:
      return { ...state, loading: false, getallreviewersError: action.payload.data, state: initialState };
    case `${LOGIN_USER_ACCOUNT}_REJECTED`:
      return { ...state, loading: false, loginuserError: action.payload, state: initialState };
    case `${GET_USER_NOTIFICATIONS}_REJECTED`:
      return { ...state, loading: false, usernotificationsError: action.payload, state: initialState };

    default: 
      return state;
  }
}

export default userReducer;
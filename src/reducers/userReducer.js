import { CREATE_USER_ACCOUNT, GET_USER_ACCOUNT, UPDATE_USER_ACCOUNT, DELETE_USER_ACCOUNT, GET_ALL_ADMIN_ACCOUNTS, 
  GET_ALL_EDITOR_ACCOUNTS, GET_ALL_USER_ACCOUNTS, GET_ALL_REVIEWER_ACCOUNTS, LOGIN_USER_ACCOUNT } from '../actions/index';

const initialState = {
  createUser: '',
  getUser: '',
  loginUser: '',
  updateUser: '',
  deleteUser: '',
  getAllUsers: [],
  getAllEditors: [],
  getAllReviewers: [],
  getAllAdmins: [],
  createUserError: null,
  getUserError: null,
  loginUserError: null,
  updateUserError: null,
  deleteUserError: null,
  getAllUsersError: null,
  getAllReviewersError: null,
  getAllEditorsError: null,
  getAllAdminsError: null
};

function userReducer(state = initialState, action) {
  let createUser, getUser, loginUser, updateUser, deleteUser, getAllAdmins, 
      getAllEditors, getAllReviewers, getAllUsers;

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
      return { ...state, loading: true,
        createUserError: null,
        getUserError: null,
        loginUserError: null,
        updateUserError: null,
        deleteUserError: null,
        getAllUsersError: null,
        getAllReviewersError: null,
        getAllEditorsError: null,
        getAllAdminsError: null
      };
    
    case `${CREATE_USER_ACCOUNT}_FULFILLED`:
      createUser = action.payload.data;
      return { ...state, loading: false, createUser };
    case `${GET_USER_ACCOUNT}_FULFILLED`:
      getUser = action.payload.data;
      return { ...state, loading: false, getUser }; 
    case `${UPDATE_USER_ACCOUNT}_FULFILLED`:
      updateUser = action.payload.data;
      return { ...state, loading: false, updateUser };
    case `${DELETE_USER_ACCOUNT}_FULFILLED`:
      deleteUser = action.payload.data;
      return { ...state, loading: false, deleteUser };
    case `${GET_ALL_ADMIN_ACCOUNTS}_FULFILLED`:
      getAllAdmins = action.payload.data;
      return { ...state, loading: false, getAllAdmins };
    case `${GET_ALL_EDITOR_ACCOUNTS}_FULFILLED`:
      getAllEditors = action.payload.data;
      return { ...state, loading: false, getAllEditors };
    case `${GET_ALL_USER_ACCOUNTS}_FULFILLED`:
      getAllUsers = action.payload.data;
      return { ...state, loading: false, getAllUsers };
    case `${GET_ALL_REVIEWER_ACCOUNTS}_FULFILLED`:
      getAllReviewers = action.payload.data;
      return { ...state, loading: false, getAllReviewers };
    case `${LOGIN_USER_ACCOUNT}_FULFILLED`:
      loginUser = action.payload.data;
      return { ...state, loading: false, loginUser };
    
    case `${CREATE_USER_ACCOUNT}_REJECTED`:
      return { ...state, loading: false, createUserError: action.payload.data, state: initialState };
    case `${GET_USER_ACCOUNT}_REJECTED`:
      return { ...state, loading: false, getUserError: action.payload.data, state: initialState };
    case `${UPDATE_USER_ACCOUNT}_REJECTED`:
      return { ...state, loading: false, updateUserError: action.payload.data, state: initialState };
    case `${DELETE_USER_ACCOUNT}_REJECTED`:
      return { ...state, loading: false, deleteUserError: action.payload.data, state: initialState };
    case `${GET_ALL_ADMIN_ACCOUNTS}_REJECTED`:
      return { ...state, loading: false, getAllAdminsError: action.payload.data, state: initialState };
    case `${GET_ALL_EDITOR_ACCOUNTS}_REJECTED`:
      return { ...state, loading: false, getAllEditorsError: action.payload.data, state: initialState };
    case `${GET_ALL_USER_ACCOUNTS}_REJECTED`:
      return { ...state, loading: false, getAllUsersError: action.payload.data, state: initialState };
    case `${GET_ALL_REVIEWER_ACCOUNTS}_REJECTED`:
      return { ...state, loading: false, getAllReviewersError: action.payload.data, state: initialState };
    case `${LOGIN_USER_ACCOUNT}_REJECTED`:
      return { ...state, loading: false, loginUserError: action.payload.data, state: initialState };

    default: 
      return state;
  }
}

export default userReducer;
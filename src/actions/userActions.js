import axios from 'axios';
import { CREATE_USER_ACCOUNT, GET_USER_ACCOUNT, UPDATE_USER_ACCOUNT, DELETE_USER_ACCOUNT, GET_ALL_ADMIN_ACCOUNTS, 
  GET_ALL_EDITOR_ACCOUNTS, GET_ALL_USER_ACCOUNTS, GET_ALL_REVIEWER_ACCOUNTS, LOGIN_USER_ACCOUNT, GET_USER_NOTIFICATIONS } from './index';

export function createUserAccount(user) {
  return {
    type: CREATE_USER_ACCOUNT,
    payload: axios.post(`${process.env.REACT_APP_API_STG_URL}/api/user/create`, user)
  };
}

export function loginUserAccount(user) {
  return {
    type: LOGIN_USER_ACCOUNT,
    payload: axios.post(`${process.env.REACT_APP_API_STG_URL}/api/user/login`, user)
  };
}

export function getUserAccount() {
  return {
    type: GET_USER_ACCOUNT,
    payload: axios.get(`${process.env.REACT_APP_API_STG_URL}/api/user/`, {
      headers: { 'Authorization': localStorage.getItem('token')}
    })
  };
}

export function getAllUsers() {
  return {
    type: GET_ALL_USER_ACCOUNTS,
    payload: axios.get(`${process.env.REACT_APP_API_STG_URL}/api/user/users`)
  };
}

export function getAllAdmins() {
  return {
    type: GET_ALL_ADMIN_ACCOUNTS,
    payload: axios.get(`${process.env.REACT_APP_API_STG_URL}/api/user/admins`, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  };
}

export function getAllReviewers() {
  return {
    type: GET_ALL_REVIEWER_ACCOUNTS,
    payload: axios.get(`${process.env.REACT_APP_API_STG_URL}/api/user/reviewers`, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  };
}

export function getAllEditors() {
  return {
    type: GET_ALL_EDITOR_ACCOUNTS,
    payload: axios.get(`${process.env.REACT_APP_API_STG_URL}/api/user/editors`, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  };
}

export function updateUserAccount(user) {
  return {
    type: UPDATE_USER_ACCOUNT,
    payload: axios.put(`${process.env.REACT_APP_API_STG_URL}/api/user/update`, user, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  };
}

export function deleteUserAccount(user) {
  return {
    type: DELETE_USER_ACCOUNT,
    payload: axios.put(`${process.env.REACT_APP_API_STG_URL}/api/user/delete`, user, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  };
}

export function getUserNotifications() {
  return {
    type: GET_USER_NOTIFICATIONS,
    payload: axios.get(`${process.env.REACT_APP_API_STG_URL}/api/user/notifications`, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  };
}
import axios from 'axios';
import { CREATE_USER_ACCOUNT, GET_USER_ACCOUNT, UPDATE_USER_ACCOUNT, DELETE_USER_ACCOUNT, GET_ALL_ADMIN_ACCOUNTS, 
  GET_ALL_EDITOR_ACCOUNTS, GET_ALL_USER_ACCOUNTS, GET_ALL_REVIEWER_ACCOUNTS, LOGIN_USER_ACCOUNT } from './index';

export function createUserAccount(user) {
  return {
    type: CREATE_USER_ACCOUNT,
    payload: axios.post(`${REACT_APP_API_STG_URL}/api/user/create`, user)
  };
}

export function loginUserAccount(user) {
  return {
    type: LOGIN_USER_ACCOUNT,
    payload: axios.post(`https://conference-stg.herokuapp.com/api/user/login`, user)
  };
}

export function getUserAccount() {
  return {
    type: GET_USER_ACCOUNT,
    payload: axios.get(`${REACT_APP_API_STG_URL}/api/user/`, {
      headers: { 'Authorization': localStorage.getItem('Authorization' )}
    })
  };
}

export function getAllUsers() {
  return {
    type: GET_ALL_USER_ACCOUNTS,
    payload: axios.get(`${REACT_APP_API_STG_URL}/api/user/users`, {
      headers: { 'Authorization': localStorage.getItem('Authorization' )}
    })
  };
}

export function getAllAdmins() {
  return {
    type: GET_ALL_ADMIN_ACCOUNTS,
    payload: axios.get(`${REACT_APP_API_STG_URL}/api/user/admins`, {
      headers: { 'Authorization': localStorage.getItem('Authorization' )}
    })
  };
}

export function getAllReviewers() {
  return {
    type: GET_ALL_REVIEWER_ACCOUNTS,
    payload: axios.get(`${REACT_APP_API_STG_URL}/api/user/reviewers`, {
      headers: { 'Authorization': localStorage.getItem('Authorization' )}
    })
  };
}

export function getAllEditors() {
  return {
    type: GET_ALL_EDITOR_ACCOUNTS,
    payload: axios.get(`${REACT_APP_API_STG_URL}/api/user/editors`, {
      headers: { 'Authorization': localStorage.getItem('Authorization' )}
    })
  };
}

export function updateUserAccount(user) {
  return {
    type: UPDATE_USER_ACCOUNT,
    payload: axios.put(`${REACT_APP_API_STG_URL}/api/user/update`, user, {
      headers: { 'Authorization': localStorage.getItem('Authorization' )}
    })
  };
}

export function deleteUserAccount(user) {
  return {
    type: DELETE_USER_ACCOUNT,
    payload: axios.put(`${REACT_APP_API_STG_URL}/api/user/delete`, user, {
      headers: { 'Authorization': localStorage.getItem('Authorization' )}
    })
  };
}
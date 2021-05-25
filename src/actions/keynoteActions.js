import axios from 'axios';
import { CREATE_KEYNOTE, GET_ALL_KEYNOTES, GET_KEYNOTE, SET_KEYNOTE, UPDATE_KEYNOTE, DELETE_KEYNOTE } from './index';

export function createKeynote(keynote) {
  return {
    type: CREATE_KEYNOTE,
    payload: axios.post(`${REACT_APP_API_STG_URL}/api/keynote/create`, keynote, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  };
}

export function getAllKeynotes() {
  return {
    type: GET_ALL_KEYNOTES,
    payload: axios.get(`${REACT_APP_API_STG_URL}/api/keynote/`)
  };
}

export function getKeynoteById(keynote) {
  return {
    type: GET_KEYNOTE,
    payload: axios.get(`${REACT_APP_API_STG_URL}/api/keynote/${keynote.id}`)
  }
}

export function setKeynote(keynote) {
  return {
    type: SET_KEYNOTE,
    payload: keynote
  };
}

export function updateKeynote(keynote) {
  return {
    type: UPDATE_KEYNOTE,
    payload: axios.put(`${REACT_APP_API_STG_URL}/api/keynote/update/`, keynote, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  };
}

export function deleteKeynote(keynote) {
  return {
    type: DELETE_KEYNOTE,
    payload: axios.delete(`${REACT_APP_API_STG_URL}/api/keynote/remove/${keynote.id}`, null, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  };
}

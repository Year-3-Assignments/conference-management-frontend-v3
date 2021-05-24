import axios from 'axios';
import { CREATE_RESOURCE, GET_ALL_RESOURCES, SET_RESOURCE, GET_RESOURCE, GET_EDITOR_RESOURCES, 
  UPDATE_RESOURCE, DELETE_RESOURCE, CHANGE_RESOURCE_STATUS, RESOURCE_PAYMENT } from './index';

export function createResource(resource) {
  return {
    type: CREATE_RESOURCE,
    payload: axios.post(`${REACT_APP_API_STG_URL}/api/resource/create`, resource, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  };
}

export function getAllResources() {
  return {
    type: GET_ALL_RESOURCES,
    payload: axios.get(`${REACT_APP_API_STG_URL}/api/resource/`)
  };
}

export function getResourceById(resource) {
  return {
    type: GET_RESOURCE,
    payload: axios.get(`${REACT_APP_API_STG_URL}/api/resource/${resource.id}`)
  };
}

export function setResource(resource) {
  return {
    type: SET_RESOURCE,
    payload: resource
  };
}

export function getEditorResources() {
  return {
    type: GET_EDITOR_RESOURCES,
    payload: axios.get(`${REACT_APP_API_STG_URL}/api/resource/editor/resources`, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  };
}

export function updateResource(resource) {
  return {
    type: UPDATE_RESOURCE,
    payload: axios.put(`${REACT_APP_API_STG_URL}/api/resource/update`, resource, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  };
}

export function chnageResourceState(resource) {
  return {
    type: CHANGE_RESOURCE_STATUS,
    payload: axios.put(`${REACT_APP_API_STG_URL}/api/resource/status/${resource.id}`, resource, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  }
}

export function resourcePayment(resource) {
  return {
    type: RESOURCE_PAYMENT,
    payload: axios.put(`${REACT_APP_API_STG_URL}/api/resource/paid/${resource.id}`, null, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  }
}

export function deleteResource(resource) {
  return {
    type: DELETE_RESOURCE,
    payload: axios.delete(`${REACT_APP_API_STG_URL}/api/resource/remove/${resource.id}`, null, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  }
}
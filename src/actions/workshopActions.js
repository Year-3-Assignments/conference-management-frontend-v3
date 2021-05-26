import axios from 'axios';
import {CREATE_WORKSHOP, GET_ALL_WORKSHOPS, SET_WORKSHOP, GET_WORKSHOP, UPDATE_WORKSHOP, DELETE_WORKSHOP } from './index';

export function createWorkshop(workshop){
  return{
    type:CREATE_WORKSHOP,
    payload:axios.post(`${process.env.REACT_APP_API_STG_URL}/api/workshop/create`,workshop, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  };
}

export function getAllWorkshops(){
  return{
    type:GET_ALL_WORKSHOPS,
    payload:axios.get(`${process.env.REACT_APP_API_STG_URL}/api/workshop/`)
  };
}

export function getWorkshopById(workshop){
  return{
    type: GET_WORKSHOP,
    payload: axios.get(`${process.env.REACT_APP_API_STG_URL}/api/workshop/${workshop.id}`)
  };
}

export function setWorkshop(workshop){
  return{
    type:SET_WORKSHOP,
    payload: workshop
  };
}

export function updateWorkshop(workshop){
  return{
    type: UPDATE_WORKSHOP,
    payload: axios.put(`${process.env.REACT_APP_API_STG_URL}/api/workshop/update`, workshop, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  };
}

export function deleteWorkshop(workshop){
  return{
    type:DELETE_WORKSHOP,
    payload:axios.delete(`${process.env.REACT_APP_API_STG_URL}/api/workshop/delete/${workshop.id}`, null, {
      headers: { 'Authorization': localStorage.getItem('Authorization') }
    })
  };
}
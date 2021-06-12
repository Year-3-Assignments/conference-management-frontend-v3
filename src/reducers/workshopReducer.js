import { CREATE_WORKSHOP, GET_WORKSHOP, SET_WORKSHOP, UPDATE_WORKSHOP, DELETE_WORKSHOP, GET_ALL_WORKSHOPS } from '../actions/index';

const initialState = {
  createWorkshop: '',
  allWorkshops: [],
  getWorkshop: '',
  setWorkshop: '',
  updateWorkshop:'',
  deleteWorkshop:'',
  createWorkshopError: null,
  allWorkshopsError: null,
  getWorkshopError: null,
  updateWorkshopError: null,
  deleteWorkshopError: null,
};

function workshopReducer(state = initialState,action){
  let createWorkshop, allWorkshops, getWorkshop, setWorkshop, updateWorkshop, deleteWorkshop;

  switch(action){
    case `${CREATE_WORKSHOP}_PENDING`:
    case `${GET_ALL_WORKSHOPS}_PENDING`:
    case `${GET_WORKSHOP}_PENDING`:
    case `${UPDATE_WORKSHOP}_PENDING`:
    case `${DELETE_WORKSHOP}_PENDING`:
      return{ ...state, loading:true,
        createWorkshop: null,
        allWorkshops: null,
        getWorkshop: null,
        updateWorkshop:null,
        deleteWorkshop: null
      };

    case  `${CREATE_WORKSHOP}_FULFILLED`:
      createWorkshop = action.payload.data;
      return{...state, loading: false, createWorkshop};
    case  `${GET_ALL_WORKSHOPS}_FULFILLED`:
      allWorkshops = action.payload.data;
      return{...state, loading:false, allWorkshops};
    case  `${SET_WORKSHOP}`:
      setWorkshop = action.payload;
      return{...state, loading:false, setWorkshop};
    case  `${GET_WORKSHOP}_FULFILLED`:
      getWorkshop = action.payload.data;
      return{...state, loading: false, getWorkshop};
    case  `${UPDATE_WORKSHOP}_FULFILLED`:
      updateWorkshop = action.payload.data;
      return{...state,loading:false, updateWorkshop};
    case  `${DELETE_WORKSHOP}_FULFILLED`:
      deleteWorkshop = action.payload.data;
      return{...state, loading:false , deleteWorkshop};

    case `${CREATE_WORKSHOP}_REJECTED`:
      return { ...state, loading: false, createWorkshopError: action.payload.data, state: initialState };
    case `${GET_ALL_WORKSHOPS}_REJECTED`:
      return { ...state, loading: false, allWorkshopsError: action.payload.data, state: initialState };
    case `${GET_WORKSHOP}_REJECTED`:
      return { ...state, loading: false, getWorkshopError: action.payload.data, state: initialState };
    case `${UPDATE_WORKSHOP}_REJECTED`:
      return { ...state, loading: false, updateWorkshopError: action.payload.data, state: initialState };
    case `${DELETE_WORKSHOP}_REJECTED`:
      return { ...state, loading: false, deleteWorkshopError: action.payload.data, state: initialState };
    default:
      return state;
  } 
}

export default workshopReducer;
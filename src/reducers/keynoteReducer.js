import { CREATE_KEYNOTE, GET_ALL_KEYNOTES, GET_KEYNOTE, SET_KEYNOTE, UPDATE_KEYNOTE, DELETE_KEYNOTE } from '../actions/index';

const initialState = {
  createKeynote: '',
  getAllKeynotes: [],
  getKeynote: '',
  setKeynote: '',
  updateKeynote: '',
  deleteKeynote: '',
  createKeynoteError: null,
  getAllKeynoteError: null,
  getKeynoteError: null,
  updateKeynoteError: null,
  deleteKeynoteError: null,
};

function keynoteReducer(state = initialState, action) {
  let createKeynote, getAllKeynotes, getKeynote,setKeynote , updateKeynote, deleteKeynote;

  switch (action) {
    case `${CREATE_KEYNOTE}_PENDING`:
    case `${GET_ALL_KEYNOTES}_PENDING`:
    case `${GET_KEYNOTE}_PENDING`:
    case `${UPDATE_KEYNOTE}_PENDING`:
    case `${DELETE_KEYNOTE}_PENDING`:
      return{ ...state, loading: true,
        createKeynote: null, 
        getAllKeynotes: null,
        getKeynote: null,
        updateKeynote: null,
        deleteKeynote: null
      };

    case `${CREATE_KEYNOTE}_FULFILLED`:
      createKeynote = action.payload.data;
      return{ ...state, loading: false, createKeynote };
    case `${GET_ALL_KEYNOTES}_FULFILLED`:
      getAllKeynotes = action.payload.data;
      return{ ...state, loading: false, getAllKeynotes };
    case `${GET_KEYNOTE}_FULFILLED`:
      getKeynote = action.payload.data;
      return{ ...state, loading: false, getKeynote};
    case `${SET_KEYNOTE}_FULFILLED`:
      setKeynote = action.payload.data;
      return{ ...state, loading: false, setKeynote};
    case `${UPDATE_KEYNOTE}_FULFILLED`:
      updateKeynote = action.payload.data;
      return{ ...state, loading: false, updateKeynote};
    case `${DELETE_KEYNOTE}_FULFILLED`:
      deleteKeynote = action.payload.data;
      return{ ...state, loading: false, deleteKeynote};
    
    case `${CREATE_KEYNOTE}_REJECTED`:
      return {...state, loading: false, createKeynoteError: action.payload.data, state: initialState};
    case `${GET_ALL_KEYNOTES}_REJECTED`:
      return {...state, loading: false, getAllKeynoteError: action.payload.data, state: initialState};
    case `${GET_KEYNOTE}_REJECTED`:
      return {...state, loading: false, getKeynoteError: action.payload.data, state: initialState};
    case `${UPDATE_KEYNOTE}_REJECTED`:
      return {...state, loading: false, updateKeynoteError: action.payload.data, state: initialState};
    case `${DELETE_KEYNOTE}_REJECTED`:
      return {...state, loading:false, deleteKeynoteError: action.payload.data, state: initialState};

    default:
      return state;
  }
}

export default keynoteReducer;
import * as types from './movieTypes';


//----------- initial state ----------//
const initialState = {
  movieResults: [],
  errorMsg: false,
  isLoading: false
}

//---------- reducer ----------//
export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case types.MOVIE_DATA_LOADING: 
      return { ...state, isLoading: true };
    case types.GET_MOVIES_SUCCESS: 
      return { ...state, movieResults: action.payload, errorMsg: null, isLoading: false };
    case types.GET_MOVIES_FAIL:
      return { ...state, errorMsg: action.payload.message, isLoading: false  };
    default:
      return state
  }
}

    // case GET_PROPERTIES:
    //   return [...action.properties]
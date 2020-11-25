import * as types from './movieActionTypes';


//----------- initial state ----------//
const initialState = {
  movieResults: [],
  movieDetail: {},
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
    case types.GET_MOVIE_DETAIL_SUCCESS:
      return {...state, movieDetail: action.payload, errorMsg: null, isLoading: false };
    case types.GET_UPDATED_RATING:
      return {...state, movieDetail: {...state.movieDetail, ratingsFromDataBase: action.payload } };
      case types.GET_MOVIE_DATA_FAIL:
      return { ...state, errorMsg: action.payload.message, isLoading: false  };
    default:
      return state
  }
}
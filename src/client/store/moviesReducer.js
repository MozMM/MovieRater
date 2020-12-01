import * as types from './movieActionTypes';

//----------- initial state ----------//
export const initialState = {
  movieResults: [],
  movieDetail: {},
  ratingFromDataBase: null,
  dataBaseErr: null,
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
    case types.GET_MOVIE_DATA_FAIL:
      return { ...state, errorMsg: action.payload.message, isLoading: false };
    case types.GET_RATING_FROM_DB:
      return {...state, ratingFromDataBase: action.payload, dataBaseErr: null };
    case types.GET_RATING_FROM_DB_FAIL:
      return {...state, dataBaseErr: action.payload };
    default:
      return state
  }
}

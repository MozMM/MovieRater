import axios from 'axios'
import * as types from './movieTypes';
import * as mockData from './mocks';

//-----------  -----------//
export const getMovies = () => async dispatch => {
  dispatch({
    type: types.MOVIE_DATA_LOADING,
    payload: mockData
  })
  
  // console.log("movies @ action creator", movies)
  // Axios call // 
  try {
    // const requestOptions = {};
    // const allMovies = await axios.request(requestOptions);

    // if (allMovies) {
      dispatch({
        type: types.GET_MOVIES_SUCCESS,
        payload: mockData
      })
    // }

  } catch (err) {
    dispatch({
      type: types.GET_MOVIES_FAIL,
      payload: err
    })
  }
}

export const getMovieDetail = (id) => {


}
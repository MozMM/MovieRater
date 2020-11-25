import axios from 'axios'
import * as types from './movieActionTypes';

//----------- Get Movies -----------//
export const getMovies = (searchString) => async (dispatch) => {
  dispatch({
    type: types.MOVIE_DATA_LOADING,
  })
  try {
   
    let moviesResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${searchString}&page=1&include_adult=false`)
   
    if (moviesResponse.data.total_results) {
      dispatch({
        type: types.GET_MOVIES_SUCCESS,
        payload: moviesResponse.data.results 
      })
    }
  } catch (err) {
    dispatch({
      type: types.GET_MOVIE_DATA_FAIL,
      payload: err
    })
  }
}

//-----------Get Single Movie Detail -----------//
export const getMovieDetail = (id) => async (dispatch) => {
  dispatch({
    type: types.MOVIE_DATA_LOADING,
  })
  try {
    let movieDetailResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`)
    let movieCreditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`)
    let directorObj = movieCreditsResponse.data.crew.filter(crewMember => crewMember.job === "Director")[0]
      if (movieDetailResponse.data && directorObj) {
        dispatch({
          type: types.GET_MOVIE_DETAIL_SUCCESS,
          payload: {...movieDetailResponse.data, director: directorObj.name}
        })
      }
  } catch (err) {
    dispatch({
      type: types.GET_MOVIE_DATA_FAIL,
      payload: err
    })
  }
}

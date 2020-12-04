import axios from 'axios'
import * as types from './movieActionTypes';

//----------- Get Movies -----------//
export const getMovies = (searchString) => async (dispatch) => {
  dispatch({
    type: types.MOVIE_DATA_LOADING,
  })
  try {
    let moviesResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${searchString}&page=1&include_adult=false`);
    if (moviesResponse.data.total_results === 0) {
      dispatch({
        type: types.GET_MOVIES_SUCCESS_NO_RESULTS,
        payload: moviesResponse.data.results 
      })
    } else if (moviesResponse.data.results) {
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
    type: types.MOVIE_DETAIL_LOADING,
  })
  try {
    let movieDetailResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`)
    let movieCreditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`)
    let directorObj = {};
    let directorName = 'Name not available';
      if (movieCreditsResponse.data) {
        directorObj = movieCreditsResponse.data.crew.filter(crewMember => crewMember.job === "Director")[0];
        if (directorObj) {
          directorName = directorObj.name;
        }
      }
      if (movieDetailResponse.data) {
        dispatch({
          type: types.GET_MOVIE_DETAIL_SUCCESS,
          payload: {
            ...movieDetailResponse.data, 
            director: directorName
          }
        })
      }
  } catch (err) {
    dispatch({
      type: types.GET_MOVIE_DATA_FAIL,
      payload: err
    })
  }
}

//---------------Database Actions--------------// 
export const getRating = (id) => async (dispatch) => {
  try {
    let movieRatingResponse = await axios.get(`/api/ratings/${id}`);
    if (movieRatingResponse) {
      dispatch({
        type: types.GET_RATING_FROM_DB,
        payload: movieRatingResponse.data
      })
    }
  } catch {
    dispatch({
      type: types.GET_RATING_FROM_DB_FAIL,
      payload: 'please check database connection.'
    })
  }
}

export const thumbsUp = (id) => async (dispatch) => {
  try {
    let updatedRatingResponse = await axios.post(`/api/ratings/${id}/up`);
    if (updatedRatingResponse) {
      dispatch({
        type: types.GET_RATING_FROM_DB,
        payload: {
            thumbsUp: updatedRatingResponse.data.thumbsUp,
            thumbsDown: updatedRatingResponse.data.thumbsDown
          }
      })
    }
  } catch(err) {
    dispatch({
      type: types.GET_RATING_FROM_DB_FAIL,
      payload: 'please check database connection.'
    })
  }
}

export const thumbsDown = (id) => async (dispatch) => {
  try {
    let updatedRatingResponse = await axios.post(`/api/ratings/${id}/down`);
    if (updatedRatingResponse) {
      dispatch({
        type: types.GET_RATING_FROM_DB,
        payload: {
            thumbsUp: updatedRatingResponse.data.thumbsUp,
            thumbsDown: updatedRatingResponse.data.thumbsDown
          }
      })
    }
  } catch(err) {
    dispatch({
      type: types.GET_RATING_FROM_DB_FAIL,
      payload: 'please check database connection.'
    })
  }
}

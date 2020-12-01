import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as mocks from '../mocks/mockTestData'

import { getMovies, getMovieDetail, getRating, thumbsUp, thumbsDown } from './movieActions';
import { initialState, moviesReducer } from './moviesReducer';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

//------------ reducer ------------ //
describe('movies reducer', () => {
  it('should return the initial state', () => {
    const action = { type: null };
    const movieReducerReturn = moviesReducer(initialState, action);
    expect(movieReducerReturn).toEqual(initialState);
  })
})

// ------------ movie actions ------------ //
describe('Movie Actions', () => {
  let store

  beforeEach(() => {
    store = mockStore(initialState);
  })

  afterEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  })

  describe('getMovies Action', () => {
    it('when successful, dispatches MOVIE_DATA_LOADING then GET_MOVIES_SUCCESS', async () => {
      axios.get.mockResolvedValueOnce(mocks.moviesAPIResponse);
      await store.dispatch(getMovies('never ending story'));
      const actions = store.getActions();
      expect(actions[0].type).toBe('MOVIE_DATA_LOADING');
      expect(actions[1].type).toBe('GET_MOVIES_SUCCESS');
      expect(actions[1].payload).toEqual(mocks.moviesAPIResponse.data.results);  
    })

   it('when fails, dispatches MOVIE_DATA_LOADING then GET_MOVIE_DATA_FAIL', async () => {
    axios.get.mockRejectedValueOnce({ message: 'Request failed with status code 404' });
    await store.dispatch(getMovies());
    const actions = store.getActions();
      expect(actions[0].type).toBe('MOVIE_DATA_LOADING');
      expect(actions[1].type).toBe('GET_MOVIE_FAIL');
      expect(actions[1].payload.message).toBe('Request failed with status code 404');
    })
  })

  //------------getSingleMovieDetail Action -------------//
  describe('getSingleMovieDetail Action', () => {
    it('when successful, dispatches MOVIE_DATA_LOADING then GET_MOVIE_DETAIL_SUCCESS', async () => {
      axios.get.mockResolvedValueOnce(mocks.movieDetailResponse).mockResolvedValueOnce(mocks.movieCreditResponse);
      await store.dispatch(getMovieDetail(34636));
      const actions = store.getActions();
      expect(actions[0].type).toBe('MOVIE_DATA_LOADING');
      expect(actions[1].type).toBe('GET_MOVIE_DETAIL_SUCCESS');
      expect(actions[1].payload).toEqual(mocks.detailWithDirector)
    })

    it('when fails, dispatches MOVIE_DATA_LOADING then GET_MOVIE_DATA_FAIL', async () => {
      axios.get.mockRejectedValueOnce({ message: 'Request failed with status code 404' })
      await store.dispatch(getMovieDetail());
      const actions = store.getActions();
      expect(actions[0].type).toBe('MOVIE_DATA_LOADING');
      expect(actions[1].type).toBe('GET_MOVIE_FAIL');
      expect(actions[1].payload.message).toBe('Request failed with status code 404')
    })
  })

  //------------getRating Action -------------//
  describe('getRating from Database', () => {
    it('if successful, getRatings dispatches GET_RATING_FROM_DB action', async () => {
      axios.get.mockResolvedValueOnce({ data: { "thumbsUp": 3, "thumbsDown": 2 }});
      await store.dispatch(getRating('123'));
      const actions = store.getActions();
      expect(actions[0].type).toBe('GET_RATING_FROM_DB');
      expect(actions[0].payload).toEqual({ "thumbsUp": 3,"thumbsDown": 2 });
    });

    it('if fails, getRatings dispatches GET_RATING_FROM_DB_FAIL action', async () => {
      axios.get.mockRejectedValueOnce();
      await store.dispatch(getRating('123'));
      const actions = store.getActions();
      expect(actions[0].type).toBe('GET_RATING_FROM_DB_FAIL');
      expect(actions[0].payload).toBe('please check database connection.');
    });
  });

  //------------thumbsUp Action -------------//
  describe('add thumbsUp to Database', () => {
    it('if sucessful, thumbsUp dispatches GET_RATING_FROM_DB with updated rating', async () => {
      axios.post.mockResolvedValueOnce({ data: { "thumbsUp": 4, "thumbsDown": 2 }})
      await store.dispatch(thumbsUp('123'));
      const actions = store.getActions();
      expect(actions[0].type).toBe('GET_RATING_FROM_DB');
      expect(actions[0].payload).toEqual({ "thumbsUp": 4,"thumbsDown": 2 })
    });

    it('if fails, getRatings dispatches GET_RATING_FROM_DB_FAIL action', async () => {
      axios.post.mockRejectedValueOnce();
      await store.dispatch(thumbsUp('123'));
      const actions = store.getActions();
      expect(actions[0].type).toBe('GET_RATING_FROM_DB_FAIL');
      expect(actions[0].payload).toBe('please check database connection.');
    });
  });

  //------------thumbsDown Action -------------//
  describe('add thumbsDown to Database', () => {
    it('if sucessful, thumbsDown dispatches GET_RATING_FROM_DB with updated rating', async () => {
      axios.post.mockResolvedValueOnce({ data: { "thumbsUp": 4, "thumbsDown": 3 }})
      await store.dispatch(thumbsDown('123'));
      const actions = store.getActions();
      expect(actions[0].type).toBe('GET_RATING_FROM_DB');
      expect(actions[0].payload).toEqual({ "thumbsUp": 4,"thumbsDown": 3 })
    });

    it('if fails, getRatings dispatches GET_RATING_FROM_DB_FAIL action', async () => {
      axios.post.mockRejectedValueOnce();
      await store.dispatch(thumbsDown('123'));
      const actions = store.getActions();
      expect(actions[0].type).toBe('GET_RATING_FROM_DB_FAIL');
      expect(actions[0].payload).toBe('please check database connection.');
    });
  });
});

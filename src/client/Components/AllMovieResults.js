import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../store/movieActions';
import { 
  movieErrorSelector, 
  movieResultsSelector,
  isLoadingSelector
} from '../store/movieSelectors';
import cow from '../images/Cow.jpg'

const renderPoster = (movie) => {
  return (movie.poster_path ?
    <img className='movie-results__poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
    :
    <div className='movie-results__poster__default'>
      <div className='default-text'>{movie.title}</div>
      <div>{'No image available'}</div>
    </div> 
  )
}

const renderNoMooviesMsg = (message) => {
  let text = 'No Moovies. \n Please try \n a different query.';
  if (message === 'Request failed with status code 422') {
    text = 'No Moovies. \n Please provide \n a search query!'
  }
  return (
    <div className='cow-message-container'>
      <div className='cow-text__container'> 
        <div className='cow-text'>{text.split('\n')[0]}</div> 
        <div className='cow-text'>{text.split('\n')[1]}</div>
        <div >{text.split('\n')[2]}</div>
      </div>
      <img src={cow} alt=''/>
    </div>
  )
}

const AllMovieResults = (props) => {
  const dispatch = useDispatch();
  const movieResults = useSelector(movieResultsSelector);
  const movieFetchErrors = useSelector(movieErrorSelector);
  const isLoading = useSelector(isLoadingSelector);
  const hasResults = movieResults.length > 0;

  const [input, setInput] = useState('');

  const handleInputChange = (evt) => setInput(evt.target.value);

  if (isLoading) {
    return (
      <div className='loading-text__container'>
        <div className='loading-text'>{'Loading...'}</div>
      </div>
    )
  } 

  return (
    <>
      <div className='__search-container'>
        <div className='__name'>
          <form className='search'>
            <label className='__label'>{'What are you looking for?'}</label>
            <span className="__input-button-container">
              <input className='__text-input' type="text" onChange={handleInputChange} />
              <button  className='__button' type='submit' 
                onClick={() => dispatch(getMovies(input))}
              >
                {'Search Movies'}
              </button>
            </span>
          </form>
        </div>
      </div> 
      <div>
        {hasResults && 
          <div>
            <div className="movie-results__container __instructions"> 
            {'Click on a poster for details, or to add your rating.'}
            </div>
            <div className="movie-results__container"> 
              {movieResults.map((movie) => (
                <div key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    {renderPoster(movie)}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          }
        <div>
        {movieFetchErrors && renderNoMooviesMsg(movieFetchErrors)}
        </div>
      </div>  
    </>
  )
}

export default AllMovieResults;

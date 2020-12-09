import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../store/movieActions';
import { checkAndSplitMsg } from '../utils/stringUtils'
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
  const splitMsg = checkAndSplitMsg(message)
  return (
    <div className='cow-error__container'>
      <div className='cow-text__container'> 
        <div className='cow-text'>{splitMsg[0]}</div> 
        <div className='cow-text'>{splitMsg[1]}</div>
        <div >{splitMsg[2]}</div>
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
      <div className='search-container'>
        <div className='search'>
          <form className='search__form'>
            <label className='search__label'>{'What are you looking for?'}</label>
            <span className='search__button-container'>
              <input className='search__input' type="text" onChange={handleInputChange} />
              <button  className='search__button' type='submit' 
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
            <div className='movie-results__container movie-results__instructions'> 
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

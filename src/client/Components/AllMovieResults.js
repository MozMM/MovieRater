import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../store/movieActions';
import { 
  movieErrorSelector, 
  movieResultsSelector,
  isLoadingSelector
} from '../store/movieSelectors';

const renderPoster = (movie) => {
  return ( movie.poster_path ?
    <img className='movie-results__poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
    :
    <div className='movie-results__poster__default'>
      <div>{movie.title}</div>
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
    return (<div>Loading...</div>);
  }

  return (
    <div>
      <div className='search__container'>
        <form className='__form'>
          <div>
            <label>{'What are you looking for?'}</label>
          </div>
          <div className='__search-bar'>
            <input className='__text-input' type="text" onChange={handleInputChange} />
            <button  className='__button' type='submit' 
              onClick={() => dispatch(getMovies(input))}
            >
              {'Search Movies'}
            </button>
          </div>
        </form>
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
                    <div>
                      {renderPoster(movie)}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          }
        <div>
        {movieFetchErrors && <div>Sorry, let's try that again.</div>}
        </div>
      </div>  
    </div>
  )
}

export default AllMovieResults;

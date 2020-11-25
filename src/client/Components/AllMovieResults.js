import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../store/movieActions';
import { 
  movieErrorSelector, 
  movieResultsSelector,
  isLoadingSelector
} from '../store/movieSelectors';

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
    <div className="movieresults__container">
      <form>
        <div>
          <label>Enter a Movie Title here:</label>
          <input type="text" onChange={handleInputChange} />
        </div>
        <div>
          <button type='submit' onClick={() => dispatch(getMovies(input))}>Get Movie</button>
        </div>
      </form>
      <div>
        {hasResults && movieResults.map((movie) => (
          <div key={movie.id}>
            <div>
              {movie.title}
            </div>
            <div>
              {movie.poster_path ?
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
              :
              <div style={{width: 500, height: 200, backgroundColor: 'blueviolet'}}></div> }
            </div>
            <Link to={`/movie/${movie.id}`}>
              <button>get details</button>
            </Link>
          </div>
        ))}
        {movieFetchErrors}
      </div>
    </div>
  )
}

export default AllMovieResults;


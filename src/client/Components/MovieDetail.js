import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingSelector, movieDetailSelector, ratingFromDataBaseSelector } from '../store/movieSelectors';
import { getMovieDetail, getRating, thumbsUp, thumbsDown } from '../store/movieActions';
import { justYear } from '../utils/dateUtils';
import thumbsUpImage from '../images/ThumbsUp.jpg';
import thumbsDownImage from '../images/ThumbsDown.jpg';

const renderPoster = (movie) => {
  return ( movie.poster_path ?
    <img className='movie-detail__poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
    :
    <div className='movie-detail__poster__default'>
      <div>{movie.title}</div>
    </div> 
  )
}

const renderRatings = (ratingFromDataBase) => { 
  if (!ratingFromDataBase) {
    return (<div> No one around here has voted on this movie yet, go ahead and be the first.</div>);
  }
  const { thumbsUp, thumbsDown } = ratingFromDataBase;
  return (
    <div>
      {`thumbs up: ${thumbsUp} 
      | thumbs down: ${thumbsDown}`}
    </div> 
  );
}

const MovieDetail = (props) => {
  const { match: { params: { id }}} = props;
  const dispatch = useDispatch();
  const ratingFromDataBase = useSelector(ratingFromDataBaseSelector)
  const selectedMovie = useSelector(movieDetailSelector) 
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(getMovieDetail(id));
    dispatch(getRating(id))
  }, []); // empty [] will only run callback on mount. 

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="movie-detail__container">
      <div>
        {renderPoster(selectedMovie)}
      </div>
      <div className='__text-container'>
        <div>{`Title: ${selectedMovie.title}`}</div>
        <div> {`Director: ${selectedMovie.director}`}</div>
        {selectedMovie.release_date && <div> {`Released: ${justYear(selectedMovie.release_date)}`}</div>}
        <div>{` Description: ${selectedMovie.overview}`}</div>
        <div> 
          {renderRatings(ratingFromDataBase)}
        </div> 
        <div className='__button__container'>
          <div> 
            <button
            className='__button __thumbs'
            onClick={() => dispatch(thumbsUp(selectedMovie.id))}
            >
              <img className='__thumbs-image' src={thumbsUpImage} alt='up'/>
            </button>
          </div> 
          <div> 
            <button
            className='__button __thumbs'
            onClick={() => dispatch(thumbsDown(selectedMovie.id))}
            >
            <img className='__thumbs-image' src={thumbsDownImage} alt='down'/>
            </button>
          </div> 
        </div>
      </div>
    </div>
  )
};

export default MovieDetail;

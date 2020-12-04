import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { isLoadingSelector, movieDetailSelector, ratingFromDataBaseSelector } from '../store/movieSelectors';
import { getMovieDetail, getRating, thumbsUp, thumbsDown } from '../store/movieActions';
import { justYear } from '../utils/dateUtils';
import thumbsUpImage from '../images/ThumbsUp.png';
import thumbsDownImage from '../images/ThumbsDown.png';

const renderPoster = (movie) => {
  return ( movie.poster_path ?
    <img className='movie-detail__poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
    :
    <div className='detail-poster__default'>
      <div>{movie.title}</div>
      <div>{'No image available'}</div> 
    </div> 
  )
}

const renderRatings = (ratingFromDataBase) => { 
  if (!ratingFromDataBase) {
    return (<div className='ratings-container rating-text'>{'No one around here has voted on this movie yet, go ahead and be the first.'}</div>);
  }
  const { thumbsUp, thumbsDown } = ratingFromDataBase;
  return (
    <div className='ratings-container'>
      <span className='rating-text'> {`Thumbs Up: ${thumbsUp}`}</span>
      <span className='__symbol'>{'❖'}</span>
      <span className='rating-text'>{`Thumbs Down: ${thumbsDown}`}</span>
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
    return (
      <div className='loading-text__container'>
        <div className='loading-text'>{'Loading...'}</div>
      </div>
    )
  }

  return (
    <div className="movie-detail__container">
      <div className='poster-container'>
        {renderPoster(selectedMovie)}
      </div>
      <div className='__text-container'>
        <div className='movie-title-detail'>{`${selectedMovie.title}`}</div>
        <div className='movie-details'>{`Director: ${selectedMovie.director}`}</div>
        {selectedMovie.release_date && 
        <div className='movie-details'> {`Released: ${justYear(selectedMovie.release_date)}`}</div>}
        <div className='movie-details'>{` Description: ${selectedMovie.overview}`}</div>
        <div> 
          {renderRatings(ratingFromDataBase)}
        </div> 
        <div className='thumbs-container'>
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
        <div className='back-button__container'> 
          <div>
            <Link to='/'>
              <button
              className='__button'
              >
              {'Back to Search'}
              </button>
            </Link>
          </div>
        </div> 
      </div>
    </div>
  )
};

export default MovieDetail;

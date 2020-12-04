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
    <div className='movie-detail__poster__default'>
      <div>{movie.title}</div>
      <div>{'No image available'}</div> 
    </div> 
  )
}

const renderRatings = (ratingFromDataBase) => { 
  if (!ratingFromDataBase) {
    return (<div className='ratings__container'> <div className='rating-text'>{'No one around here has voted on this movie yet, go ahead and be the first.'}</div></div>);
  }
  const { thumbsUp, thumbsDown } = ratingFromDataBase;
  return (
    <div className='ratings__container'>
      <span className='ratings__text'> {`Thumbs Up: ${thumbsUp}`}</span>
      <span className='ratings__symbol'>{'❖'}</span>
      <span className='ratings__text'>{`Thumbs Down: ${thumbsDown}`}</span>
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
    // eslint-disable-next-line
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
      <div className='movie-detail__poster__container'>
        {renderPoster(selectedMovie)}
      </div>
      <div className='movie-detail__text__container'>
        <div className='movie-detail__title'>{`${selectedMovie.title}`}</div>
        <div className='movie-detail__text'>{`Director: ${selectedMovie.director}`}</div>
        {selectedMovie.release_date && 
        <div className='movie-detail__text'> {`Released: ${justYear(selectedMovie.release_date)}`}</div>}
        <div className='movie-detail__text'>{` Description: ${selectedMovie.overview}`}</div>
        <div> 
          {renderRatings(ratingFromDataBase)}
        </div> 
        <div className='thumbs__container'>
          <div> 
            <button
            className='search__button thumbs__button'
            onClick={() => dispatch(thumbsUp(selectedMovie.id))}
            >
              <img className='thumbs-image' src={thumbsUpImage} alt='up'/>
            </button>
          </div> 
          <div> 
            <button
            className='search__button thumbs__button'
            onClick={() => dispatch(thumbsDown(selectedMovie.id))}
            >
            <img className='thumbs-image' src={thumbsDownImage} alt='down'/>
            </button>
          </div> 
        </div>
        <div className='back-button__container'> 
          <div>
            <Link to='/'>
              <button
              className='search__button'
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

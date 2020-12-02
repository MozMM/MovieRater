import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingSelector, movieDetailSelector, ratingFromDataBaseSelector } from '../store/movieSelectors';
import { getMovieDetail, getRating, thumbsUp, thumbsDown } from '../store/movieActions';
import { justYear } from '../utils/dateUtils';
import thumbsUpImage from '../images/ThumbsUp.jpg';
import thumbsDownImage from '../images/ThumbsDown.jpg';

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
    <div>
      <div className="movie-detail">
        {selectedMovie.poster_path && 
          <img 
            src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} 
            alt={selectedMovie.title}
          />}
        <div>{`Title: ${selectedMovie.title}`}</div>
        <div> {`Director: ${selectedMovie.director}`}</div>
        {selectedMovie.release_date && <div> {`Released: ${justYear(selectedMovie.release_date)}`}</div>}
        <div>{` Description: ${selectedMovie.overview}`}</div>
        <div> 
          {renderRatings(ratingFromDataBase)}
        </div> 
        <div> 
          <button
          className='thumbs'
          onClick={() => dispatch(thumbsUp(selectedMovie.id))}
          >
            <img src={thumbsUpImage} alt='up'/>
          </button>
        </div> 
        <div> 
          <button
          className='thumbs'
          onClick={() => dispatch(thumbsDown(selectedMovie.id))}
          >
          <img src={thumbsDownImage} alt='down'/>
          </button>
        </div> 
      </div>
    </div>
  )
};

export default MovieDetail;

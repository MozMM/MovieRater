import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingSelector, movieDetailSelector } from '../store/movieSelectors'
import { getMovieDetail, thumbsUp } from '../store/movieActions'
import { justYear } from '../utils/dateFormat'



const MovieDetail = (props) => {
  // pull movie id off match.params from BrowserRouter
  // this.props.match.params.id
  const { match: { params: { id }}} = props;
  const dispatch = useDispatch();
 
  const selectedMovie = useSelector(movieDetailSelector) 
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []); // pass it state variables to watch, empty [] will only run callback on mount. 

  
  console.log('@ MovieDetail component before return', selectedMovie)
  return (
    <div>
      {isLoading ? 
        <div> 
          Loading...
        </div>
        :
        <div className="movie-detail">
          
          {selectedMovie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title}/>}
          <div> Title: &nbsp; {selectedMovie.title}</div>
          <div> Director: &nbsp; {selectedMovie.director}</div>
          {selectedMovie.release_date && <div> Released: &nbsp; {justYear(selectedMovie.release_date)}</div>}
          <div> Description: &nbsp; {selectedMovie.overview}</div>
          <div> 
            {selectedMovie.ratingsFromDataBase ? 
              <div>
                &nbsp; thumbs up: &nbsp;{selectedMovie.ratingsFromDataBase.thumbsUp} &nbsp;
                | &nbsp; thumbs down: &nbsp;{selectedMovie.ratingsFromDataBase.thumbsDown}
              </div> 
            :
            <div> No one around here has voted on this movie yet, go ahead and be the first.</div> 
            }
          </div> 
          <div> 
            <button
            onClick={() => dispatch(thumbsUp(selectedMovie.id))}
            >
              thumbs up!
            </button>
          </div> 
          <div> 
            <button>
              thumbs down!
            </button>
          </div> 
        </div>
      }
    </div>
  )
};

export default MovieDetail;

// Curried for using data from movie Obj array already on state: 
  // const selectedMovie = useSelector((state) => {
  //   const movies = movieResultsSelector(state);
  //   return movies.filter(movie => movie.id === Number(id))[0];
  // })
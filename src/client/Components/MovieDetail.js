import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingSelector, movieDetailSelector } from '../store/movieSelectors'
import { getMovieDetail } from '../store/movieActions'



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
          
          <img src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title}/>
          <div> Title: &nbsp; {selectedMovie.title}</div>
          <div> Director: &nbsp; {selectedMovie.director}</div>
          {selectedMovie.release_date ? 
            <div> Released: &nbsp; {selectedMovie.release_date.slice(0,4)}</div>
            :
            <div></div>
          }
          <div> Description: &nbsp; {selectedMovie.overview}</div>
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
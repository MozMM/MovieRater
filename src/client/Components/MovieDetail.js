import { useSelector } from 'react-redux';
import { movieResultsSelector } from '../store/movieSelectors'



const MovieDetail = (props) => {
  // pull movie id off match.params from BrowserRouter
  // this.props.match.params.id
  const { match: { params: { id }}} = props;
  const selectedMovie = useSelector((state) => {
    const movies = movieResultsSelector(state);
    console.log(movies)
    return movies.filter(movie => movie.id === Number(id))[0];
  })
  console.log(selectedMovie)
  return (
    <div className="movie-detail">
      <h1>{selectedMovie.name}</h1>
    </div>
  )
};

export default MovieDetail;


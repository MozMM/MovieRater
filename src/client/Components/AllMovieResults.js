import React  from 'react'
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

  if (isLoading) {
    return (<div>Loading...</div>);
  }

  const handleGetMovieClick = (evt) => {
    // send params as function args here
    dispatch(getMovies());
  }
  console.log('---> ', hasResults)
  return (
    <div className="movieresults__container">
      <button onClick={handleGetMovieClick}>Get Movie</button>
      {hasResults && movieResults.map(movie => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <button >{movie.name}</button>
          </Link>
        </div>
      ))}
      {movieFetchErrors}
    </div>
  )
}

export default AllMovieResults;

// class AllMovieResults extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1 style={{background:'blue' }}> Hello World </h1>
//       </div>
//     )
//   }
// }

// const mapState = state => {
//   return {
    
//   }
// }

// const mapDispatch = dispatch => ({
//   //getSingleProperty: id => dispatch(fetchProperty(id))
// })

// export default connect(mapState, mapDispatch)(AllMovieResults)

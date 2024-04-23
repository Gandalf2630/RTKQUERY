import { useFetchHighestRatedMoviesQuery } from "../store";
import MovieCard from "./MovieCards"

function HighestRatedMovies() {                                  
  const {data, error, isFetching } = useFetchHighestRatedMoviesQuery();   
  console.log(data)

let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results.map((movie) => {
      return <MovieCard key={movie.id} movie={movie}></MovieCard>
    }).filter(movie => movie.poster_path !== null && movie.vote_average !== 0)
  }
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}
export default HighestRatedMovies;
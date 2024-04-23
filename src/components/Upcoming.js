import { useFetchUpcomingQuery } from "../store";
import MovieCard from "./MovieCards"


function Upcoming() {   
    const date = '2024-06-01'                              
    const {data, error, isFetching } = useFetchUpcomingQuery(date);
    console.log(data, isFetching, error);   
   
  let content;
    if (isFetching) {
      content = <div>Loading;</div>
    } else if (error) {
      content = <div>Error loading upcoming movies.</div>;
    } else {
      content = data.results.map((movie) => {
        return <MovieCard key={movie.id} movie={movie}></MovieCard>
      })
    }
      return (
      <div className="row row-cols-3 row-cols-md-2 m-4">
        {content}
      </div>
    );
  }

  export default Upcoming
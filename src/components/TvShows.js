import { useFetchTvShowsQuery } from "../store";
import MovieCard from "./MovieCards"
import TvCard from "./TvCards";

function TvShows() {                                  
    const {data, error, isFetching } = useFetchTvShowsQuery();   
  
  let content;
    if (isFetching) {
      content = <div>Loading;</div>
    } else if (error) {
      content = <div>Error loading Tv Shows.</div>;
    } else {
      content = data.results.map((tv) => {
        return <TvCard key={tv.id} tv={tv}></TvCard>
      })
    }
      return (
      <div className="row row-cols-3 row-cols-md-2 m-4">
        {content}
      </div>
    );
  }

  export default TvShows
import { useFetchTvShowsUpcomingQuery } from "../store";
import TvCard from "./TvCards";

function TvShowsUpcoming() {           
  const {data, error, isFetching } = useFetchTvShowsUpcomingQuery();
  console.log(data)

let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results.map((tv) => {
      return <TvCard key={tv.id} tv={tv}></TvCard>
    }).filter(tv => tv.poster_path !== null && tv.vote_average !== 0)
  }
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}
export default TvShowsUpcoming;
import { Routes, Route, Link } from 'react-router-dom';
import HighestRatedMovieList from "./components/HighestRatedMovies";
//import PopularMoviesList from "./components/PopularmovieLis";
import PopularMoviesList from './components/PopularmovieList';
import MovieImg from './Assets/movie_black2.jpg';
import Home from './components/Home';
import SearchMovie from './components/SearchMovie';
import SearchedMovie from './components/SearchedMovie';
import TvShows from './components/TvShows';
import Upcoming from './components/Upcoming';
import ActionMovies from './components/TvShowsUpcoming';
import TvShowsUpcoming from './components/TvShowsUpcoming';
import RandomQuoteGenerator from './components/RandomQuotes';
//Link bruges til at lave navigationslinks i din applikation. Det giver en mere dynamisk navigation uden at genindlæse hele siden
function App() {
  return (
    <div>
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/popular' className="nav-item nav-link">Popular</Link>
            <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
            <Link to='/tv-shows' className='nav-item nav-link'>Tv Shows</Link>
            <Link to='/upcoming' className='nav-item nav-link'>Upcoming Movies</Link>
            <Link to='/tvshowsupcoming' className='nav-item nav-link'>Upcoming Shows  </Link>
            <Link to='/randomquotes' className='nav-item nav-link'>Quotes</Link>
            <SearchMovie />
          </nav>
        </div>
          <span className='h1'>React Moviefinder <img className="rounded movie_img m-3" src={MovieImg} width="75" height="75"/></span>
      <span className="d-flex justify-content-between p-0">This small App demonstrates React, Redux-Toolkit, RTK Query and React-Router</span>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/popular' element={<PopularMoviesList/>} />    
            <Route path='/highest-rated' element={<HighestRatedMovieList/>} />
            <Route path='/tv-shows' element={<TvShows/>} />
            <Route path='/searchedMovie' element={<SearchedMovie/>} />
            <Route path='/upcoming' element={<Upcoming/>} />
            <Route path='/tvshowsupcoming' element={<TvShowsUpcoming/>} />
            <Route path='/randomquotes' element={<RandomQuoteGenerator/>} />
        </Routes>
    </div>
  );
  //Routes er hvor du definerer routes, der matcher URL'er med bestemte komponenter.
}
export default App;
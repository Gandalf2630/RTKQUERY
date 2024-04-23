import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesApi } from './apis/moviesApi';
import { changeSearchTerm, searchMovieSliceReducer } from './slices/searchMovieSlice'
import { tvShowsApi } from './apis/tvApi';


export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, //dette er en mere sikker måde, ungår "typo's"
    searchMovie: searchMovieSliceReducer, 
    [tvShowsApi.reducerPath]: tvShowsApi.reducer 
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(moviesApi.middleware).concat(tvShowsApi.middleware);
  }
});

setupListeners(store.dispatch);


export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingQuery} from './apis/moviesApi';
export { changeSearchTerm }
export { useFetchTvShowsQuery, useFetchTvShowsUpcomingQuery } from './apis/tvApi';

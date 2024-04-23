import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: '7fcb25ebcc6bcac26c9fb7e127a00d86'
            },
            method: 'GET',
          };
        },
      }),
      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '7fcb25ebcc6bcac26c9fb7e127a00d86'
            },
            method: 'GET',
          };
        },
      }),
      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: '7fcb25ebcc6bcac26c9fb7e127a00d86'
            },
            method: 'GET',
          };
        },
      }),  
      fetchUpcoming: builder.query({
        query: (date) => {
          return {
            url: 'discover/movie',
            params: {
              'primary_release_date.gte': date,
              api_key: '7fcb25ebcc6bcac26c9fb7e127a00d86'
            },
            method: 'GET',
          }
        }
      }),

    };
  },
});

export const {useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingQuery, useFetchActionMoviesQuery} = moviesApi;
export { moviesApi };

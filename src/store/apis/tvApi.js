import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const tvShowsApi = createApi({
    reducerPath: 'tv',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://api.themoviedb.org/3/'
    }),
    endpoints(builder) {
      return {
        fetchTvShows: builder.query({
          query: () => {
            return {
              url: 'discover/tv',
              params: {
                api_key: '7fcb25ebcc6bcac26c9fb7e127a00d86'
              },
              method: 'GET',
            };
          },
        }),   
        fetchTvShowsUpcoming: builder.query({
          query: () => {
            return {
              url: 'discover/tv',
              param: {
                api_key:'7fcb25ebcc6bcac26c9fb7e127a00d86',
              },
              method: 'GET',
            }
          }
        })
      };
    },
  });
   
  export const {useFetchTvShowsQuery, useFetchTvShowsUpcomingQuery} = tvShowsApi;
export { tvShowsApi};
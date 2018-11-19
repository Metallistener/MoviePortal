import { IMoviesParams } from 'src/interfaces/params';
import { IPopularMovies } from 'src/interfaces/popular';

export const load_popular_movies = (params: IMoviesParams) => ({
  type: 'LOAD_POPULAR_MOVIES',
  params
});

export const loading_popular_movies_success = (payload: IPopularMovies) => ({ 
  type: 'LOAD_POPULAR_MOVIE_SUCCESS', 
  payload 
});
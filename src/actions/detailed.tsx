import { IPopularMovie, IPopularMovies } from 'src/interfaces/popular';
import { IMovieParams } from 'src/interfaces/params';

export const load_movie_details = (params: IMovieParams) => ({
    type: 'LOAD_MOVIE_DETAILS',
    params
});

export const loading_movie_details_success = (payload: IPopularMovie) => ({
    type: 'LOAD_MOVIE_DETAILS_SUCCESS',
    payload
});

export const load_recommended_movies = (params: IMovieParams) => ({
    type: 'LOAD_RECOMMENDED_MOVIES',
    params
});

export const loading_recommended_movies_success = (payload: IPopularMovies) => ({
    type: 'LOAD_RECOMMENDED_MOVIES_SUCCESS',
    payload
});

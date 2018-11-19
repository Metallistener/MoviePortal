import { IPopularMovie, IPopularMovies } from './popular';
import { IGenres } from './genres';

export interface IStateToProps {
    load_movie_details: IPopularMovie,
    load_genres: IGenres,
    load_recommended_movies: IPopularMovies
}
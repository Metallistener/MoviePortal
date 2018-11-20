import { IGenres } from './genres';
import { IPopularMovies } from './popular';

export interface IStateToProps {
    load_found_movies: IPopularMovies,
    load_genres: IGenres
}
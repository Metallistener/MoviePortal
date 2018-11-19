import { IGenres } from './genres';

export interface IPopularMovies {
    page: number,
    results: Array<{}>,
    total_results: number
}

export interface IPopularMovie {
    id: number, 
    poster_path: string, 
    title: string, 
    genre_ids: Array<number>,
    genres: Array<{id: number, name: string}>,
    tagline: string,
    overview: string,
    production_countries: Array<{id: number, name: string}>
}

export interface IStateToProps {
    load_popular_movies: IPopularMovies,
    load_genres: IGenres
}
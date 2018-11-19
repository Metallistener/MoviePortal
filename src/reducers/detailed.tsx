import { IPopularMovies, IPopularMovie } from 'src/interfaces/popular';

interface IAction {
    type: string,
    payload: IPopularMovies | IPopularMovie
}
  
const detailsInitialState = {
    id: 0, 
    poster_path: '', 
    title: '', 
    genre_ids: [],
    genres: [],
    tagline: '',
    overview: '',
    production_countries: []
}

const recommendedInitialState = {
    page: 0,
    results: [],
    total_results: 0
} 

export const load_movie_details = (state: IPopularMovie = detailsInitialState, action: IAction) => {
    switch (action.type) {
      case 'LOAD_MOVIE_DETAILS_SUCCESS':
        return action.payload
    }

    return state;
}

export const load_recommended_movies = (state: IPopularMovies = recommendedInitialState, action: IAction) => {
    switch (action.type) {
      case 'LOAD_RECOMMENDED_MOVIES_SUCCESS':
        return action.payload
    }
    return state;
}


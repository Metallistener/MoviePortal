import { IPopularMovies } from 'src/interfaces/popular';

interface IAction {
  type: string,
  payload: IPopularMovies
}

const initialState = {
  page: 0,
  results: [],
  total_results: 0
}

export const load_popular_movies = (state: IPopularMovies = initialState, action: IAction): IPopularMovies => {
  switch (action.type) {
    case 'LOAD_POPULAR_MOVIE_SUCCESS':
      return {
        ...state,
        page: action.payload.page,
        results: action.payload.results,
        total_results: action.payload.total_results
      }
  }
  return state;
}
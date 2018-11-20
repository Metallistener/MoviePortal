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

export const load_found_movies = (state: IPopularMovies = initialState, action: IAction): IPopularMovies => {
  switch (action.type) {
    case 'LOAD_FOUND_MOVIES_SUCCESS':
      return {
        ...state,
        page: action.payload.page ? action.payload.page : state.page,
        results: action.payload.results ? action.payload.results : state.results,
        total_results: action.payload.total_results ? action.payload.total_results : state.total_results 
      }
    default:
      return state
  }
}
    
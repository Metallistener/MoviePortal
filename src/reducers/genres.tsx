import { IGenres } from 'src/interfaces/genres';

interface IAction {
    type: string,
    payload: IGenres
}

export const load_genres = (state = [], action: IAction) => {
    switch (action.type) {
      case 'LOAD_GENRES_SUCCESS':
        return action.payload
    }
    return state;
}
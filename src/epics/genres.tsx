import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { getGenres } from '../services/http/movies';
import { loading_genres_success } from '../actions/genres';

export const loadGenresEpic = (action$: any) => action$.pipe(
    ofType('LOAD_GENRES'),
    mergeMap(() => 
        getGenres()
        .then((response: any) => loading_genres_success(response.data.genres))
        .catch((error: any) => console.log('error'))
    )
);
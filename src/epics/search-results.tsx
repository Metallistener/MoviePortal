import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { searchMovies } from '../services/http/movies';
import { loading_found_movies_success } from '../actions/search-results';
import { ICommonParams } from 'src/interfaces/params';

export const loadFoundMoviesEpic = (action$: any) => action$.pipe(
    ofType('LOAD_FOUND_MOVIES'),
    mergeMap((action: ICommonParams) => 
        searchMovies(action.params)
        .then((response: any) => loading_found_movies_success(response.data))
        .catch((error: any) => console.log('error'))
    )
);
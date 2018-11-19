import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { getMovies } from '../services/http/movies';
import { loading_popular_movies_success } from '../actions/popular';
import { ICommonParams } from 'src/interfaces/params';

export const loadPopularMoviesEpic = (action$: any) => action$.pipe(
    ofType('LOAD_POPULAR_MOVIES'),
    mergeMap((action: ICommonParams) => 
        getMovies(action.params)
        .then((response: any) => loading_popular_movies_success(response.data))
        .catch((error: any) => console.log('error'))
    )
);
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { getMovie, getRecommendationMovies } from '../services/http/movies';
import { loading_movie_details_success, loading_recommended_movies_success } from '../actions/detailed';
import { ICommonParams } from 'src/interfaces/params';

export const loadMovieDetailsEpic = (action$: any) => action$.pipe(
    ofType('LOAD_MOVIE_DETAILS'),
    mergeMap((action: ICommonParams) => 
        getMovie(action.params)
        .then((response: any) => loading_movie_details_success(response.data))
        .catch((error: any) => console.log('error'))
    )
);

export const loadRecommendedMoviesEpic = (action$: any) => action$.pipe(
    ofType('LOAD_RECOMMENDED_MOVIES'),
    mergeMap((action: ICommonParams) => 
        getRecommendationMovies(action.params)
        .then((response: any) => loading_recommended_movies_success(response.data))
        .catch((error: any) => console.log('error'))
    )
);
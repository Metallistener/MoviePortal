export interface IMoviesParams {
    page?: number,
    query?: string
}

export interface IMovieParams {
    id_movie: number
}

export interface ICommonParams {
    type: string,
    params: undefined | IMoviesParams
}
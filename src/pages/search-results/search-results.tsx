import * as React from 'react';
import './search-results.css';
import Navigation from '../../components/navigation/navigation';
import Search from '../../components/search/search';
import Pagination from "react-js-pagination";
import { load_found_movies } from '../../actions/search-results';
import { load_genres } from '../../actions/genres';
import { IMoviesParams } from 'src/interfaces/params';
import { IGenres } from 'src/interfaces/genres';
import { IPopularMovies, IPopularMovie } from 'src/interfaces/popular';
import { IStateToProps } from 'src/interfaces/search-results';

var connect = require("react-redux").connect;

interface Props {
    match: any,
    history: any,
    LoadFoundMovies: (params: IMoviesParams) => void,
    found_movies_data: IPopularMovies
    LoadGenres: () => void,
    genres_data: Array<IGenres>
}

interface State {
    query: string,
    activePage: number
}

class SearchResults extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            query: '',
            activePage: 1
        }

        this.handlePageChange = this.handlePageChange.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.setGenre = this.setGenre.bind(this);
        this.renderMovies = this.renderMovies.bind(this);
    }

    componentWillMount() {
        this.getQuery();
    }

    // получает значение передаваемое из формы поиска фильмов
    getQuery() {
        this.setState({
            query: this.props.match.params.movie_name
        }, () => {
            const params = {
                page: this.state.activePage,
                query: this.state.query
            }

            this.getMovies(params);
            this.getGenres();
        });
    }

    // получаем список фильмов
    getMovies(params: IMoviesParams) {
        this.props.LoadFoundMovies(params)
    }

    // получаем список всех жанров
    getGenres() {
        this.props.LoadGenres();
    }

    // возвращает жанр в строковом виде
    setGenre(genre_ids: Array<number>) {
        const genres_name = [];

        for(const item of this.props.genres_data) {
            for (const item2 of genre_ids) {
                if (item.id === item2) {
                    genres_name.push(item.name);
                    continue;
                }
            }
        }

        return genres_name;
    }

    // срабатывает при отправке формы поиска и возвращает новый результат
    searchChange(value: string) {
        this.props.history.replace({
            pathname: '/search-results/' + value
        });

        this.setState({
            query: value
        }, () => {
            const params = {
                page: this.state.activePage,
                query: this.state.query
            }
    
            this.getMovies(params);
        })
    }

    // слушает изменение номера страницы пагинации
    handlePageChange(pageNumber: number) {
        window.scrollTo(0,0);
        const params = {
            page: pageNumber,
            query: this.state.query
        }
        this.props.LoadFoundMovies(params);
    }

    renderMovies() {
        return (
            Object.keys(this.props.found_movies_data).length > 0 ? 
            this.props.found_movies_data.results.map((movie: IPopularMovie, index) => {
                return (
                    <div key={index} className="results__movie movie">
                        <a className="movie__link" onClick={() => this.props.history.push({
                            pathname: '/detailed/' + movie.id
                        })}>
                            <div className="movie__poster-box">
                                <img className="movie__poster" src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
                            </div>
                            <h4 className="movie__title">{movie.title}</h4>
                            <div className="movie__genres-box">
                                <strong className="movie__genre-title">Жанр:</strong> 
                                {
                                    this.setGenre(movie.genre_ids).map((genre, index) => {
                                        return (
                                            <span key={index} className="movie__genre-name">{genre},</span>
                                        )
                                    })
                                }
                            </div>
                        </a>
                    </div>
                )
            }) : <div className="results__empty">
                    <img src={require('../../assets/images/search.png')} />
                    <h3>Ничего не найдено</h3>
                </div>
        )
    }

    render() {
        return (
            <div className="results">
                <Navigation history={this.props.history} />
                <Search onChange={(value) => this.searchChange(value)} history={this.props.history} />
                <div className="results__main">
                    <div className="results__form"></div>
                    <div className="results__movies">
                        <h1 className="results__title">
                            {/* <FontAwesome
                                name='search'
                                color='#f39061'
                                size={30}
                                style={{
                                    position: 'absolute',
                                    left: 20
                                }}
                            /> */}
                            Results
                        </h1>
                        {   
                            this.renderMovies()
                        }
                        <div className="results__pagination-box">
                            {
                                Object.keys(this.props.found_movies_data).length > 0 ? <Pagination
                                    activePage={this.props.found_movies_data.page}
                                    itemsCountPerPage={20}
                                    activeLinkClass="active_page"
                                    linkClass="page_link"
                                    totalItemsCount={this.props.found_movies_data.total_results < 1000 ? this.props.found_movies_data.total_results : 1000}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChange}
                                /> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state: IStateToProps) {
    return {
        found_movies_data: state.load_found_movies,
        genres_data: state.load_genres
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        LoadFoundMovies: (params: IMoviesParams) => dispatch(load_found_movies(params)),
        LoadGenres: () => dispatch(load_genres())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
import React, {Component} from 'react'
import MoviesList from "../../MoviesList/MoviesList";
import Preloader from "../../Preloader/Preloader";
import Search from "../../Search/Search";
import styles from './Main.module.css'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
    state = {
        movies: [],
        isLoading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, isLoading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({isLoading: true})
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== 'all' ? `&type=${type}` : ''}`
        )
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, isLoading: false}))
    }

    render() {
        return (
            <main className={`container + ${styles.content}`}>
                <Search searchMovies={this.searchMovies}/>
                {this.state.isLoading ? (
                    <Preloader/>):
                    (<MoviesList movies={this.state.movies}/>)
                }
            </main>
        );

    }
}


export default Main;

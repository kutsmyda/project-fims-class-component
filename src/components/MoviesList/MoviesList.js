
import MoviesItem from "../MoviesItem/MoviesItem";
import styles from './MoviesList.module.css'

const MoviesList = (props)=>{
    const {movies=[]} = props
    console.log(movies)
    return (
        <div className={styles.movies}>
            {movies.length ? movies.map(movie=> <MoviesItem key={movie.imdbID} {...movie}/>) : <h3>Page not found :( </h3>}

        </div>

    );

}

export default MoviesList;

import styles from './MoviesItem.module.css'

const MoviesItem = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props
    return (
        <div className={`card ${styles.movie}`} id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === "N/A" ?
                        <img className="activator"
                             src={`https://via.placeholder.com/300x430.png?text=${title}`}/> :
                        <img className="activator" src={poster}/>
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{year}</p>
                <span className="right">{type}</span>
            </div>
        </div>
    )

        ;

}

export default MoviesItem;

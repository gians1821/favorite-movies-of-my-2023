import './Movie.css'

function Movie( {name, imgUrl} ) {
    return (
        <li className="movie">
            <img className="movie-img" src={imgUrl} alt={`${name.toLowerCase()}-poster`} />
            <p className="movie-title">{name.toUpperCase()}</p>
        </li>
    )
}

export { Movie }
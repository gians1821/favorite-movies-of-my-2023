function Movie( {name, imgUrl} ) {
    return (
        <li className="movie">
            <img className="img" src={imgUrl} alt={`${name.toLowerCase()}-poster`} />
            <p>{name.toUpperCase()}</p>
        </li>
    )
}

export { Movie }
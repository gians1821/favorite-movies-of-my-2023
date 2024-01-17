import { Movie } from './Movie.jsx';
import './Main.css'

const data = [
    {
        index: 0,
        name: 'scarface',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg'
    },
    {
        index: 1,
        name: 'spiderman atsp',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg'
    },
    {
        index: 2,
        name: 'scream',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_.jpg'
    },
    {
        index: 3,
        name: 'aftersun',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTM3OTU0ZGUtNzYwYy00ODU3LWI3YjgtOWZlODliMmRiMWEzXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_FMjpg_UX1000_.jpg'
    },
    {
        index: 4,
        name: 'district 9',
        imgUrl: ''
    },
    {
        index: 5,
        name: 'the social network',
        imgUrl: ''
    },
    {
        index: 6,
        name: 'talk to me',
        imgUrl: ''
    },
    {
        index: 7,
        name: 'clueless',
        imgUrl: ''
    },
    {
        index: 8,
        name: 'the nice guys',
        imgUrl: ''
    },
    {
        index: 9,
        name: 'bullet train',
        imgUrl: ''
    }
]

function Main() {
    
    setTimeout(() => {
        const $carruselMovies = document.querySelector('.carrusel-movies')
        const $puntos = document.querySelectorAll('.punto')
        $puntos.forEach( (punto, i) => {
            punto.addEventListener('click', () => {
                const posicion = i;
                const operacion = posicion * 10;
                $carruselMovies.style.transform = `translateX(-${operacion}%)`;
                console.log(`transform: translateX(-${operacion}%);`)
                $puntos.forEach( (punto) => {
                    punto.classList.remove('punto_active')
                })
                punto.classList.add('punto_active')  
            })
        })
    }, 500)

    return (
        <main className="Main">
            <h2 className="main-title">PELÍCULAS</h2>
            <section className='main-carrusel'>
                <ol className='carrusel-movies'>
                    {data.map((pelicula) => (
                        <Movie key={pelicula.index} name={pelicula.name} imgUrl={pelicula.imgUrl} />
                    ))}
                </ol>
                <ul className='carrusel-puntos'>
                    <li className='punto punto_active'></li>
                    <li className='punto'></li>
                    <li className='punto'></li>
                    <li className='punto'></li>
                    <li className='punto'></li>
                    <li className='punto'></li>
                    <li className='punto'></li>
                    <li className='punto'></li>
                    <li className='punto'></li>
                    <li className='punto'></li>
                </ul>
            </section>
            

            <h2 className="main-title">SERIES</h2>
            <ol>
                <li>MR ROBOT</li>
                <li>SUCCESSION</li> 
                <li>THE OFFICE</li>
                <li>PEAKY BLINDERS</li>
                <li>LEGEND OF KORRA</li>
            </ol>
        </main>
    );
}

export { Main }
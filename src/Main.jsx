import { SwiperMovies } from './SwiperMovies.jsx';
import './Main.css'

function Main() {
    
    return (
        <main className="Main">
            <h2 className="main-title">PELÍCULAS</h2>
            <section className='main-carrusel'>
                <SwiperMovies />
            </section>
            

            <h2 className="main-title">SERIES</h2>
            <section>
                <SwiperMovies />
            </section>
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
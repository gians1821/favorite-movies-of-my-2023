import { SwiperContainer } from './SwiperContainer.jsx';
import './Main.css'

const dataMovies = [
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
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMmFiMjBmYmMtZGY2NS00MmNkLWI3OWEtZDRkOWY3M2YwMzY5XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'
  },
  {
      index: 5,
      name: 'the social network',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg'
  },
  {
      index: 6,
      name: 'talk to me',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
  },
  {
      index: 7,
      name: 'clueless',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMzBmOGQ0NWItOTZjZC00ZDAxLTgyOTEtODJiYWQ2YWNiYWVjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg'
  },
  {
      index: 8,
      name: 'the nice guys',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BODNlNmU4MGItMzQwZi00NGQyLWEyZWItYjFkNmI0NWI4NjBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg'
  },
  {
      index: 9,
      name: 'bullet train',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'
  },
];
const dataSeries = [
  {
      index: 0,
      name: 'mr. robot',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BM2QyNDIzOGMtNThhNS00NmUwLWI0ZjUtZjdkN2I1OTRjZWQ3XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg'
  },
  {
      index: 1,
      name: 'succession',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BODY5YjA3ZDgtM2EwYy00ZGVmLWFhNWItMTMxMWRkMWFiOTlkXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg'
  },
  {
      index: 2,
      name: 'the office',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg'
  },
  {
      index: 3,
      name: 'peaky blinders',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_FMjpg_UX1000_.jpg'
  },
  {
      index: 4,
      name: 'legend of korra',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BYTZhNGY2ZDAtYWYxYy00YWNlLWI3NDUtNjBiM2NkMGVmODIxXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_FMjpg_UX1000_.jpg'
  },
];

function Main() {
    
    return (
        <main className="Main">
            <h2 className="main-title">PELÍCULAS</h2>
            <section className='main-carrusel'>
                <SwiperContainer data={dataMovies} />
            </section>
            

            <h2 className="main-title">SERIES</h2>
            <section>
                <SwiperContainer data={dataSeries} />
            </section>
        </main>
    );
}

export { Main }
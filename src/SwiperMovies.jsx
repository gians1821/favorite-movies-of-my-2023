import React from 'react';
import { Movie } from './Movie';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

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

function SwiperMovies() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide><Movie key={dataMovies[0].index} name={dataMovies[0].name} imgUrl={dataMovies[0].imgUrl} /></SwiperSlide>
        <SwiperSlide><Movie key={dataMovies[1].index} name={dataMovies[1].name} imgUrl={dataMovies[1].imgUrl} /></SwiperSlide>
        <SwiperSlide><Movie key={dataMovies[2].index} name={dataMovies[2].name} imgUrl={dataMovies[2].imgUrl} /></SwiperSlide>
        <SwiperSlide><Movie key={dataMovies[3].index} name={dataMovies[3].name} imgUrl={dataMovies[3].imgUrl} /></SwiperSlide>
        <SwiperSlide><Movie key={dataMovies[4].index} name={dataMovies[4].name} imgUrl={dataMovies[4].imgUrl} /></SwiperSlide>
        <SwiperSlide><Movie key={dataMovies[5].index} name={dataMovies[5].name} imgUrl={dataMovies[5].imgUrl} /></SwiperSlide>
        <SwiperSlide><Movie key={dataMovies[6].index} name={dataMovies[6].name} imgUrl={dataMovies[6].imgUrl} /></SwiperSlide>
        <SwiperSlide><Movie key={dataMovies[7].index} name={dataMovies[7].name} imgUrl={dataMovies[7].imgUrl} /></SwiperSlide>
        <SwiperSlide><Movie key={dataMovies[8].index} name={dataMovies[8].name} imgUrl={dataMovies[8].imgUrl} /></SwiperSlide>
        <SwiperSlide><Movie key={dataMovies[9].index} name={dataMovies[9].name} imgUrl={dataMovies[9].imgUrl} /></SwiperSlide>
      </Swiper>
    </>
  );
}

export { SwiperMovies } 
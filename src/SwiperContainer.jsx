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

function SwiperContainer( { data } ) {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {
          data.map((dato) => {
            return <SwiperSlide><Movie dato={dato.index} name={dato.name} imgUrl={dato.imgUrl} /></SwiperSlide>
          })
        }
      </Swiper>
    </>
  );
}

export { SwiperContainer } 
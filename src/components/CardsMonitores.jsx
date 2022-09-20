import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "./styles.css";
// import required modules

import { Pagination } from "swiper";

import '../styles/styles.slidercards.css';
import Titulo from "./Titulos";
import { Cards } from "./Cards";

export default function CardsMonitores() {
  return (
    <>
     <Titulo name = 'Monitores' />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="grupocard"
      >
        <SwiperSlide className='cards'> <Cards/> </SwiperSlide>
        <SwiperSlide className='cards'> <Cards/> </SwiperSlide>
        <SwiperSlide className='cards'> <Cards/> </SwiperSlide>
        <SwiperSlide className='cards'> <Cards/> </SwiperSlide>
        <SwiperSlide className='cards'> <Cards/> </SwiperSlide>
        <SwiperSlide className='cards'> <Cards/> </SwiperSlide>
        <SwiperSlide className='cards'> <Cards/> </SwiperSlide>
        <SwiperSlide className='cards'> <Cards/> </SwiperSlide>

      </Swiper>
    </>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "./styles.css";
// import required modules


import './styles.slidercards.css';
import Titulo from '../Titulo/Titulos'
import { Cards } from "../Cards/Cards";

export default function CardsProcessadores() {
  return (
    <>
     <Titulo name='Processadores' page="/processador"/>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          450: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
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
        // modules={[Pagination]}
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

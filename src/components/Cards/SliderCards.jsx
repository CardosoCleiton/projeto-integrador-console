import { Swiper, SwiperSlide } from "swiper/react";
import './styles.slidercards.css';
import Titulo from '../Titulo/Titulos'

const SliderCards = ({category, link, children}) => {

  return (
    <>
     <Titulo name={category} page={link}/>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          450: {
            slidesPerView: 2,
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

        {children.map(((card, index) => 
          <SwiperSlide className='cards' key={index}>{card}</SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}

export default SliderCards;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.slider.css";

// import { Children } from "react";
import BannerOne from "../BannerOne/BannerOne";

export default function Sliderhome({products}) {

  return (
    <>
       <Swiper
        modules={[Navigation, Pagination, A11y,Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{clickable: true,}}
        navigation={true}
        className="mySwiper" 
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        // centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >

        {products.map(product => {
          return(
            <SwiperSlide key={product.id}>
              <BannerOne product={product}/>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </>
  );
}

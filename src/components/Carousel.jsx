import React from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const Carousel = () => {
  return (
    <div className='row mt-5'>

         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        breakpoints={{

            350: {
                slidesPerView: 1,
            },
            420: {
                slidesPerView: 1,
                
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            925:{
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1568: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        
      </Swiper>
 
    </div>
  )
}

export default Carousel
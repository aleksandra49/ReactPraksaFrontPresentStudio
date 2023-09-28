import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './SwiperImagesComponent.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const SwiperImagesComponent = () => {

    return (
        <>
            <Swiper className='swiperBody'
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                //slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>

                <SwiperSlide><img className='swiper-image' src={require("../../images/prvaSlikaSwiper.png")} alt="swiper image1" /></SwiperSlide>
                <SwiperSlide><img className='swiper-image' src={require("../../images/drugaSlikaSwiper.png")} alt="swiper image2" /></SwiperSlide>
                <SwiperSlide><img className='swiper-image' src={require("../../images/Screenshot (811).png")} alt="swiper image3" /></SwiperSlide>
            </Swiper>

        </>
    );
}

export default SwiperImagesComponent

/*return (
  <div class="swiperBody">
      <swiper-container class="mySwiper" navigation="true" pagination="true" keyboard="true" mousewheel="true"
          css-mode="true">
          <swiper-slide class="slideSwiper"><img src="../../images/prvaSlikaSwiper.png" alt=""/></swiper-slide>
          <swiper-slide class="slideSwiper"><img src="../../images/drugaSlikaSwiper.png" alt=""/></swiper-slide>
          <swiper-slide class="slideSwiper"><img src="../../images/Screenshot (811).png" alt=""/></swiper-slide>

      </swiper-container>
  </div>
)*/


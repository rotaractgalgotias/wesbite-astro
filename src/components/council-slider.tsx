"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
export default function CouncilSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://unsplash.it/300/400?random=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://unsplash.it/300/400?random=2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://unsplash.it/300/400?random=3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://unsplash.it/300/400?random=4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://unsplash.it/300/400?random=5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://unsplash.it/300/400?random=6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://unsplash.it/300/400?random=7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://unsplash.it/300/400?random=8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://unsplash.it/300/400?random=9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
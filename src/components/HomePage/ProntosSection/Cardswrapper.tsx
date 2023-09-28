import React from "react";
import Card from "./Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const breakpoints = {
  1400: {
    slidesPerView: 3.7,
  },
  1025: {
    slidesPerView: 3,
  }
};

export default function Cardswrapper() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={2.7}
      rewind={true}
      pagination={{
        clickable: true,
      }}
      keyboard={{
        enabled: true,
      }}
      mousewheel={true}
      modules={[Pagination, Mousewheel, Keyboard]}
      breakpoints={breakpoints}
    >
      <SwiperSlide>
        <Card number={1} />
      </SwiperSlide>
      <SwiperSlide>
        <Card number={2} />
      </SwiperSlide>
      <SwiperSlide>
        <Card number={3} />
      </SwiperSlide>
      <SwiperSlide>
        <Card number={4} />
      </SwiperSlide>
      <SwiperSlide>
        <Card number={5} />
      </SwiperSlide>
      <SwiperSlide>
        <Card number={6} />
      </SwiperSlide>
      <SwiperSlide>
        <Card number={7} />
      </SwiperSlide>
    </Swiper>
  );
}

/**
|--------------------------------------------------

// React Slick Library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  arrows: true,
  centerMode: true,
  initialSlide: 0,
  className: 'tracker',
  responsive: [
    {
      breakpoint: 1460,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
    
  ],

};

export default function Cardswrapper() {
  return (
    <div>
      <Slider {...settings}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Slider>
    </div>
  )
}


|--------------------------------------------------
*/

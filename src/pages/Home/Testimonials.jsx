import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

import w1 from "/media/wedding/w1.jpeg";
import w2 from "/media/wedding/w2.jpeg";
import w3 from "/media/wedding/w3.jpeg";
import w4 from "/media/wedding/w4.jpeg";
// import w5 from "/media/wedding/w5.jpeg";
import w6 from "/media/wedding/w6.jpeg";
import w7 from "/media/wedding/w7.jpeg";
import w8 from "/media/wedding/w8.jpeg";
import w9 from "/media/wedding/w9.jpeg";
import w10 from "/media/wedding/w10.jpeg";

const photoArr = [w1, w2, w3, w4, w6, w7, w8, w9, w10];
const Testimonials = () => {
  return (
    <>
      <div className="lg:h-[80vh] h-[70vh] w-full "></div>
      <div className=" w-full h-full flex flex-col shadow-lg  relative bg-stone-300 z-10 items-center py-10 gap-5">
        <div className="flex flex-col justify-center py-2 lg:py-8 items-center">
          <h1 className="text-sm text-stone-700 tracking-[2px]">STORIES BY</h1>
          <h1 className="lg:text-3xl text-2xl font-semibold mt-2  drop-shadow-sm  uppercase text-stone-500 tracking-wider">
            Atharva Cinema
          </h1>
        </div>
        <h1 className="lg:text-4xl font-semibold   uppercase text-stone-500 ">
          CAPTURING STORIES WORLDWIDE
        </h1>

        <div className="lg:w-[80vw] w-[100vw]   select-none my-0 lg:my-12">
          <Swiper
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
            // slidesPerView={5}
            // spaceBetween={60}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {photoArr.map((photo, idx) => (
              <SwiperSlide key={idx + "a"}>
                <img className="rounded-md" src={photo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

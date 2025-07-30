'use client';

import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { FlooringImg } from "../../assets/Index";

export default function SpsFlooring() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="xl:mb-[140px] overflow-hidden lg:mb-[120px] md:mb-[100px] mb-[80px] xl:mt-[140px] lg:mt-[120px] md:mt-[100px] mt-[80px]">
      <div className="container">
        {/* Header */}
        <div className="2xl:mb-10 xl:mb-8 lg:mb-6 md:mb-4 mb-2 flex justify-between items-center">
          <div>
            <h1 className="font-extralight 2xl:text-4.5xl xl:text-4xl lg:text-3xl md:text-2xl text-base xl:leading-none leading-normal">
              SPS
            </h1>
            <h1 className="text-primary italic 2xl:text-5xl xl:text-4.5xl lg:text-4xl md:text-3xl text-2xl xl:leading-none leading-normal font-playfairDisplay -mt-3">
              Flooring
            </h1>
          </div>
          <div className="flex lg:gap-5 md:gap-3 gap-2 items-center">
            <button
              ref={prevRef}
              className="hover:bg-black border-black group transition-all duration-300 ease-in-out border-[1px] lg:h-[54px] md:h-[44px] h-[34px] w-[34px] lg:w-[54px] md:w-[44px] rounded-full text-white flex items-center justify-center"
            >
              <BsArrowLeft className="text-black group-hover:text-white lg:text-[20px] text-[16px]" />
            </button>
            <button
              ref={nextRef}
              className="hover:bg-black border-black group transition-all duration-300 ease-in-out border-[1px] lg:h-[54px] md:h-[44px] h-[34px] w-[34px] lg:w-[54px] md:w-[44px] rounded-full text-white flex items-center justify-center"
            >
              <BsArrowRight className="text-black group-hover:text-white lg:text-[20px] text-[16px]" />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
            className="!overflow-visible"
            spaceBetween={12}
            slidesPerView={1.4}
            navigation={{
                prevEl: prevRef.current!,
                nextEl: nextRef.current!,
            }}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
                // Bind navigation buttons manually here
                if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                }
            }}
            breakpoints={{
                640: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                },
                768: {
                slidesPerView: 1.5,
                spaceBetween: 15,
                },
                1024: {
                slidesPerView: 2.2,
                spaceBetween: 24,
                },
                1300: {
                slidesPerView: 4.2,
                spaceBetween: 24,
                },
            }}
        >
          <SwiperSlide>
            <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px]">
              <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10 inline-block">
                <img
                  className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                  src={FlooringImg}
                  alt="FlooringImg"
                />
                <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 bottom-6 left-6 transition-all duration-300 group-hover:translate-y-[-10px]">
                  Alpine+
                </h2>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                <div className="text-center">
                  <div className="text-white text-xl font-medium mb-2">Explore all</div>
                  <div className="flex items-center justify-center text-white">
                    <FiArrowUpRight className="text-2xl group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px]">
              <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10 inline-block">
                <img
                  className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                  src={FlooringImg}
                  alt="FlooringImg"
                />
                <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 bottom-6 left-6 transition-all duration-300 group-hover:translate-y-[-10px]">
                  Alpine+
                </h2>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                <div className="text-center">
                  <div className="text-white text-xl font-medium mb-2">Explore all</div>
                  <div className="flex items-center justify-center text-white">
                    <FiArrowUpRight className="text-2xl group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px]">
              <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10 inline-block">
                <img
                  className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                  src={FlooringImg}
                  alt="FlooringImg"
                />
                <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 bottom-6 left-6 transition-all duration-300 group-hover:translate-y-[-10px]">
                  Alpine+
                </h2>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                <div className="text-center">
                  <div className="text-white text-xl font-medium mb-2">Explore all</div>
                  <div className="flex items-center justify-center text-white">
                    <FiArrowUpRight className="text-2xl group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px]">
              <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10 inline-block">
                <img
                  className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                  src={FlooringImg}
                  alt="FlooringImg"
                />
                <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 bottom-6 left-6 transition-all duration-300 group-hover:translate-y-[-10px]">
                  Alpine+
                </h2>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                <div className="text-center">
                  <div className="text-white text-xl font-medium mb-2">Explore all</div>
                  <div className="flex items-center justify-center text-white">
                    <FiArrowUpRight className="text-2xl group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px]">
              <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10 inline-block">
                <img
                  className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                  src={FlooringImg}
                  alt="FlooringImg"
                />
                <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 bottom-6 left-6 transition-all duration-300 group-hover:translate-y-[-10px]">
                  Alpine+
                </h2>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                <div className="text-center">
                  <div className="text-white text-xl font-medium mb-2">Explore all</div>
                  <div className="flex items-center justify-center text-white">
                    <FiArrowUpRight className="text-2xl group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px]">
              <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10 inline-block">
                <img
                  className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                  src={FlooringImg}
                  alt="FlooringImg"
                />
                <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 bottom-6 left-6 transition-all duration-300 group-hover:translate-y-[-10px]">
                  Alpine+
                </h2>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                <div className="text-center">
                  <div className="text-white text-xl font-medium mb-2">Explore all</div>
                  <div className="flex items-center justify-center text-white">
                    <FiArrowUpRight className="text-2xl group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FlooringImg } from "../../assets/Index";

export default function WeeklyBestsellers() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <section className="xl:mb-[140px] overflow-hidden lg:mb-[120px] md:mb-[100px] mb-[80px] bg-primary-gradient xl:pt-[60px] lg:pt-[50px] md:pt-[40px] pt-[30px] xl:pb-[75px] lg:pb-[65px] md:pb-[55px] pb-[45px]">
        <div className="container">
            <div className="2xl:mb-10 xl:mb-8 lg:mb-6 md:mb-4 mb-2 flex justify-between items-center">
                <div>
                    <h1 className="text-white font-extralight 2xl:text-4.5xl xl:text-4xl lg:text-3xl md:text-2xl text-base xl:leading-none leading-normal">
                    Weekly
                    </h1>
                    <h1 className="text-white italic 2xl:text-5xl xl:text-4.5xl lg:text-4xl md:text-3xl text-2xl xl:leading-none leading-normal font-playfairDisplay -mt-3">
                    Bestsellers
                    </h1>
                </div>
                <div className="flex lg:gap-5 md:gap-3 gap-2 items-center">
                    <button
                    ref={prevRef}
                    className="hover:bg-white border-white group transition-all duration-300 ease-in-out border-[1px] lg:h-[54px] md:h-[44px] h-[34px] w-[34px] lg:w-[54px] md:w-[44px] rounded-full text-white flex items-center justify-center"
                    >
                    <BsArrowLeft className="text-white group-hover:text-black lg:text-[20px] text-[16px]" />
                    </button>
                    <button
                    ref={nextRef}
                    className="hover:bg-white border-white group transition-all duration-300 ease-in-out border-[1px] lg:h-[54px] md:h-[44px] h-[34px] w-[34px] lg:w-[54px] md:w-[44px] rounded-full text-white flex items-center justify-center"
                    >
                    <BsArrowRight className="text-white group-hover:text-black lg:text-[20px] text-[16px]" />
                    </button>
                </div>
            </div>

            <Swiper
            className="!overflow-visible"
            spaceBetween={12}
            slidesPerView={1.5}
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
                540: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                },
                768: {
                slidesPerView: 2.5,
                spaceBetween: 15,
                },
                1024: {
                slidesPerView: 3.5,
                spaceBetween: 24,
                },
                1300: {
                slidesPerView: 4.2,
                spaceBetween: 24,
                },
            }}
            >
            <SwiperSlide>
                <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px] swiper-card">
                <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10">
                    <img
                    className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                    src={FlooringImg}
                    alt="FlooringImg"
                    />
                    <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 lg:bottom-6 md:bottom-5 bottom-4 lg:left-6 md:left-5 left-4 transition-all duration-300 md:group-hover:translate-y-[-10px] group-hover:translate-y-[-5px]">
                    Alpine+
                    </h2>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                    <div className="text-center xl:w-[168px] xl:h-[168px] lg:w-[148px] lg:h-[148px] md:w-[138px] md:h-[138px] w-[128px] h-[128px] bg-white rounded-full flex flex-col justify-center items-center gap-4">
                    <a href="#" className="text-black lg:text-base md:text-2sm text-sm font-quicksand font-medium mb-2">
                        Explore all
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px] swiper-card">
                <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10">
                    <img
                    className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                    src={FlooringImg}
                    alt="FlooringImg"
                    />
                    <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 lg:bottom-6 md:bottom-5 bottom-4 lg:left-6 md:left-5 left-4 transition-all duration-300 md:group-hover:translate-y-[-10px] group-hover:translate-y-[-5px]">
                    Alpine+
                    </h2>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                    <div className="text-center xl:w-[168px] xl:h-[168px] lg:w-[148px] lg:h-[148px] md:w-[138px] md:h-[138px] w-[128px] h-[128px] bg-white rounded-full flex flex-col justify-center items-center gap-4">
                    <a href="#" className="text-black lg:text-base md:text-2sm text-sm font-quicksand font-medium mb-2">
                        Explore all
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px] swiper-card">
                <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10">
                    <img
                    className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                    src={FlooringImg}
                    alt="FlooringImg"
                    />
                    <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 lg:bottom-6 md:bottom-5 bottom-4 lg:left-6 md:left-5 left-4 transition-all duration-300 md:group-hover:translate-y-[-10px] group-hover:translate-y-[-5px]">
                    Alpine+
                    </h2>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                    <div className="text-center xl:w-[168px] xl:h-[168px] lg:w-[148px] lg:h-[148px] md:w-[138px] md:h-[138px] w-[128px] h-[128px] bg-white rounded-full flex flex-col justify-center items-center gap-4">
                    <a href="#" className="text-black lg:text-base md:text-2sm text-sm font-quicksand font-medium mb-2">
                        Explore all
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px] swiper-card">
                <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10">
                    <img
                    className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                    src={FlooringImg}
                    alt="FlooringImg"
                    />
                    <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 lg:bottom-6 md:bottom-5 bottom-4 lg:left-6 md:left-5 left-4 transition-all duration-300 md:group-hover:translate-y-[-10px] group-hover:translate-y-[-5px]">
                    Alpine+
                    </h2>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                    <div className="text-center xl:w-[168px] xl:h-[168px] lg:w-[148px] lg:h-[148px] md:w-[138px] md:h-[138px] w-[128px] h-[128px] bg-white rounded-full flex flex-col justify-center items-center gap-4">
                    <a href="#" className="text-black lg:text-base md:text-2sm text-sm font-quicksand font-medium mb-2">
                        Explore all
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px] swiper-card">
                <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10">
                    <img
                    className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                    src={FlooringImg}
                    alt="FlooringImg"
                    />
                    <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 lg:bottom-6 md:bottom-5 bottom-4 lg:left-6 md:left-5 left-4 transition-all duration-300 md:group-hover:translate-y-[-10px] group-hover:translate-y-[-5px]">
                    Alpine+
                    </h2>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                    <div className="text-center xl:w-[168px] xl:h-[168px] lg:w-[148px] lg:h-[148px] md:w-[138px] md:h-[138px] w-[128px] h-[128px] bg-white rounded-full flex flex-col justify-center items-center gap-4">
                    <a href="#" className="text-black lg:text-base md:text-2sm text-sm font-quicksand font-medium mb-2">
                        Explore all
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px] swiper-card">
                <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10">
                    <img
                    className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                    src={FlooringImg}
                    alt="FlooringImg"
                    />
                    <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 lg:bottom-6 md:bottom-5 bottom-4 lg:left-6 md:left-5 left-4 transition-all duration-300 md:group-hover:translate-y-[-10px] group-hover:translate-y-[-5px]">
                    Alpine+
                    </h2>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                    <div className="text-center xl:w-[168px] xl:h-[168px] lg:w-[148px] lg:h-[148px] md:w-[138px] md:h-[138px] w-[128px] h-[128px] bg-white rounded-full flex flex-col justify-center items-center gap-4">
                    <a href="#" className="text-black lg:text-base md:text-2sm text-sm font-quicksand font-medium mb-2">
                        Explore all
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full relative group cursor-pointer overflow-hidden rounded-[30px] swiper-card">
                <div className="relative before:rounded-[30px] before:bg-black-gradient before:absolute before:w-full before:h-full before:z-10">
                    <img
                    className="rounded-[30px] w-full transition-transform duration-500 group-hover:scale-110"
                    src={FlooringImg}
                    alt="FlooringImg"
                    />
                    <h2 className="font-playfairDisplay text-white xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none absolute z-20 lg:bottom-6 md:bottom-5 bottom-4 lg:left-6 md:left-5 left-4 transition-all duration-300 md:group-hover:translate-y-[-10px] group-hover:translate-y-[-5px]">
                    Alpine+
                    </h2>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 rounded-[30px]">
                    <div className="text-center xl:w-[168px] xl:h-[168px] lg:w-[148px] lg:h-[148px] md:w-[138px] md:h-[138px] w-[128px] h-[128px] bg-white rounded-full flex flex-col justify-center items-center gap-4">
                    <a href="#" className="text-black lg:text-base md:text-2sm text-sm font-quicksand font-medium mb-2">
                        Explore all
                    </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            
            </Swiper>
        </div>
    </section>
  )
}

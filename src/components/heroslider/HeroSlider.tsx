import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Parallax, Pagination,Autoplay } from 'swiper/modules';
import { HeroBanner } from '../../assets/Index';

export default function HeroSlider({homedatabanner}:any) {
  return (
    <section className="relative">
        <Swiper
          speed={600}
          parallax={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            el: '.custom-pagination', // connect to custom container
            clickable: true,
          }}
          modules={[Parallax, Pagination,Autoplay]}
          className="hero-banner"
        >
          {homedatabanner?.map((item:any, index:number) => (
            <SwiperSlide
              key={index}
              className="bg-cover bg-center h-full 2xl:min-h-[990px] xl:min-h-[890px] lg:min-h-[790px] md:min-h-[690px] sm:min-h-[590px] min-h-[490px] relative before:bg-black-light-gradient before:absolute before:w-full before:h-full before:z-1 after:bg-black-dark-light-gradient after:absolute after:w-full after:h-full after:top-0 after:z-1"
              style={{ backgroundImage: `url(${HeroBanner})` }}
            >
            <div className="container relative z-10">

              <div className="mt-[191px]">
                <div className="max-w-[901px]">
                  <h1
                    className="text-white -tracking-[0.48px] 2xl:text-5xl xl:text-4.5xl 2xl:leading-[90px] xl:leading-[60px] leading-none lg:text-4xl md:text-3xl text-2xl font-light"
                    data-swiper-parallax="-1000"
                  >
                    {item.title}
                  </h1>
                  <div
                    className="text-white italic -tracking-[0.48px] 2xl:text-5xl xl:text-4.5xl lg:text-4xl md:text-3xl text-2xl xl:leading-none leading-normal font-playfairDisplay"
                    data-swiper-parallax="-1000"
                  >
                    {item.subtitle}
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination container absolute left-0 right-0 xl:!bottom-[60px] lg:!bottom-[50px] md:!bottom-[40px] sm:!bottom-[30px] !bottom-[20px] z-10 text-right" />
    </section>
  );
}

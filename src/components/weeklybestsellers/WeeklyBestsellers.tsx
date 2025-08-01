import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { product1, product2, product3, product4 } from "../../assets/images";
import ProductCard from "../ProductCard";
import SortDropdown from "../ui/SortDropdown";


const products = [
    {
        id: 1,
        title: 'Alpine 22mil Rivawood Oak',
        price: 1.99,
        imageUrl: product1,
    },
    {
        id: 2,
        title: 'Alpine 22mil Palermo Valley',
        price: 1.99,
        imageUrl: product2,
    },
    {
        id: 3,
        title: 'Alpine 22mil Napa Oak',
        price: 1.99,
        imageUrl: product3,
    },
    {
        id: 4,
        title: 'Alpine 22mil Berry Oak',
        price: 1.99,
        imageUrl: product4,

    },
    // Duplicate for 8 items
    {
        id: 5,
        title: 'Alpine 22mil Rivawood Oak',
        price: 1.99,
        imageUrl: product1,

    },
    {
        id: 6,
        title: 'Alpine 22mil Palermo Valley',
        price: 1.99,
        imageUrl: product2,

    },
    {
        id: 7,
        title: 'Alpine 22mil Napa Oak',
        price: 1.99,
        imageUrl: product3,

    },
    {
        id: 8,
        title: 'Alpine 22mil Berry Oak',
        price: 1.99,
        imageUrl: product4,

    },
    {
        id: 1,
        title: 'Alpine 22mil Rivawood Oak',
        price: 1.99,
        imageUrl: product1,
    },
    {
        id: 2,
        title: 'Alpine 22mil Palermo Valley',
        price: 1.99,
        imageUrl: product2,
    },
    {
        id: 3,
        title: 'Alpine 22mil Napa Oak',
        price: 1.99,
        imageUrl: product3,
    },
    {
        id: 4,
        title: 'Alpine 22mil Berry Oak',
        price: 1.99,
        imageUrl: product4,

    },
];
const sortOptions = [
    { label: 'Alpine 2.2', value: 'popularity' },
    { label: 'Alpine 2.3', value: 'low-high' },
    { label: 'Alpine 2.4', value: 'high-low' },
    { label: 'Alpine 2.5', value: 'newest' },
];

const handleSortChange = (value: string) => {
    console.log('Sorting by:', value);
};
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
                    <div className="flex items-center xl:gap-10 lg:gap-8 md:gap-6 gap-4">
                        <SortDropdown text="Sort by" sortbytext={false} width={"xl:w-[200px] lg:w-[180px] md:w-[160px] w-[140px]"} options={sortOptions} onChange={handleSortChange} />
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
                        if (
                        swiper.params.navigation &&
                        typeof swiper.params.navigation !== "boolean"
                        ) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        }

                    }}
                    breakpoints={{
                        120: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
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
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                imageUrl={product.imageUrl}
                            />
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

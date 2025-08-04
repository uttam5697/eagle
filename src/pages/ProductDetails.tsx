import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Breadcrumbs from '../components/ui/Breadcrumbs';
import QuantityInputGroup from '../components/ui/QuantityInputGroup';
import { FiArrowUpRight, FiShoppingCart } from 'react-icons/fi';
import { ProductSpecifications } from '../components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';

const COVERAGE_PER_BOX = 23.75;

export default function ProductDetailPage() {
    const { slug } = useParams();
    const [boxes, setBoxes] = useState(1);
    const [productGallery, setProductGallery] = useState([]);
    const [sqft, setSqft] = useState(COVERAGE_PER_BOX);
    const [isWastageChecked, setIsWastageChecked] = useState(true);

    const getBoxesForSqft = (rawSqft: number, wastage: boolean) => {
        const effective = wastage ? rawSqft * 1.1 : rawSqft;
        setBoxes(Math.max(1, Math.round(effective / COVERAGE_PER_BOX)));
        return Math.max(1, Math.round(effective / COVERAGE_PER_BOX));
    };

    const getSqftFromBoxes = (boxCount: number) => {
        return parseFloat((boxCount * COVERAGE_PER_BOX).toFixed(2));
    };

    // Sync when boxes change
    const handleBoxesChange = (newBoxes: number) => {
        const validBoxes = Math.max(1, newBoxes);
        setBoxes(validBoxes);
        setSqft(getSqftFromBoxes(validBoxes));
    };

    // Sync when sqft change
    const handleSqftChange = (newSqft: number) => {
        const validSqft = Math.max(0, newSqft);
        setSqft(parseFloat(validSqft.toFixed(2))); // show user input
        setBoxes(getBoxesForSqft(validSqft, isWastageChecked));
    };

    // Recalculate boxes when wastage toggle changes
    useEffect(() => {
        getBoxesForSqft(sqft, isWastageChecked)
        
    }, [isWastageChecked, sqft]);



    const [mainImage, setMainImage] = useState<string | undefined>();

    const handleGalleryImageClick = (img: any) => setMainImage(img);
    const breadcrumbData = [
        { label: 'Home', href: '/' },
        { label: 'Alpine 2.2', href: '/' },
        { label: 'Alpine 22mil Barry OAK' }
    ];

    const fetchProductById = async (slug: string) => {
        const formData = new FormData();
        formData.append('slug', slug);
        const { data } = await api.post(`/beforeauth/getproductdetails`, formData);
        setProductGallery(data?.product_image);
        setMainImage(data?.product_image[0]?.file);
        return data
    };

    const { data: productDataById, refetch } = useQuery({
        queryKey: ["product", slug],
        queryFn: () => fetchProductById(slug as string),
        enabled: false,
    });

    useEffect(() => {
        refetch();
    }, [slug])
    return (
        <div className="container xl:my-[60px] lg:my-[50px] md:my-[40px] my-[30px]">
            <Breadcrumbs items={breadcrumbData} />
            <div className="grid grid-cols-1 xl:mt-[30px] lg:mt-6 md:mt-5 mt-4 md:grid-cols-2 gap-6 ">
                <div className="">
                    <div className="border   w-full  rounded-2xl bg-[#f6f6f6]  overflow-hidden">
                        {mainImage?.endsWith(".mp4") ? (
                            <video
                                src={mainImage}
                                controls
                                className="w-full h-full"
                            />
                        ) : (
                            <img
                                src={mainImage}
                                alt="Main"
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>

                    {/* Thumbnails Swiper */}
                    <div className="relative">
                        <div className="">
                            <Swiper
                                // spaceBetween={20}
                                slidesPerView={3}
                                loop={false}
                                modules={[Navigation]}

                                navigation={{
                                    nextEl: ".swiper-button-next-custom",
                                    prevEl: ".swiper-button-prev-custom",
                                }}
                                className="pb-8"
                                spaceBetween={12}
                                breakpoints={{
                                    540: {
                                        slidesPerView: 4,
                                        spaceBetween: 12,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 12,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 16,
                                    },
                                    1300: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                {productGallery?.map((img: any, index: number) => (
                                    <SwiperSlide key={index} className="">
                                        <div
                                            onClick={() => handleGalleryImageClick(img?.file)}
                                            className={` mt-5 overflow-hidden cursor-pointer border-3 rounded-[16px] transition-all duration-200 ${mainImage === img
                                                ? "border-[#C41A2C]  border-[3px] rounded-xl"
                                                : " hover:border-[#C41A2C] border-transparent border-[3px] rounded-xl"
                                                }`}
                                        >
                                            {img?.file.endsWith(".mp4") ? (
                                                <video
                                                    src={img}
                                                    className="w-full h-full object-cover"
                                                    muted
                                                    onMouseOver={(e) => e.currentTarget.play()}
                                                    onMouseOut={(e) => e.currentTarget.pause()}
                                                />
                                            ) : (
                                                <img
                                                    src={img?.file}
                                                    alt={`thumb-${index}`}
                                                    className=" w-full h-full"
                                                />
                                            )}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="  text-black">
                    {/* Title */}
                    <h1 className="2xl:text-4.5xl xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none font-playfairDisplay italic mb-4">
                        {productDataById?.title}
                    </h1>
                    <div className='xl:mb-[50px] lg:mb-[40px] md:mb-[30px] mb-[20px]'>
                        <h5 className='xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none font-bold'>${productDataById?.price} / sqft</h5>
                        <p className="font-light md:text-[14px] text-[12px] mt-1 leading-none">
                            Shipping calculated at checkout
                        </p>
                    </div>

                    {/* Shipping note */}


                    {/* Description */}
                    <div
                        dangerouslySetInnerHTML={{ __html: productDataById?.description }}
                    >
                    </div>

                    <div className="grid md:grid-cols-5 w-full items-center gap-4 bg-[#FAF8F6] p-4 rounded-md">
                        {/* SQFT Input */}
                        <div className="col-span-2 ">
                            <QuantityInputGroup
                                label="Enter Coverage in SQFT:"
                                value={sqft}
                                onDecrease={() => handleSqftChange(sqft - 1)}
                                onIncrease={() => handleSqftChange(sqft + 1)}
                                onChange={(newVal) => handleSqftChange(newVal)}
                                iconType="arrow"
                            // unit="sqft"
                            />
                        </div>

                        {/* Equals Sign */}
                        <div className="text-2xl font-bold text-center col-span-1 mt-5 md:block hidden">=</div>

                        {/* Boxes Input */}
                        <div className="col-span-2">
                            <QuantityInputGroup
                                label="# of Boxes"
                                value={boxes}
                                onDecrease={() => handleBoxesChange(boxes - 1)}
                                onIncrease={() => handleBoxesChange(boxes + 1)}
                                onChange={(newVal) => handleBoxesChange(newVal)}
                                iconType="plusminus"
                            // unit="box"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mt-4 items-start">
                        {/* Add Wastage Section */}
                        <div>
                            <label className="inline-flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    className="mt-[6px] accent-black border-gray-300 h-[16px] w-[16px]"
                                    checked={isWastageChecked}
                                    onChange={(e) => setIsWastageChecked(e.target.checked)}
                                />
                                <div>
                                    <p className="font-semibold lg:text-base md:text-2sm text-sm">Add wastage (10%)</p>
                                    <p className="lg:text-base md:text-2sm text-sm font-light">1 box - No wastage added. Ships in 1 pallet.</p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 items-start mt-[84px]">
                        <a href="#" className="flex justify-between white-btn border border-black group before:!hidden after:!hidden hover:bg-black xl:px-6 px-4 xl:py-[18px] py-[14px]">
                            <span className='leading-none'> Add to Cart</span>
                            <FiShoppingCart className='text-2sm  duration-300 transition-all' />
                        </a>
                        <a href="#" className="flex justify-between black-btn group before:!hidden after:!hidden xl:px-6 px-4 xl:py-[18px] py-[14px]">
                            <span className='leading-none'>Buy Now</span>
                            <FiArrowUpRight className='text-2sm group-hover:rotate-45 duration-300 transition-all' />
                        </a>
                    </div>
                </div>
            </div>

            <ProductSpecifications product_specifications={productDataById?.product_specifications} />
        </div>
    );
}

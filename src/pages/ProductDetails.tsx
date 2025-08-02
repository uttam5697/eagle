import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { product1, product2, product3, product4 } from '../assets/images';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import QuantityInputGroup from '../components/ui/QuantityInputGroup';
import SortDropdown from '../components/ui/SortDropdown';
import PrimaryButton from '../components/ui/Button';
import { ArrowBigLeft, ShoppingCart } from 'lucide-react';
import { FiArrowUpRight, FiShoppingCart } from 'react-icons/fi';
import { ProductSpecifications, ShoppingBrand } from '../components';

const COVERAGE_PER_BOX = 23.75;

export default function ProductDetailPage() {
    const [boxes, setBoxes] = useState(1);
    const [sqft, setSqft] = useState(COVERAGE_PER_BOX);
    const [isWastageChecked, setIsWastageChecked] = useState(true);

    const getBoxesForSqft = (rawSqft: number, wastage: boolean) => {
        const effective = wastage ? rawSqft * 1.1 : rawSqft;
        return Math.max(1, parseFloat((effective / COVERAGE_PER_BOX).toFixed(2)));
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
        setBoxes(getBoxesForSqft(sqft, isWastageChecked));
    }, [isWastageChecked, sqft]);

    const productGallery = [
        product1,
        product2,
        product3,
        product4
    ];

    const [mainImage, setMainImage] = useState(productGallery[0]);
    const sortOptions = [
        { label: 'Popularity', value: 'popularity' },
        { label: 'Price: Low to High', value: 'low-high' },
        { label: 'Price: High to Low', value: 'high-low' },
        { label: 'Newest', value: 'newest' },
    ];


    const handleGalleryImageClick = (img: string) => setMainImage(img);


    const breadcrumbData = [
        { label: 'Home', href: '/' },
        { label: 'Alpine 2.2', href: '/' },
        { label: 'Alpine 22mil Barry OAK' }
    ];
    const handleSortChange = (value: string) => {
        console.log('Sorting by:', value);
    };

    return (
        <div className="container xl:my-[60px] lg:my-[50px] md:my-[40px] my-[30px]">
            <Breadcrumbs items={breadcrumbData} />
            <div className="grid grid-cols-1 xl:mt-[30px] lg:mt-6 md:mt-5 mt-4 md:grid-cols-2 gap-6 ">
                <div className="">
                    <div className="border   w-full  rounded-2xl bg-[#f6f6f6]  overflow-hidden">
                        {mainImage.endsWith(".mp4") ? (
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
                                {productGallery.map((img, index) => (
                                    <SwiperSlide key={index} className="">
                                        <div
                                            onClick={() => handleGalleryImageClick(img)}
                                            className={` mt-5  rounded-lg overflow-hidden cursor-pointer border-3  rounded-xl transition-all duration-200 ${mainImage === img
                                                ? "border-[#C41A2C]  border-[3px] rounded-xl"
                                                : " hover:border-[#C41A2C] border-transparent border-[3px] rounded-xl"
                                                }`}
                                        >
                                            {img.endsWith(".mp4") ? (
                                                <video
                                                    src={img}
                                                    className="w-full h-full object-cover"
                                                    muted
                                                    onMouseOver={(e) => e.currentTarget.play()}
                                                    onMouseOut={(e) => e.currentTarget.pause()}
                                                />
                                            ) : (
                                                <img
                                                    src={img}
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
                        Alpine 22mil Barry OAK
                    </h1>
                    <div className='xl:mb-[50px] lg:mb-[40px] md:mb-[30px] mb-[20px]'>
                        <h5 className='xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none font-bold'>$1.99 / sqft</h5>
                        <p className="font-light md:text-[14px] text-[12px] mt-1 leading-none">
                            Shipping calculated at checkout
                        </p>
                    </div>

                    {/* Shipping note */}


                    {/* Description */}
                    <p className="md:text-sm text-[12px] font-light xl:mb-6 lg:mb-5 mb-4">
                        Introducing Alpine Barry Oak, a flooring plank that epitomizes the beauty of nature with its elegant gray tones and striking wood-like grains. This flooring option offers a perfect blend of sophistication and natural charm, adding a touch of timeless elegance to any space. The graceful gray hues of Alpine Barry Oak create a serene and inviting atmosphere, evoking the tranquility of a forest retreat.
                    </p>

                    {/* Features List */}
                    <ul className="list-disc list-inside lg:text-sm md:text-xs text-[12px] leading-relaxed font-semibold xl:mb-[60px] lg:mb-[50px] md:mb-[40px] mb-[30px]">
                        <li>%100 Waterproof</li>
                        <li>Scratch Resistant Crystalux Wear Layer</li>
                        <li>Pet Friendly</li>
                        <li>Stain Proof</li>
                        <li>Easy Installation</li>
                        <li>Attached IXPE backing for comfort and quiet</li>
                    </ul>

                    <div className="grid grid-cols-1 grid-cols-5 w-full items-center gap-4 bg-[#FAF8F6] p-4 rounded-md">
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
                        <div className="text-2xl font-bold text-center col-span-1 mt-5">=</div>

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

                    <div className="grid grid-cols-1 grid-cols-1 gap-4 mt-4 items-start">
                        {/* Add Wastage Section */}
                        <div>
                            <label className="inline-flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    className="mt-1 accent-black border-gray-300 h-[20px] w-[20px]"
                                    checked={isWastageChecked}
                                    onChange={(e) => setIsWastageChecked(e.target.checked)}
                                />
                                <div>
                                    <p className="font-semibold text-base">Add wastage (10%)</p>
                                    <p className="text-base font-light">1 box – No wastage added. Ships in 1 pallet.</p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 grid-cols-2 gap-4 mt-4 items-start mt-[84px]">
                        <a href="#" className="flex justify-between white-btn border border-black group before:!hidden after:!hidden hover:bg-black">
                            <span className='leading-none'> Add to Cart</span>
                            <FiShoppingCart className='text-2sm  duration-300 transition-all' />
                        </a>
                        <a href="#" className="flex justify-between black-btn group before:!hidden after:!hidden">
                            <span className='leading-none'>Buy Now</span>
                            <FiArrowUpRight className='text-2sm group-hover:rotate-45 duration-300 transition-all' />
                        </a>

                    </div>

                </div>
            </div>
        
        <ProductSpecifications />
  <ShoppingBrand />

        </div>
    );
}

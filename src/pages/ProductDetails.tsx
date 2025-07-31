import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import PrimaryButton from '../components/ui/Button';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { product1, product2, product3, product4 } from '../assets/images';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import QuantityInputGroup from '../components/ui/QuantityInputGroup';
import SortDropdown from '../components/ui/SortDropdown';

export default function ProductDetailPage() {
    const [coverage, setCoverage] = useState(23.95);
    const [boxes, setBoxes] = useState(1);
    const [sqft, setSqft] = useState(23.95);
    const [isWastageChecked, setIsWastageChecked] = useState(true);
    const [activeMediaUrl, setActiveMediaUrl] = useState("");
    const plusIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828817.png";

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

    const pricePerSqft = 1.99;

    const handleGalleryImageClick = (img: string) => setMainImage(img);
    const handleCoverageChange = (amount: number) => {
        const newCoverage = Math.max(0, coverage + amount);
        setCoverage(newCoverage);
        setBoxes(Math.ceil(newCoverage));
    };
    const handleBoxesChange = (amount: number) => {
        const newBoxes = Math.max(1, boxes + amount);
        setBoxes(newBoxes);
        setCoverage(newBoxes * 1);
    };

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
                            <div className="swiper-button-prev-custom absolute z-20 top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-yellow-50 cursor-pointer">
                                <svg
                                    className="w-5 h-5 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </div>
                            <div className="swiper-button-next-custom absolute z-20 top-1/2 right-14 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-yellow-50 cursor-pointer">
                                <svg
                                    className="w-5 h-5 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>

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

                    <div className="grid grid-cols-5 items-center gap-4 bg-[#FAF8F6] p-4 rounded-md">
                        <div className='col-span-2'>
                            <QuantityInputGroup
                                label="Enter Coverage in SQFT:"
                                value={sqft}
                                onDecrease={() => setSqft((prev) => Math.max(0, prev - 1))}
                                onIncrease={() => setSqft((prev) => prev + 1)}
                                iconType="arrow"
                            />
                        </div>

                        <div className="text-2xl font-bold text-center col-span-1">=</div>
                        <div className='col-span-2'>
                            <QuantityInputGroup
                                label="# of Boxes"
                                value={boxes}
                                onDecrease={() => setBoxes((prev) => Math.max(0, prev - 1))}
                                onIncrease={() => setBoxes((prev) => prev + 1)}
                                iconType="plusminus"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 items-start">
                        {/* Add Wastage Section */}
                        <div>
                            <label className="inline-flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    className="mt-1 accent-black border-gray-300"
                                    checked={isWastageChecked}
                                    onChange={(e) => setIsWastageChecked(e.target.checked)}
                                />
                                <div>
                                    <p className="font-semibold">Add wastage (10%)</p>
                                    <p className="text-sm text-gray-600">1 box – No wastage added. Ships in 1 pallet.</p>
                                </div>
                            </label>
                        </div>

                        {/* Select QTY Section */}
                        <div>
                            <div className="relative">
                                <SortDropdown options={sortOptions} width="w-full" sortbytext={true} text="Select Quantity" onChange={handleSortChange}  />
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
}

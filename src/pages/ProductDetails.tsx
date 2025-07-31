import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import PrimaryButton from '../components/ui/Button';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { product1, product2, product3, product4 } from '../assets/images';

export default function ProductDetailPage() {
    const [coverage, setCoverage] = useState(23.95);
    const [boxes, setBoxes] = useState(1);
    const [addWastage, setAddWastage] = useState(true);
    const [activeMediaUrl, setActiveMediaUrl] = useState("");
    const plusIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828817.png";

    const productGallery = [
        product1,
        product2,
        product3,
        product4
    ];

    const [mainImage, setMainImage] = useState(productGallery[0]);

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

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-4 py-6 ">
                <div className="">
                    <div className="border h-[656px] w-[656px] rounded-2xl bg-[#f6f6f6]  overflow-hidden">
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
                                spaceBetween={10}
                                // slidesPerView={1}
                                loop={true}
                                
                                // navigation={{
                                //     nextEl: ".swiper-button-next-custom",
                                //     prevEl: ".swiper-button-prev-custom",
                                // }}
                                modules={[Navigation]}
                                className="pb-8"
                            >
                                {productGallery.map((img, index) => (
                                    <SwiperSlide key={index} className="!w-auto">
                                        <div
                                            onClick={() => handleGalleryImageClick(img)}
                                            className={`w-[144px] gap-5 h-[144px] rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${mainImage === img
                                                    ? "border-yellow-400 shadow-lg "
                                                    : "border-gray-200 hover:border-yellow-400 hover:shadow-md"
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
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                        </div>

                        
                    </div>
                </div>
            </div>
            {/* Left - Image Preview */}


        </div>
    );
}

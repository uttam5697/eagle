import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { TiSocialYoutube } from "react-icons/ti";
import Breadcrumbs from '../components/ui/Breadcrumbs';
import QuantityInputGroup from '../components/ui/QuantityInputGroup';
import { FiArrowUpRight, FiShoppingCart } from 'react-icons/fi';
import { MdVideocam } from "react-icons/md";
import { ProductSpecifications } from '../components';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';


export default function ProductDetailPage() {
    const { slug } = useParams();
    const [boxes, setBoxes] = useState(1);
    const [productGallery, setProductGallery] = useState([]);
    const [sqft, setSqft] = useState(0);
    const [isWastageChecked, setIsWastageChecked] = useState(true);

    const getBoxesForSqft = (rawSqft: number, wastage: boolean, coverage: number) => {

        const effective = wastage ? rawSqft * 1.1 : rawSqft;
        console.log("📐 Effective square feet (after wastage if any):", effective);

        const boxesNeeded = Math.max(1, Math.ceil(effective / Number(coverage)));

        setBoxes(boxesNeeded);
        return boxesNeeded;
    };

    function getYouTubeVideoID(url: any) {
        try {
            const parsedUrl = new URL(url);
            const hostname = parsedUrl.hostname;

            // Case: youtu.be/<id>
            if (hostname === 'youtu.be') {
                return parsedUrl.pathname.slice(1);
            }

            // Case: youtube.com/watch?v=<id>
            if (parsedUrl.pathname === '/watch') {
                return parsedUrl.searchParams.get('v');
            }

            // Case: youtube.com/shorts/<id>, /embed/<id>, /v/<id>
            const pathMatch = parsedUrl.pathname.match(/^\/(shorts|embed|v)\/([a-zA-Z0-9_-]{11})/);
            if (pathMatch) {
                return pathMatch[2];
            }

            return null; // Not a valid YouTube video URL
        } catch (e) {
            return null; // Invalid URL format
        }
    }
    function getYouTubeThumbnailURL(url: string, quality = "hqdefault") {
        const videoId = getYouTubeVideoID(url);
        if (!videoId) return null;
        return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    }

    const getSqftFromBoxes = (boxCount: number, coverage: number | undefined) => {
        return parseFloat((boxCount * Number(coverage)).toFixed(2));
    };

    // Sync when boxes change
    const handleBoxesChange = (newBoxes: number, coverage: number) => {
        const validBoxes = Math.max(1, newBoxes);
        setBoxes(validBoxes);
        setSqft(getSqftFromBoxes(validBoxes, coverage));
    };

    // Sync when sqft change
    const handleSqftChange = (newSqft: number, coverage: number) => {
        const validSqft = Math.max(0, newSqft);
        setSqft(parseFloat(validSqft.toFixed(2))); // show user input
        setBoxes(getBoxesForSqft(validSqft, isWastageChecked, coverage));
    };

    // Recalculate boxes when wastage toggle changes
    useEffect(() => {
        getBoxesForSqft(sqft, isWastageChecked, productDataById?.sqft_in_box);

    }, [isWastageChecked, sqft]);



    // const [mainImage, setMainImage] = useState<string | undefined>();
    const [mainImage, setMainImage] = useState<any>();

    const handleGalleryImageClick = (media: any) => setMainImage(media);


    const fetchProductById = async (slug: string) => {
        const formData = new FormData();
        formData.append('slug', slug);
        const { data } = await api.post(`/beforeauth/getproductdetails`, formData);
        setSqft(Number(data?.sqft_in_box))
        setProductGallery(data?.product_image);
        setMainImage(data?.product_image[0]);
        return data
    };

    const { data: productDataById, refetch } = useQuery({
        queryKey: ["product", slug],
        queryFn: () => fetchProductById(slug as string),
        enabled: false,
    });

    const breadcrumbData = [
        { label: 'Home', href: '/' },
        { label: `${productDataById?.title}`, href: `/products/category/${productDataById?.product_category_id}` },
        { label: `${productDataById?.slug}` }
    ];

    useEffect(() => {
        refetch();
    }, [slug])

    // THIS GOES RIGHT BEFORE YOUR NORMAL RETURN
    if (!productDataById) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container xl:my-[60px] lg:my-[50px] md:my-[40px] my-[30px]">
            <Breadcrumbs items={breadcrumbData} />
            <div className="grid grid-cols-1 xl:mt-[30px] lg:mt-6 md:mt-5 mt-4 md:grid-cols-2 gap-6 ">
                <div className="">
                    <div className="border w-full rounded-2xl bg-[#f6f6f6] overflow-hidden">
                        {mainImage?.type === 'Video' && mainImage?.video ? (
                            <video src={mainImage.video} controls className="w-full h-full" />
                        ) : mainImage?.type === 'Youtube' && mainImage?.video_url ? (
                            <iframe
                                className="w-full aspect-video"
                                // src={mainImage.video_url}
                                src={`https://www.youtube.com/embed/${getYouTubeVideoID(mainImage.video_url)}`}
                                title="YouTube Video"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <img src={mainImage?.file} alt="Main" className="w-full h-full object-cover" />
                        )}
                    </div>

                    {/* Thumbnails Swiper */}
                    <div className="relative">
                        <div className="">
                            <Swiper
                                // spaceBetween={20}
                                slidesPerView="auto"
                                loop={false}
                                modules={[Navigation]}

                                navigation={{
                                    nextEl: ".swiper-button-next-custom",
                                    prevEl: ".swiper-button-prev-custom",
                                }}
                                className="pb-8"
                                spaceBetween={12}
                            // breakpoints={{
                            //     540: {
                            //         slidesPerView: 4,
                            //         spaceBetween: 12,
                            //     },
                            //     768: {
                            //         slidesPerView: 3,
                            //         spaceBetween: 12,
                            //     },
                            //     1024: {
                            //         slidesPerView: 3,
                            //         spaceBetween: 16,
                            //     },
                            //     1300: {
                            //         slidesPerView: 4,
                            //         spaceBetween: 20,
                            //     },
                            // }}
                            >
                                {productGallery?.map((media: any, index: number) => {
                                    const isActive =
                                        mainImage?.type === media?.type &&
                                        (
                                            (media?.type === 'Image' && mainImage?.file === media?.file) ||
                                            (media?.type === 'Video' && mainImage?.video === media?.video) ||
                                            (media?.type === 'Youtube' && mainImage?.video_url === media?.video_url)
                                        );

                                    return (
                                        <SwiperSlide key={index} className='!w-auto'>
                                            <div
                                                onClick={() => handleGalleryImageClick(media)}
                                                className={`mt-5 overflow-hidden cursor-pointer rounded-[16px] transition-all duration-200 lg:!w-[144px] md:!w-[124px] md:!h-[124px] !h-[104px] !w-[104px] lg:!h-[144px] object-cover object-center ${isActive
                                                        ? "border-[#C41A2C] border-[3px] rounded-xl"
                                                        : "hover:border-[#C41A2C] border-transparent border-[3px] rounded-xl"
                                                    }`}
                                            >
                                                {media?.type === 'Video' && media?.video ? (
                                                    <div className='relative h-full'>
                                                        <video
                                                            src={media.video}
                                                            className="w-full h-full object-cover"
                                                            muted
                                                            onMouseOver={(e) => e.currentTarget.play()}
                                                            onMouseOut={(e) => e.currentTarget.pause()}
                                                        />
                                                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                                            <MdVideocam  className='text-primary xl:text-[30px] lg:text-[24px] md:text-[20px] text-[16px] md:p-1 p-[2px] bg-white rounded-full' />
                                                        </div>
                                                    </div>
                                                ) : media?.type === 'Youtube' && media?.video_url ? (
                                                    <div className='relative'>
                                                        <img
                                                            className="lg:w-[144px] md:w-[124px] md:h-[124px] h-[104px] w-[104px] lg:h-[144px] object-cover object-center"
                                                            src={getYouTubeThumbnailURL(media.video_url) ?? undefined}
                                                            title={`YouTube video ${index}`}
                                                        />
                                                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                                            <TiSocialYoutube className='text-primary xl:text-[30px] lg:text-[24px] md:text-[20px] text-[16px] md:p-1 p-[2px] bg-white rounded-full' />
                                                        </div>
                                                    </div>

                                                ) : (
                                                    <img
                                                        src={media?.file}
                                                        alt={`thumb-${index}`}
                                                        className="lg:w-[144px] md:w-[124px] md:h-[124px] h-[104px] w-[104px] lg:h-[144px] object-cover object-center"
                                                    />
                                                )}
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}


                            </Swiper>
                        </div>
                        {<div className="swiper-button-prev-custom absolute z-20 mt-[10px] top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-yellow-50 cursor-pointer">
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
                        </div>}

                        <div className="swiper-button-next-custom absolute z-20 mt-[10px] top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-yellow-50 cursor-pointer">
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
                <div className="  text-black">
                    {/* Title */}
                    <h1 className="2xl:text-4.5xl xl:text-4xl lg:text-3xl md:text-2xl text-base leading-none font-playfairDisplay italic mb-2">
                        {productDataById?.title}
                    </h1>
                    <div className='xl:mb-[50px] lg:mb-[40px] md:mb-[30px] mb-[20px]'>
                        <h5 className='xl:text-3xl lg:text-2xl md:text-base text-2sm leading-none font-bold inline-block'>${productDataById?.price} / sqft <p className='xl:text-sm inline-block text-xm leading-none font-bold'>(${productDataById?.sqft_in_box} sqft/Box)</p></h5>
                        {/* <p className='xl:text-3xl lg:text-2xl md:text-base text-2sm leading-none font-bold'>${productDataById?.price_per_box} / sqft</p> */}
                        <p className='custom-html font-light md:text-[14px] text-[12px] mt-1 leading-none' dangerouslySetInnerHTML={{ __html: productDataById?.description }} />
                    </div>

                    {/* Shipping note */}


                    

                    <div className="grid md:grid-cols-5 w-full items-center gap-4 bg-[#FAF8F6] p-4 rounded-md">
                        {/* SQFT Input */}
                        <div className="col-span-2 ">
                            <QuantityInputGroup
                                label="Enter Coverage in SQFT:"
                                value={sqft}
                                onDecrease={() => handleSqftChange(sqft - 1, productDataById?.sqft_in_box)}
                                onIncrease={() => handleSqftChange(sqft + 1, productDataById?.sqft_in_box)}
                                onChange={(newVal) => handleSqftChange(newVal, productDataById?.sqft_in_box)}
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
                                onDecrease={() => handleBoxesChange(boxes - 1, productDataById?.sqft_in_box)}
                                onIncrease={() => handleBoxesChange(boxes + 1, productDataById?.sqft_in_box)}
                                onChange={(newVal) => handleBoxesChange(newVal, productDataById?.sqft_in_box)}
                                iconType="plusminus"
                            // unit="box"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mt-4 items-start">
                        {/* <div className="mb-6">
                            

                            <div className=" p-3 bg-[#FAF8F6] rounded-md flex flex-col items-start">
                                <span className="text-xs uppercase text-gray-500 tracking-[0.05em] mb-1 font-semibold">Total price</span>
                                <span className="text-2xl font-extrabold text-black">
                                   {(sqft  * productDataById?.price).toFixed(2)}
                                </span>
                                <span className="text-xs text-gray-400 font-normal">
                                    for <span className="font-medium">{sqft}</span> sqft
                                </span>
                            </div>
                        </div> */}
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
                        <Link to="/my-cart" className="flex justify-between white-btn border border-black group before:!hidden after:!hidden hover:bg-black xl:px-6 px-4 xl:py-[18px] py-[14px]">
                            <span className='leading-none'> Add to Cart</span>
                            <FiShoppingCart className='text-2sm  duration-300 transition-all' />
                        </Link>
                        <Link to="#" className="flex justify-between black-btn group before:!hidden after:!hidden xl:px-6 px-4 xl:py-[18px] py-[14px]">
                            <span className='leading-none'>Buy Now</span>
                            <FiArrowUpRight className='text-2sm group-hover:rotate-45 duration-300 transition-all' />
                        </Link>
                    </div>
                </div>
            </div>
            {productDataById?.product_specifications.length > 0 &&
                <ProductSpecifications product_specifications={productDataById?.product_specifications} />}
        </div>
    );
}

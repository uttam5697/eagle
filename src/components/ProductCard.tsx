import React, { useState } from 'react';
import {  Heart as HeartOutline, Heart as HeartFilled, ShoppingCart } from 'lucide-react';
import PrimaryButton from './ui/Button';

type ProductCardProps = {
    imageUrl: string | undefined;
    title: string;
    price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="group max-w-sm rounded-2xl bg-white p-2 shadow-sm transition-transform duration-300 hover:shadow-md hover:scale-[1.015]">
            <div className="relative overflow-hidden rounded-xl">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-2 right-2 bg-white p-[11px] rounded-full shadow transition-transform duration-200 hover:bg-gray-100 hover:scale-110"
                >
                    {liked ? (
                        <HeartFilled size={14} className="fill-red-500 text-red-500" />
                    ) : (
                        <HeartOutline size={14} className="text-black" />
                    )}
                </button>
            </div>

            <div className="mt-3 text-center">
                <h3 className="text-2sm font-regular text-gray-800">{title}</h3>
                <p className="mt-1 text-xl font-bold text-black">
                    ${price.toFixed(2)} <span className="text-xl font-bold">/ sqft</span>
                </p>

                <div className="flex items-center justify-center mb-[26px] mt-[21px]">
                    <PrimaryButton
                        label="Add To Cart"
                        icon={<ShoppingCart size={16} />}
                        onClick={() => alert('Added to cart!')}
                        className="w-[200px]"
                    />
                </div>
            </div>
            
        </div>
    );
};

export default ProductCard;

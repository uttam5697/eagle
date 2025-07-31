import React from 'react';
import ProductCard from './ProductCard';
import { product1, product2, product3, product4 } from "../assets/images"
import SortDropdown from './ui/SortDropdown';

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
    { label: 'Popularity', value: 'popularity' },
    { label: 'Price: Low to High', value: 'low-high' },
    { label: 'Price: High to Low', value: 'high-low' },
    { label: 'Newest', value: 'newest' },
];

const ProductList: React.FC = () => {
    const handleSortChange = (value: string) => {
        console.log('Sorting by:', value);
    };
    return (
        <div className="container mx-auto p-4 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-4 py-6 ">
                <h1 className="text-[54px] md:text-[65px] lg:text-[84px] font-playfairDisplay italic text-primary">
                    Alpine 2.2
                </h1>

                <div className="flex flex-col md:flex-row items-center md:justify-end gap-4">
                    <span className="text-sm font-regular text-[18px] md:mr-[5px] lg:mr-[45px]">
                        Showing all 12 results
                    </span>
                    <SortDropdown width="w-[300px]" sortbytext={true} options={sortOptions} onChange={handleSortChange} />
                </div>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8 ">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                ))}

            </div>
        </div>
    );
};

export default ProductList;

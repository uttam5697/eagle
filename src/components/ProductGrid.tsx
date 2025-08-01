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
        <section className='xl:mb-[140px] lg:mb-[120px] md:mb-[100px] mb-[80px] xl:mt-[160px] lg:mt-[140px] md:mt-[100px] mt-[80px]'>
            <div className="container">
                <div className="flex items-center gap-2 md:flex-nowrap flex-wrap justify-between 2xl:mb-[60px] xl:mb-[50px] lg:mb-[40px] md:mb-[30px] mb-[20px]">
                    <h1 className="text-primary flex-none italic 2xl:text-5xl xl:text-4.5xl lg:text-4xl md:text-3xl text-2xl xl:leading-none leading-normal font-playfairDisplay">
                        Alpine 2.2
                    </h1>

                    <div className="flex items-center gap-4 w-full">
                        <span className="lg:text-2sm md:text-sm text-[12px] ml-auto flex-none">
                            Showing all 12 results
                        </span>
                        <SortDropdown text="Sort by" width="max-w-[300px]" sortbytext={true} options={sortOptions} onChange={handleSortChange} />
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 lg:gap-5 md:gap-4 gap-3">
                    {products.map((product) => (
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            imageUrl={product.imageUrl}
                        />
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ProductList;

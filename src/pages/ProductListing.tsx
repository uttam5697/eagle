import React from "react";
// import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import ProductSpecifications from "../components/productspecifications/ProductSpecifications";

const ProductListing: React.FC = () => (
    <div >
        <ProductGrid />
        <ProductSpecifications />
    </div>
);

export default ProductListing;
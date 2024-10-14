import React from "react";
import ProductCard from "../Compoent/ProductCard";

const ProductPage = () => {
  return (
    <div>
      <p className="text-center underline text-4xl font-semibold pb-8">
        Products
      </p>
      <ProductCard />
    </div>
  );
};

export default ProductPage;

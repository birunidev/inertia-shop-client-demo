import React from "react";
import ProductCard from "./ProductCard";

export default function ProductCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-12">
      <ProductCard image="/assets/images/product-1.png" />
      <ProductCard image="/assets/images/product-2.png" />
      <ProductCard image="/assets/images/product-3.png" />
      <ProductCard image="/assets/images/product-4.png" />
      <ProductCard image="/assets/images/product-5.png" />
      <ProductCard image="/assets/images/product-6.png" />
    </div>
  );
}

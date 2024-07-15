import React from "react";
import ProductImageItem from "./ProductImageItem";

export default function ProductImageItems({ isGallery }) {
  return (
    <div
      className={` ${
        isGallery
          ? "flex flex-row whitespace-nowrap w-full overflow-x-scroll scrollbar-hide"
          : "grid grid-cols-3"
      } gap-3`}
    >
      <ProductImageItem
        image="/assets/images/product-1.png"
        isActive
        isGallery={isGallery}
      />
      <ProductImageItem
        image="/assets/images/product-1.png"
        isGallery={isGallery}
      />
      <ProductImageItem
        image="/assets/images/product-1.png"
        isGallery={isGallery}
      />
      <ProductImageItem
        image="/assets/images/product-1.png"
        isGallery={isGallery}
      />
      <ProductImageItem
        image="/assets/images/product-1.png"
        isGallery={isGallery}
      />
    </div>
  );
}

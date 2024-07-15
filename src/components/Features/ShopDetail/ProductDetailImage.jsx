import React from "react";
import ProductImageItems from "./ProductImageItems";
import ProductBigImage from "./ProductBigImage";

import "./ShopDetail.css";

export default function ProductDetailImage() {
  return (
    <div className="product-detail-image flex flex-col-reverse items-start gap-3">
      <ProductImageItems isGallery />
      <ProductBigImage />
    </div>
  );
}

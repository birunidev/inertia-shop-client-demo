import { IconShoppingCart } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function ProductCard({
  image = "/assets/images/product-1.png",
}) {
  return (
    <div className="w-full space-y-5 product-card relative">
      <div className="overflow-hidden rounded-lg relative">
        <button
          onClick={(e) => {
            alert("oke");
          }}
          type="button"
          className="absolute top-3 p-4 right-3"
        >
          <IconShoppingCart stroke={1} />
        </button>
        <Link to="/shop/1">
          <img src={image} className="object-cover object-center" alt="" />
        </Link>
      </div>
      <div className="text-center space-y-1 relative">
        <p className="text-xs md:text-base">Zip-Up Blouson</p>
        <p className="text-sm md:text-lg lg:text-2xl">IDR 200.000</p>
        <p className="text-gray-500 text-xs md:text-sm">
          Made with recycled materials
        </p>
        <Link to="/shop/1" className="absolute inset-0 w-full h-full"></Link>
      </div>
    </div>
  );
}

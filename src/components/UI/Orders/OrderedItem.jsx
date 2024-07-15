import React from "react";
import ProductAddToCart from "../Products/ProductAddToCart";
import { IconTrash } from "@tabler/icons-react";

const QuantityBadge = ({ quantity }) => {
  return (
    <span className="w-6 h-6 text-[11px] bg-error rounded-full flex justify-center items-center text-white absolute -top-2 -right-2">
      {quantity}
    </span>
  );
};

export default function OrderedItem({
  quantityShowType = "text",
  hasQtyAction = false,
  hasDeleteBtn = false,
}) {
  return (
    <div className="flex relative w-full">
      <div className="flex gap-4 w-full">
        <div className="rounded-lg relative">
          {quantityShowType === "badge" && <QuantityBadge quantity={1} />}
          <img
            className="w-24 h-18 object-cover rounded-lg object-center"
            src="/assets/images/product-1.png"
            alt=""
          />
        </div>
        <div className="space-y-3 w-full">
          <div className="flex justify-between items-start gap-2 w-full">
            <p className="text-sm">Zip-Up Blouson</p>
            <p className="text-base">IDR 200.000</p>
          </div>
          <p className="text-xs">
            IDR 200.000 {quantityShowType === "text" ? `- ${1}x` : ""}
          </p>
          <div className="flex items-center justify-between w-full">
            {hasQtyAction && <ProductAddToCart quantity={1} size="small" />}
            {hasDeleteBtn && (
              <button>
                <IconTrash stroke={1} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

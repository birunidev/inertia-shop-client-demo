import React from "react";

export default function ProductMarketplace() {
  return (
    <div className="space-y-2">
      <p className="xl:text-xl">or Get this product from marketplace</p>
      <div className="flex items-center gap-8">
        <button className="hover:scale-[1.15] active:scale-[1.1] transition-all">
          <img
            className="w-32 md:w-auto"
            src="/assets/images/tokopedia.png"
            alt="amazon"
          />
        </button>
        <button className="hover:scale-[1.15] active:scale-[1.1] transition-all">
          <img
            className="w-32 md:w-auto"
            src="/assets/images/shopee.png"
            alt="amazon"
          />
        </button>
      </div>
    </div>
  );
}

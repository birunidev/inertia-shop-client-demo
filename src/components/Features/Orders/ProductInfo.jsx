import OrderedItems from "components/UI/Orders/OrderedItems";
import React from "react";

export default function ProductInfo() {
  return (
    <div className="space-y-4">
      <p className="font-semibold">Product Information</p>
      <OrderedItems />
    </div>
  );
}

import React from "react";
import ShippingMethod from "./ShippingMethod";

export default function ShippingMethods() {
  return (
    <div className="space-y-3">
      <p className="text-lg">Shipping Method</p>
      <div className="space-y-4">
        <ShippingMethod />
        <ShippingMethod />
        <ShippingMethod />
      </div>
    </div>
  );
}

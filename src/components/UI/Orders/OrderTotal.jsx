import React from "react";
import DataLabel from "../DataLabel";

export default function OrderTotal() {
  return (
    <div className="space-y-4">
      <DataLabel label="Subtotal" value="IDR 400.000" />
      <DataLabel label="Shipping" value="IDR 20.000" />
      <DataLabel label="Tax(11%)" value="IDR 42.000" />
      <DataLabel
        label="Total"
        value="IDR 420.000"
        valueClassName="text-lg font-semibold"
      />
    </div>
  );
}

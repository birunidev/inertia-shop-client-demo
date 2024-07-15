import DataLabel from "components/UI/DataLabel";
import React from "react";

export default function TotalInfo() {
  return (
    <div className="space-y-3 text-sm">
      <DataLabel flexMode="grid" label="Subtotal" value="Rp. 200.000,00" />
      <DataLabel
        label="Shipping Cost: Jalur Nugraha Ekakurir (JNE) - CTC (2-3 Days)"
        value="Rp. 20.000,00"
        flexMode="grid"
      />
      <DataLabel label="Tax (11%)" value="Rp. 20.000,00" flexMode="grid" />
      <hr />
      <DataLabel
        label="Grand Total"
        valueClassName="text-md md:text-lg text-green-800 font-bold"
        value="Rp. 200.000,00"
        flexMode="grid"
      />
    </div>
  );
}

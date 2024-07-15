import React from "react";
import InfoTable from "./InfoTable";

export default function BillingInfo() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 justify-between gap-6">
      <div>
        <p className="font-semibold">Billing Information</p>
        <InfoTable />
      </div>
      <div>
        <p className="font-semibold">Shipping Information</p>
        <InfoTable />
      </div>
    </div>
  );
}

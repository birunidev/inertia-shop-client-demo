import UserAddressCards from "components/UI/Users/UserAddressCards";
import React from "react";

export default function ShippingAdresses() {
  return (
    <div className="space-y-3">
      <p className="text-lg font-medium">Shipping Information</p>
      <UserAddressCards />
    </div>
  );
}

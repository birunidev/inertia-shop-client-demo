import React from "react";
import OrderInfo from "./OrderInfo";
import BillingInfo from "./BillingInfo";
import ProductInfo from "./ProductInfo";
import TotalInfo from "./TotalInfo";

export default function OrderDetail({ showTitle = true }) {
  return (
    <div className="space-y-6">
      {showTitle && (
        <h2 className="text-xl md:text-3xl">Transaction Details</h2>
      )}
      <OrderInfo />
      <hr />
      <BillingInfo />
      <ProductInfo />
      <TotalInfo />
    </div>
  );
}

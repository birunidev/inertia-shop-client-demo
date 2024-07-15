import React from "react";
import MyOrderItem from "./MyOrderItem";

export default function MyOrderItems() {
  return (
    <div className="space-y-3">
      <MyOrderItem />
      <MyOrderItem />
      <MyOrderItem />
      <MyOrderItem />
    </div>
  );
}

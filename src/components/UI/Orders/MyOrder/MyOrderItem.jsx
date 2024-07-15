import React from "react";
import OrderedItem from "../OrderedItem";
import MyOrderItemInfo from "./MyOrderItemInfo";
import { IconArrowRight } from "@tabler/icons-react";

export default function MyOrderItem({ className }) {
  return (
    <div className={`space-y-5 ${className}`}>
      <MyOrderItemInfo />
      <OrderedItem />
      <OrderedItem />
      <OrderedItem />
      <div className="flex justify-end py-3">
        <button className="btn btn-primary btn-outline">
          Transaction Detail <IconArrowRight />
        </button>
      </div>
    </div>
  );
}

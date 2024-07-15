import React from "react";
import OrderedItem from "./OrderedItem";

export default function OrderedItems({ quantityShowType, wrapperClassName }) {
  return (
    <div className={`space-y-5 ${wrapperClassName}`}>
      <OrderedItem quantityShowType={quantityShowType} />
      <OrderedItem quantityShowType={quantityShowType} />
      <OrderedItem quantityShowType={quantityShowType} />
      <OrderedItem quantityShowType={quantityShowType} />
    </div>
  );
}

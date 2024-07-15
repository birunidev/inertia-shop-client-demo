import OrderedItem from "components/UI/Orders/OrderedItem";
import React from "react";

export default function CartItems() {
  return (
    <div className="space-y-4">
      <OrderedItem
        quantityShowType="badge"
        hasDeleteBtn={true}
        hasQtyAction={true}
      />
      <OrderedItem
        quantityShowType="badge"
        hasDeleteBtn={true}
        hasQtyAction={true}
      />
      <OrderedItem
        quantityShowType="badge"
        hasDeleteBtn={true}
        hasQtyAction={true}
      />
      <OrderedItem
        quantityShowType="badge"
        hasDeleteBtn={true}
        hasQtyAction={true}
      />
    </div>
  );
}

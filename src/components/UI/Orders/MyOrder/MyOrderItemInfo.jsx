import OrderStatusBadge from "components/UI/Badge/OrderStatusBadge";
import React from "react";

export default function MyOrderItemInfo() {
  return (
    <div className="flex items-center gap-3">
      <p>15 Desember 2023</p>
      <OrderStatusBadge value={1} />
      <p>#INV/20221215/MPL/2902281975</p>
    </div>
  );
}

import { orderStatusClassNameMapper, orderStatusMapper } from "constants";
import React from "react";

export default function OrderStatusBadge({ value }) {
  return (
    <span
      className={["badge badge-status", orderStatusClassNameMapper[value]].join(
        " "
      )}
    >
      {orderStatusMapper[value]}
    </span>
  );
}

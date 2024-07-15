import React from "react";
import Empty from "./Empty";

export default function EmptyOrder() {
  return (
    <Empty
      imageClassName="w-[300px] mx-auto"
      description="Oops, you haven't placed any orders yet"
    />
  );
}

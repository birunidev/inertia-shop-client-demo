import OrderDetail from "components/Features/Orders/OrderDetail";
import AccountLayout from "components/Layouts/AccountLayout";
import React from "react";

export default function MyOrderDetail() {
  return (
    <AccountLayout title="Transaction Detail">
      <OrderDetail showTitle={false} />
    </AccountLayout>
  );
}

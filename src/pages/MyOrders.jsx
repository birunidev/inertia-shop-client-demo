import AccountLayout from "components/Layouts/AccountLayout";
import FilterOrder from "components/UI/Orders/MyOrder/FilterOrder";
import MyOrderItems from "components/UI/Orders/MyOrder/MyOrderItems";
import React from "react";

export default function MyOrders() {
  return (
    <AccountLayout title="My Orders">
      <div className="space-y-6 md:space-y-12">
        <FilterOrder />
        {/* <EmptyOrder /> */}
        <MyOrderItems />
        <div className="text-center">
          <button className="btn btn-primary">Load More</button>
        </div>
      </div>
    </AccountLayout>
  );
}

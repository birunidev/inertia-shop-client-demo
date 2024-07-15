import React from "react";
import ShippingMethods from "./ShippingMethods";
import PaymentMethod from "./PaymentMethod";
import OrderedItems from "components/UI/Orders/OrderedItems";
import OrderTotal from "components/UI/Orders/OrderTotal";

export default function CheckoutWrapper({ children }) {
  return (
    <div>
      <div className="flex flex-col items-start gap-12 md:flex-row pb-20">
        <div className="md:w-1/2 space-y-6">
          {children}
          <ShippingMethods />
          <div className="hidden md:block">
            <PaymentMethod />
          </div>
          <button className="btn hidden md:block btn-primary btn-lg btn-block">
            Continue to Payment
          </button>
        </div>
        <div className="md:w-1/2 space-y-6 md:sticky top-[120px]">
          <OrderedItems
            quantityShowType="badge"
            wrapperClassName="max-h-[250px] overflow-y-scroll py-3 px-4"
          />
          <OrderTotal />
          <div className="md:hidden">
            <PaymentMethod />
          </div>
          <button className="btn md:hidden btn-primary btn-lg btn-block">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

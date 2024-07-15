import React from "react";
import CheckoutWrapper from "./CheckoutWrapper";
import ShippingAdresses from "./ShippingAdresses";
import BillingForm from "./BillingForm";

export default function CheckoutWithAddress() {
  return (
    <CheckoutWrapper>
      <BillingForm initialEditing={false} showEditBtn={true} />
      <ShippingAdresses />
    </CheckoutWrapper>
  );
}

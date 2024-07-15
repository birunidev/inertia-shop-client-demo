import BillingForm from "./BillingForm";
import ShippingForm from "./ShippingForm";
import CheckoutWrapper from "./CheckoutWrapper";

export default function CheckoutNonAddress() {
  return (
    <CheckoutWrapper>
      <BillingForm showEditBtn={false} initialEditing={true} />
      <ShippingForm />
    </CheckoutWrapper>
  );
}

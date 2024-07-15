import useBillingForm from "hooks/useBillingForm";
import useShippingForm from "hooks/useShippingForm";
import { createContext } from "react";

export const CheckoutContext = createContext();

export default function CheckoutProvider({ children }) {
  const billingForm = useBillingForm();
  const shippingForm = useShippingForm();

  return (
    <CheckoutContext.Provider
      value={{
        billingForm,
        shippingForm,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

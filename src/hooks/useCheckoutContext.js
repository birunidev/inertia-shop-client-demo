import { CheckoutContext } from "context/CheckoutProvider";
import { useContext } from "react";

export default function useCheckoutContext() {
  return useContext(CheckoutContext);
}

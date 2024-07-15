import React, { useState } from "react";

export default function useShippingMethod() {
  const [shippingMethods, setShippingMethods] = useState([]);

  return { shippingMethods, setShippingMethods };
}

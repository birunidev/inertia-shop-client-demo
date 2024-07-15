import CheckoutNonAddress from "components/Features/Checkout/CheckoutNonAddress";
import CheckoutWithAddress from "components/Features/Checkout/CheckoutWithAddress";
import BaseLayout from "components/Layouts/BaseLayout";
import Section from "components/UI/Wrappers/Section";
import React from "react";

export default function Checkout() {
  return (
    <BaseLayout>
      <Section
        withContainer
        title="Checkout"
        breadcrumbs={[{ name: "Checkout" }]}
      >
        {/* <CheckoutNonAddress /> */}
        <CheckoutWithAddress />
      </Section>
    </BaseLayout>
  );
}

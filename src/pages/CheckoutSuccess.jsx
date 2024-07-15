import OrderDetail from "components/Features/Orders/OrderDetail";
import PlainLayout from "components/Layouts/PlainLayout";
import Success from "components/UI/Alert/Success";
import Section from "components/UI/Wrappers/Section";
import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
  return (
    <PlainLayout>
      <Section withContainer>
        <div className="max-w-[600px] space-y-12 mx-auto">
          <Success
            title="Successfully Place an Order"
            subtitle="You will be redirected to Payment page in 1s"
          />
          <OrderDetail />
          <div className="flex justify-center gap-4">
            <a href="#" target="_blank" className="btn btn-primary">
              Pay Now
            </a>
            <Link to="/shop" className="btn btn-primary btn-outline">
              Go to Shop Page
            </Link>
          </div>
        </div>
      </Section>
    </PlainLayout>
  );
}

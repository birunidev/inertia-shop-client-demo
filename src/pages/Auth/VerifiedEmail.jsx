import AuthWrapper from "components/Features/Auth/AuthWrapper";
import PlainLayout from "components/Layouts/PlainLayout";
import Success from "components/UI/Alert/Success";
import React from "react";
import { Link } from "react-router-dom";

export default function VerifiedEmail() {
  return (
    <PlainLayout>
      <AuthWrapper showImage={false} title="">
        <div className="space-y-6 text-center">
          <Success
            title="Email Verified"
            subtitle="Thank you for the verification, Happy Shopping!"
          />
          <Link to="/shop" className="btn btn-primary">
            Explore our Products
          </Link>
        </div>
      </AuthWrapper>
    </PlainLayout>
  );
}

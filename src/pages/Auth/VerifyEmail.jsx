import AuthWrapper from "components/Features/Auth/AuthWrapper";
import PlainLayout from "components/Layouts/PlainLayout";
import React from "react";

export default function VerifyEmail() {
  return (
    <PlainLayout>
      <AuthWrapper
        titlePosition="center"
        title="Verify Email"
        showImage={false}
      >
        <div className="space-y-6 text-center">
          <p>
            Thanks for signing up! Before getting started, could you verify your
            email address by clicking on the link we just emailed to you? If you
            didn't receive the email, we will gladly send you another.
          </p>
          <button className="btn btn-primary">Resend Verification Email</button>
        </div>
      </AuthWrapper>
    </PlainLayout>
  );
}

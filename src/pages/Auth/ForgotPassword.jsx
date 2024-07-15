import AuthForm from "components/Features/Auth/AuthForm";
import AuthWrapper from "components/Features/Auth/AuthWrapper";
import BaseLayout from "components/Layouts/BaseLayout";
import React from "react";

export default function ForgotPassword() {
  return (
    <BaseLayout hideFooter={true}>
      <AuthWrapper title="Forgot Password">
        <AuthForm
          forms={[
            {
              label: "Email",
              name: "email",
              type: "input",
            },
          ]}
          onSubmit={() => {}}
          btnText="Send Reset Password Link"
          bottomLink={{
            label: "We Will send the password link to your email",
            link: "#",
          }}
        />
      </AuthWrapper>
    </BaseLayout>
  );
}

import AuthForm from "components/Features/Auth/AuthForm";
import AuthWrapper from "components/Features/Auth/AuthWrapper";
import PlainLayout from "components/Layouts/PlainLayout";
import React from "react";

export default function ResetPassword() {
  return (
    <PlainLayout hideFooter={true}>
      <AuthWrapper title="Reset Password">
        <AuthForm
          forms={[
            {
              label: "New Password",
              name: "password",
              type: "input",
              id: "password",
            },
            {
              label: "Confirm New Password",
              name: "password_confirmation",
              type: "input",
              id: "password_confirmation",
            },
          ]}
          onSubmit={() => {}}
          btnText="Send Reset Password Link"
        />
      </AuthWrapper>
    </PlainLayout>
  );
}

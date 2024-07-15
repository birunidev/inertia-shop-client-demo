import AuthForm from "components/Features/Auth/AuthForm";
import AuthWrapper from "components/Features/Auth/AuthWrapper";
import BaseLayout from "components/Layouts/BaseLayout";
import React from "react";

export default function Login() {
  return (
    <BaseLayout hideFooter={true}>
      <AuthWrapper title="Login">
        <AuthForm
          forms={[
            {
              label: "Email",
              name: "email",
              type: "input",
              placeholder: "Enter your email",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              placeholder: "Enter your password",
            },
          ]}
          onSubmit={() => {}}
          btnText="Login"
          bottomLink={{
            label: "Doesn't have an account? Register now",
            link: "/auth/register",
          }}
        />
      </AuthWrapper>
    </BaseLayout>
  );
}

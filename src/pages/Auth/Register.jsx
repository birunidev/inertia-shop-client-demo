import AuthForm from "components/Features/Auth/AuthForm";
import AuthWrapper from "components/Features/Auth/AuthWrapper";
import BaseLayout from "components/Layouts/BaseLayout";
import React from "react";

export default function Register() {
  return (
    <BaseLayout hideFooter={true}>
      <AuthWrapper title="Register">
        <AuthForm
          forms={[
            {
              label: "Name",
              name: "name",
              type: "input",
            },
            {
              label: "Email",
              name: "email",
              type: "input",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
            },
            {
              type: "password",
              label: "Confirm Password",
              name: "password_confirmation",
            },
          ]}
          onSubmit={() => {}}
          btnText="Login"
          bottomLink={{
            label: "Already have an account? Login now",
            link: "/auth/login",
          }}
        />
      </AuthWrapper>
    </BaseLayout>
  );
}

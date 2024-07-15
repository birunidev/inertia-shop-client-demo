import AccountLayout from "components/Layouts/AccountLayout";
import Forms from "components/UI/Forms";
import { accountForms, billingForms } from "constants";
import React from "react";

export default function MyAccount() {
  return (
    <AccountLayout title="Billing Information">
      <Forms
        {...{
          forms: billingForms.map((form) => ({
            ...form,
            error: "",
            value: "",
            onChange: () => {},
            onBlur: () => {},
          })),
        }}
      />
      <div className="text-right">
        <button className="btn btn-primary">Save</button>
      </div>
      <div className="pt-12 space-y-4">
        <h1 className="text-xl xl:text-4xl">Account Information</h1>
        <Forms
          {...{
            forms: accountForms.map((form) => ({
              ...form,
              error: "",
              value: "",
              onChange: () => {},
              onBlur: () => {},
            })),
          }}
        />
        <div className="text-right">
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </AccountLayout>
  );
}

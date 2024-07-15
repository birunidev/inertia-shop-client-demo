import { IconEdit } from "@tabler/icons-react";
import DataLabel from "components/UI/DataLabel";
import Forms from "components/UI/Forms";
import { billingForms } from "constants";
import useCheckoutContext from "hooks/useCheckoutContext";
import { useCallback, useEffect } from "react";

export default function BillingForm({
  showEditBtn = false,
  initialEditing = true,
}) {
  const { billingForm } = useCheckoutContext();

  const checkError = useCallback(
    (field) => {
      return billingForm.errors[field] && billingForm.touched[field]
        ? billingForm.errors[field]
        : "";
    },
    [billingForm]
  );

  useEffect(() => {
    if (initialEditing) {
      billingForm.setEditing(true);
    }
  }, [initialEditing]);

  const toggleEditing = () => {
    if (billingForm.editing) {
      billingForm.submitForm();
    } else {
      billingForm.setEditing(true);
    }
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <p className="text-lg font-medium">Billing Information</p>
        {showEditBtn && (
          <button type="button" onClick={toggleEditing}>
            {billingForm.editing ? (
              <span className="font-medium">Save</span>
            ) : (
              <IconEdit stroke={1} />
            )}
          </button>
        )}
      </div>
      {billingForm.editing ? (
        <Forms
          {...{
            forms: billingForms.map((form) => ({
              ...form,
              error: checkError(form.name),
              value: billingForm.values[form.name],
              onChange: billingForm.handleChange,
              onBlur: billingForm.handleBlur,
            })),
          }}
        />
      ) : (
        <div className="space-y-3 pt-3">
          <DataLabel
            label="Billing Name"
            value={billingForm?.values?.billing_name ?? "-"}
          />
          <DataLabel
            label="Billing Email"
            value={billingForm?.values?.billing_email ?? "-"}
          />
          <DataLabel
            label="Billing Phone"
            value={billingForm?.values?.billing_phone ?? "-"}
          />
        </div>
      )}
    </div>
  );
}

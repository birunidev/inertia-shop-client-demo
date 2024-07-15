import Forms from "components/UI/Forms";
import useCheckoutContext from "hooks/useCheckoutContext";
import { useCallback } from "react";

export default function ShippingForm() {
  const { shippingForm } = useCheckoutContext();

  const checkError = useCallback(
    (field) => {
      return shippingForm.errors[field] && shippingForm.touched[field]
        ? shippingForm.errors[field]
        : "";
    },
    [shippingForm]
  );

  return (
    <div className="space-y-1">
      <p className="text-lg font-medium">Shipping Information</p>
      <Forms
        {...{
          forms: [
            {
              id: "shipping_name",
              label: "Name",
              type: "input",
              error: checkError("shipping_name"),
              value: shippingForm.values.shipping_name,
              onChange: shippingForm.handleChange,
              onBlur: shippingForm.handleBlur,
              name: "shipping_name",
            },
            {
              id: "shipping_email",
              label: "Email Address",
              type: "input",
              error: checkError("shipping_email"),
              value: shippingForm.values.shipping_email,
              onChange: shippingForm.handleChange,
              onBlur: shippingForm.handleBlur,
              name: "shipping_email",
            },
            {
              id: "shipping_phone",
              label: "Phone",
              type: "input",
              error: checkError("shipping_phone"),
              value: shippingForm.values.shipping_phone,
              onChange: shippingForm.handleChange,
              onBlur: shippingForm.handleBlur,
              name: "shipping_phone",
            },
            {
              id: "shipping_address",
              label: "Street Address",
              type: "textarea",
              error: checkError("shipping_address"),
              value: shippingForm.values.shipping_address,
              onChange: shippingForm.handleChange,
              onBlur: shippingForm.handleBlur,
              name: "shipping_address",
            },
            {
              id: "shipping_province_id",
              label: "Province",
              type: "select",
              error: checkError("shipping_province_id"),
              value: shippingForm.values.shipping_province_id,
              onChange: shippingForm.handleChange,
              onBlur: shippingForm.handleBlur,
              name: "shipping_province_id",
              options: [
                { value: "1", label: "DKI Jakarta" },
                { value: "2", label: "Jawa Barat" },
                { value: "3", label: "Jawa Tengah" },
              ],
            },
            {
              id: "shipping_city_id",
              label: "City",
              type: "select",
              error: checkError("shipping_city_id"),
              value: shippingForm.values.shipping_city_id,
              onChange: shippingForm.handleChange,
              onBlur: shippingForm.handleBlur,
              name: "shipping_city_id",
              options: [
                { value: "1", label: "DKI Jakarta" },
                { value: "2", label: "Jawa Barat" },
                { value: "3", label: "Jawa Tengah" },
              ],
            },
            {
              id: "shipping_subdistrict_name",
              label: "Subdistrict",
              type: "input",
              error: checkError("shipping_subdistrict_name"),
              value: shippingForm.values.shipping_subdistrict_name,
              onChange: shippingForm.handleChange,
              onBlur: shippingForm.handleBlur,
              name: "shipping_subdistrict_name",
            },
          ],
        }}
      />
    </div>
  );
}

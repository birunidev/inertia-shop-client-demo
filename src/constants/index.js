export const orderStatusMapper = {
  1: "Pending Payment",
  2: "Processing",
  3: "Ready To Ship",
  4: "Shipped",
  5: "Completed",
  6: "Cancelled",
};

export const orderStatusClassNameMapper = {
  1: "badge-pending-payment",
  2: "badge-processing",
  3: "badge-ready-to-ship",
  4: "badge-shipped",
  5: "badge-completed",
  6: "badge-cancelled",
};

export const paymentStatusMapper = {
  0: "Unpaid",
  1: "Paid",
  2: "Cancelled",
  3: "Expired",
};

export const paymentStatusClassNameMapper = {
  0: "text-red-500",
  1: "text-green-600",
  2: "text-yellow-500",
  3: "text-gray-500",
};

export const statusOptions = [
  {
    value: "",
    label: "All Statuses",
  },
  {
    value: "1",
    label: "Pending Payment",
  },
  {
    value: "2",
    label: "Processing",
  },
  {
    value: "3",
    label: "Ready To Ship",
  },
  {
    value: "4",
    label: "Shipped",
  },
  {
    value: "5",
    label: "Completed",
  },
  {
    value: "6",
    label: "Canceled",
  },
];

export const billingForms = [
  {
    id: "billing_name",
    label: "Name",
    type: "input",
    name: "billing_name",
  },
  {
    id: "billing_email",
    label: "Email Address",
    type: "input",
    name: "billing_email",
  },
  {
    id: "billing_phone",
    label: "Phone",
    type: "input",
    name: "billing_phone",
  },
];

export const accountForms = [
  {
    id: "name",
    label: "Name",
    type: "input",
    name: "name",
  },
  {
    id: "email",
    label: "Email Address",
    type: "input",
    name: "email",
    disabled: true,
  },
  {
    id: "old_password",
    label: "Current Password",
    type: "password",
    name: "old_password",
  },
  {
    id: "password",
    label: "New Password",
    type: "password",
    name: "password",
  },
  {
    id: "password_confirmation",
    label: "Confirm Password",
    type: "password",
    name: "password_confirmation",
  },
];

export const addressForms = [
  {
    id: "title",
    label: "Title",
    type: "input",
    name: "title",
  },
  {
    id: "shipping_name",
    label: "Shipping Name",
    type: "input",
    name: "shipping_name",
  },
  {
    id: "shipping_email",
    label: "Shipping Email",
    type: "input",
    name: "shipping_email",
  },
  {
    id: "shipping_phone",
    label: "Shipping Phone",
    type: "input",
    name: "shipping_phone",
  },
  {
    id: "shipping_address",
    label: "Shipping Address",
    type: "input",
    name: "shipping_address",
  },
  {
    id: "shipping_province_id",
    label: "Province",
    type: "select",
    name: "shipping_province_id",
    options: [],
  },
  {
    id: "shipping_city_id",
    label: "City",
    type: "select",
    name: "shipping_city_id",
    options: [],
  },
  {
    id: "shipping_subdistrict_name",
    label: "Subdistrict",
    type: "input",
    name: "shipping_subdistrict_name",
  },
];

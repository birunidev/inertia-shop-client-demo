import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function useBillingForm() {
  const [editing, setEditing] = useState(false);
  const formik = useFormik({
    initialValues: {
      billing_name: "",
      billing_email: "",
      billing_phone: "",
    },
    validationSchema: Yup.object({
      billing_name: Yup.string().required("Name is required"),
      billing_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      billing_phone: Yup.string()
        .required("Phone is required")
        .matches(/^[0-9]+$/, "Must be only digits"),
    }),
    onSubmit: () => {
      setEditing(false);
    },
  });

  return { ...formik, editing, setEditing };
}

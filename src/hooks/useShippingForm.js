import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function useShippingForm() {
  const formik = useFormik({
    initialValues: {
      shipping_name: "",
      shipping_email: "",
      shipping_phone: "",
      shipping_address: "",
      shipping_province_id: "",
      shipping_city_id: "",
      shipping_subdistrict_name: "",
    },
    validationSchema: Yup.object({
      shipping_name: Yup.string().required("Name is required"),
      shipping_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      shipping_phone: Yup.string()
        .required("Phone is required")
        .matches(/^[0-9]+$/, "Must be only digits"),
      shipping_address: Yup.string().required("Address is required"),
      shipping_province_id: Yup.string().required("Province is required"),
      shipping_city_id: Yup.string().required("City is required"),
      shipping_subdistrict_name: Yup.string().required(
        "Subdistrict is required"
      ),
    }),
  });

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  return { ...formik };
}

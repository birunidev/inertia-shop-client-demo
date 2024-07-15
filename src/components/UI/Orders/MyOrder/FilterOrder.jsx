import FormInput from "components/UI/Forms/FormInput";
import FormSelect from "components/UI/Forms/FormSelect";
import { statusOptions } from "constants";
import React from "react";

export default function FilterOrder() {
  return (
    <div className="flex gap-3 md:items-end flex-col md:flex-row">
      <FormInput label="From Date" type="date" size="small" />
      <FormInput label="To Date" type="date" size="small" />
      <FormSelect label="Status" options={statusOptions} size="small" />
      <button className="btn btn-success btn-outline px-6 mt-3 btn-sm">
        Filter
      </button>
    </div>
  );
}

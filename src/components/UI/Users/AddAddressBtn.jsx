import { IconPlus } from "@tabler/icons-react";
import React from "react";
export default function AddAddressBtn() {
  return (
    <button
      className="space-y-3 text-center block mx-auto w-auto"
      onClick={() => document.getElementById("address-modal").showModal()}
    >
      <span className="w-8 h-8 mx-auto block flex items-center justify-center bg-black rounded-full">
        <IconPlus color="white" stroke={1} />
      </span>
      <span className="block">Add New Address</span>
    </button>
  );
}

import React from "react";
import Forms from "../Forms";
import { addressForms } from "constants";

export default function ModalAddress() {
  return (
    <div>
      <dialog id="address-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add New Address!</h3>
          <div className="space-y-4">
            <Forms
              forms={addressForms.map((form) => ({
                ...form,
              }))}
            />
            <button className="btn btn-primary btn-block">Save</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

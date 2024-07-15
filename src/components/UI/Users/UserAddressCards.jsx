import React from "react";
import UserAddressCard from "./UserAddressCard";

export default function UserAddressCards({ hasAction, hasRadio }) {
  return (
    <div className="space-y-3">
      <UserAddressCard hasAction={hasAction} hasRadio={hasRadio} />
      <UserAddressCard hasAction={hasAction} hasRadio={hasRadio} />
      <UserAddressCard hasAction={hasAction} hasRadio={hasRadio} />
    </div>
  );
}

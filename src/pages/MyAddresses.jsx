import AccountLayout from "components/Layouts/AccountLayout";
import ModalAddress from "components/UI/Modals/ModalAddress";
import AddAddressBtn from "components/UI/Users/AddAddressBtn";
import UserAddressCards from "components/UI/Users/UserAddressCards";
import React from "react";

export default function MyAddresses() {
  return (
    <AccountLayout title="Delivery Addresses">
      <UserAddressCards />
      <AddAddressBtn />
      <ModalAddress />
    </AccountLayout>
  );
}

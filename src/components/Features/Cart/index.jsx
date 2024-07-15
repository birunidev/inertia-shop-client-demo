import { IconX } from "@tabler/icons-react";
import React from "react";
import CartItems from "./CartItems";
import { createPortal } from "react-dom";
import DataLabel from "components/UI/DataLabel";

const CartBackdrop = ({ showCart }) => {
  return (
    <div
      className={[
        "fixed top-0 w-full h-full bg-black",
        showCart ? "bg-opacity-50 z-[999]" : "bg-opacity-0 -z-50",
      ].join(" ")}
    ></div>
  );
};

export default function Cart() {
  return (
    <div className="fixed top-0 z-[1000] w-full max-w-[300px] md:max-w-[450px] bg-white h-full right-0 top-0 p-5 md:p-5">
      <div className="space-y-10 h-full flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-xl">Cart</p>
            <button>
              <IconX />
            </button>
          </div>
          <div>
            <CartItems />
          </div>
        </div>

        <div className="space-y-4 flex flex-col">
          <DataLabel
            label="Subtotal"
            value={<span className="font-medium">Rp 20,000</span>}
          />
          <button className="btn btn-primary">Proceed to Checkout</button>
        </div>
      </div>
      {createPortal(<CartBackdrop showCart={true} />, document.body)}
    </div>
  );
}

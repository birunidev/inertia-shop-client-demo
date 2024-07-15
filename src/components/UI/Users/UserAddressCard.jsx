import { IconCross, IconEdit, IconPencil, IconX } from "@tabler/icons-react";
import React from "react";

export default function UserAddressCard({
  hasAction = true,
  hasRadio = false,
}) {
  return (
    <div className="bg-[#F6F6F6] p-5 rounded-lg space-y-4">
      <div className="flex items-center gap-2">
        {hasRadio && (
          <input type="radio" className="radio radio-sm" name="user_address" />
        )}
        <p className="inline-block">Egi Ghaniyyu</p>
        <span className="px-2 py-1 bg-black text-white text-xs font-medium rounded-lg">
          Default
        </span>
      </div>
      <div className="flex gap-2 items-center justify-between">
        <div>
          <p className="text-sm">
            Jl. Golf no. 69, Kec. Lowokwaru Depan Alfa midi <br /> Kota Malang -
            Jawa Timur
            <br /> Indonesia
          </p>
          <p className="text-sm mt-1">082334638693</p>
        </div>
        {hasAction && (
          <div className="flex gap-1 md:gap-2">
            <button className="">
              <IconEdit stroke={1} />
            </button>
            <button className="">
              <IconX stroke={1} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

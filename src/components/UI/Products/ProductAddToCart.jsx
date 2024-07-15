import React from "react";

const classNameMapper = {
  normal: " py-2 px-6 text-lg w-[60px]",
  small: "py-1 px-2 text-base w-[30px]",
};

export default function ProductAddToCart({ size = "normal" }) {
  return (
    <div className="text-center flex justify-start">
      <button
        className={[
          "bg-white border-2 border-black rounded-[6px_0px_0px_6px]",
          classNameMapper[size],
        ].join(" ")}
      >
        -
      </button>
      <span
        className={[
          "border-2 border-black bg-black text-white inline-block",
          classNameMapper[size],
        ].join(" ")}
      >
        1
      </span>
      <button
        className={[
          "bg-white border-2 border-black rounded-[0px_6px_6px_0px]",
          classNameMapper[size],
        ].join(" ")}
      >
        +
      </button>
    </div>
  );
}

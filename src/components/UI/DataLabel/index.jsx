import React from "react";

export default function DataLabel({
  label,
  value,
  valueClassName,
  labelClassName,
  className,
  flexMode = "flex",
}) {
  return (
    <div
      className={`${
        flexMode === "flex" ? "flex justify-between" : "grid grid-cols-2"
      } ${className}`}
    >
      <p className={labelClassName}>{label}</p>
      <div className={`text-right ${valueClassName}`}>{value}</div>
    </div>
  );
}

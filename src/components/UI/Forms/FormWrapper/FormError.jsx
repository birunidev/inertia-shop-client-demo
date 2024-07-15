import React from "react";

export default function FormError({ error }) {
  return (
    <div className="label">
      <span className="label-text-alt text-error">{error}</span>
    </div>
  );
}

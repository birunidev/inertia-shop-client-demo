import React from "react";
import { Outlet } from "react-router-dom";

export default function RestrictedRoute() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

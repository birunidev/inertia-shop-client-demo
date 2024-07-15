import Header from "components/UI/Header";
import React from "react";

export default function PlainLayout({ children }) {
  return (
    <>
      <Header showNavMenu={false} showNavAction={false} />
      <div className="main-content pt-12 md:pt-20 z-40">{children}</div>
    </>
  );
  {
  }
}

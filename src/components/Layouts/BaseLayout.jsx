import Cart from "components/Features/Cart";
import Footer from "components/UI/Footer";
import Header from "components/UI/Header";
import React from "react";
import { createPortal } from "react-dom";

export default function BaseLayout({ children, hideFooter = false }) {
  return (
    <>
      <Header />
      <div className="main-content pt-12 md:pt-20 z-40">{children}</div>
      {/* {createPortal(<Cart />, document.body)} */}
      {!hideFooter && <Footer />}
    </>
  );
}

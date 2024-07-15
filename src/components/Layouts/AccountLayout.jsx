import Header from "components/UI/Header";
import SideMenu from "components/UI/SideMenu";
import React from "react";

export default function AccountLayout({ children, title }) {
  return (
    <>
      <Header isLoggedIn={true} />
      <div
        className="main-content pt-16 md:pt-32 z-40 md:flex md:items-start
       md:gap-5 xl:gap-12 md:max-w-[97%] md:mx-auto lg:max-w-[85%] xl:max-w-[83%]"
      >
        <SideMenu />
        <div className="max-w-[95%] w-full mx-auto md:max-w-full pb-[10rem]">
          <div className="w-full space-y-12">
            <h1 className="text-xl xl:text-4xl mb-6">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

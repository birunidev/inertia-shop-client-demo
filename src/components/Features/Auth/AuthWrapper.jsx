import React from "react";

export default function AuthWrapper({
  children,
  title,
  handleSubmit,
  showImage = true,
  image = "/assets/images/auth-img.png",
  titlePosition = false,
}) {
  let titleClass = titlePosition === "center" ? "text-center" : "text-left";

  return (
    <div className="py-24 w-full md:flex md:gap-12 md:justify-center custom-container md:items-center">
      {showImage && (
        <div className="hidden md:block md:w-1/2">
          <img src={image} alt="" />
        </div>
      )}

      <form onSubmit={handleSubmit} className="md:w-1/2 space-y-6">
        <h1 className={`text-3xl ${titleClass}`}>{title}</h1>
        {children}
      </form>
    </div>
  );
}

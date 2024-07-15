import React from "react";

export default function Empty({
  description,
  image = "/assets/images/box.png",
  imageClassName,
}) {
  return (
    <div className="text-center space-y-3">
      <img src={image} className={`w-full ${imageClassName}`} alt="" />
      <h2 className="text-sm md:text-base">{description}</h2>
    </div>
  );
}

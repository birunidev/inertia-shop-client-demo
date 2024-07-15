import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryItems() {
  return (
    <div className="flex gap-4 items-start whitespace-nowrap overflow-y-scroll">
      <CategoryItem
        name="New Arrival"
        image="/assets/images/cat-1.png"
        isActive
      />
      <CategoryItem name="Men" image="/assets/images/cat-2.png" />
      <CategoryItem name="Woman" image="/assets/images/cat-3.png" />
      <CategoryItem name="Kids" image="/assets/images/cat-4.png" />
    </div>
  );
}

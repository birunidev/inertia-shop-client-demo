import ProductDetailImage from "components/Features/ShopDetail/ProductDetailImage";
import ProductImageItems from "components/Features/ShopDetail/ProductImageItems";
import ProductMarketplace from "components/Features/ShopDetail/ProductMarketplace";
import ProductTitle from "components/Features/ShopDetail/ProductTitle";
import BaseLayout from "components/Layouts/BaseLayout";
import ProductAddToCart from "components/UI/Products/ProductAddToCart";
import Section from "components/UI/Wrappers/Section";
import React from "react";

export default function ShopDetail() {
  return (
    <BaseLayout>
      <Section withContainer>
        <div className="flex flex-col md:flex-row items-start gap-2 xl:gap-8">
          <ProductDetailImage />
          <div className="flex flex-col justify-between space-y-8">
            <ProductTitle />
            <ProductAddToCart />
            <button className="btn btn-primary btn-block">Add to Cart</button>
            <ProductMarketplace />
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-xl md:text-3xl">Details</p>
          <div className="text-gray-500 leading-relaxed text-sm md:text-base">
            The Plain Basic collection is the realization of a dedicated and
            skilled team of international designers based at our Paris Research
            and Development Center led by Artistic Director Christophe Lemaire.-
            Made from thick, cotton slub twill fabric with a distinctive texture
            for a casual style.- Garment-dyed finish creates a washed-out
            effect.- A workwear-style blouson with a modern, oversized cut.-
            Thick fabric creates a flattering silhouette.- Features a front
            pocket and one interior pocket.- A chinstrap and elastic cuffs help
            keep cold air out. Function details - Fit: Oversized- Pockets: With
            Pockets(Inside pocket(s)) - The images shown may include colors that
            are not available.
            <br />
            <br />
            The Plain Basic collection is the realization of a dedicated and
            skilled team of international designers based at our Paris Research
            and Development Center led by Artistic Director Christophe Lemaire.-
            Made from thick, cotton slub twill fabric with a distinctive texture
            for a casual style.- Garment-dyed finish creates a washed-out
            effect.- A workwear-style blouson with a modern, oversized cut.-
            Thick fabric creates a flattering silhouette.- Features a front
            pocket and one interior pocket.- A chinstrap and elastic cuffs help
            keep cold air out. Function details - Fit: Oversized- Pockets: With
            Pockets(Inside pocket(s)) - The images shown may include colors that
            are not available.
            <br />
            <br />
            The Plain Basic collection is the realization of a dedicated and
            skilled team of international designers based at our Paris Research
            and Development Center led by Artistic Director Christophe Lemaire.-
            Made from thick, cotton slub twill fabric with a distinctive texture
            for a casual style.- Garment-dyed finish creates a washed-out
            effect.- A workwear-style blouson with a modern, oversized cut.-
            Thick fabric creates a flattering silhouette.- Features a front
            pocket and one interior pocket.- A chinstrap and elastic cuffs help
            keep cold air out. Function details - Fit: Oversized- Pockets: With
            Pockets(Inside pocket(s)) - The images shown may include colors that
            are not available.
          </div>
        </div>
        <ProductImageItems />
      </Section>
    </BaseLayout>
  );
}

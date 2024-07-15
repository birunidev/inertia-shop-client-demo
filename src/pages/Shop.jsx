import CategoryItems from "components/Features/Shop/CategoryItems";
import BaseLayout from "components/Layouts/BaseLayout";
import ProductCards from "components/UI/Products/ProductCards";
import Section from "components/UI/Wrappers/Section";

export default function Shop() {
  return (
    <BaseLayout>
      <Section title="Shop" withContainer breadcrumbs={[{ name: "Shop" }]}>
        <div className="space-y-12">
          <CategoryItems />
          <ProductCards />
        </div>
      </Section>
    </BaseLayout>
  );
}

import { featuredProducts } from "@/lib/homepage-data";
import ProductSection from "./ProductSection";

export default function FeaturedProductsSection() {
  return (
    <ProductSection
      eyebrow="Selected catalogue"
      title="Featured Products"
      description="Discover selected products from our wholesale range."
      products={featuredProducts}
      href="/products?featured=true"
    />
  );
}
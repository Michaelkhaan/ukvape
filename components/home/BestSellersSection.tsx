import { bestSellers } from "@/lib/homepage-data";
import ProductSection from "./ProductSection";

export default function BestSellersSection() {
  return (
    <ProductSection
      eyebrow="Popular catalogue"
      title="Best Sellers"
      description="Browse popular products from our trade catalogue."
      products={bestSellers}
      href="/products?sort=best"
    />
  );
}
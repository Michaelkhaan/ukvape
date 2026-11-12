import { newArrivals } from "@/lib/homepage-data";
import ProductSection from "./ProductSection";

export default function NewArrivalsSection() {
  return (
    <ProductSection
      eyebrow="Recently added"
      title="New Arrivals"
      description="Explore the latest eligible products in our wholesale catalogue."
      products={newArrivals}
      href="/products?sort=new"
    />
  );
}
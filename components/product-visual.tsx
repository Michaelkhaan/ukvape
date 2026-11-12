import { Product } from "@/lib/data";

export function ProductVisual({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#f5f7f5] ${large ? "min-h-[420px]" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image}
        alt={product.imageAlt}
        className="h-full w-full object-contain p-8"
        loading="eager"
      />
    </div>
  );
}

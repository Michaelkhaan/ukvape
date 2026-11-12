
import Image from "next/image";
import {
  Package,
  Tag,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import type { Product } from "@/lib/data";

interface BrandProductCardProps {
  product: Product;
}

export default function BrandProductCard({
  product,
}: BrandProductCardProps) {
  const inStock =
    product.stock?.toLowerCase().includes("in stock") ||
    product.stock?.toLowerCase().includes("available");

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e1e8ee] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#079b57]/40 hover:shadow-xl hover:shadow-[#031713]/[0.07]">
      {/* Product Image */}
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7faf8] to-[#eaf2ed] p-7">
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#079b57] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
            {product.badge}
          </span>
        )}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(7,155,87,0.10),transparent_65%)]" />

        <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-110">
          <Image
            src={product.image}
            alt={product.imageAlt || product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white/90 text-[#079b57] shadow-sm">
          <Package size={17} />
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#079b57]">
            {product.brand}
          </span>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${
              inStock
                ? "bg-[#e9f8ef] text-[#07834b]"
                : "bg-[#fff3e8] text-[#b66a21]"
            }`}
          >
            {inStock ? (
              <CheckCircle2 size={12} />
            ) : (
              <AlertCircle size={12} />
            )}
            {product.stock || "Check availability"}
          </span>
        </div>

        <h3 className="min-h-[48px] text-lg font-extrabold leading-6 text-[#17242d] transition-colors group-hover:text-[#079b57]">
          {product.name}
        </h3>

        {product.flavour && (
          <div className="mt-3 flex items-center gap-2 text-sm text-[#6e7d87]">
            <Tag size={14} className="shrink-0 text-[#079b57]" />
            <span>{product.flavour}</span>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-[#e9eef1] pt-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#9aa6ad]">
              Product Category
            </p>
            <p className="mt-1 text-xs font-bold text-[#17242d]">
              {product.category}
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f8ef] text-[#079b57] transition-colors group-hover:bg-[#079b57] group-hover:text-white">
            <Package size={19} />
          </div>
        </div>
      </div>
    </article>
  );
}

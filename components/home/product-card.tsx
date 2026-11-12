import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Package } from "lucide-react";

export interface Product {
  id: string | number;
  name: string;
  brand: string;
  category?: string;
  image: string;
  pack?: string;
  strength?: string;
  battery?: string;
  puffs?: string | number;
  capacity?: string;
  vgpg?: string;
  flavours?: string[];
  description?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group overflow-hidden rounded-2xl border border-[#e1e8ee] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#079b57]/40 hover:shadow-xl hover:shadow-[#079b57]/10"
    >
      {/* Product Image */}
      <div className="relative flex h-[250px] items-center justify-center overflow-hidden bg-[#f5f7fa] p-5">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain transition duration-500 group-hover:scale-105"
          />
        ) : (
          <Package size={50} className="text-[#aab7b0]" />
        )}

        <span className="absolute left-4 top-4 z-10 rounded-full border border-[#079b57]/10 bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#079b57]">
          {product.brand}
        </span>

        {product.isNew && (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-[#079b57] px-3 py-1.5 text-[10px] font-extrabold uppercase text-white">
            New
          </span>
        )}

        {product.isBestSeller && !product.isNew && (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-[#fff3d1] px-3 py-1.5 text-[10px] font-extrabold uppercase text-[#8a6414]">
            Best Seller
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="p-5">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#079b57]">
          {product.category || "Wholesale Product"}
        </p>

        <h3 className="mt-2 min-h-12 text-base font-extrabold leading-6 text-[#17242d] transition group-hover:text-[#079b57]">
          {product.name}
        </h3>

        {/* Specifications */}
        <div className="mt-4 flex min-h-8 flex-wrap gap-2">
          {product.pack && (
            <span className="rounded-md bg-[#f5f7fa] px-2.5 py-1.5 text-[10px] font-semibold text-[#6e7d87]">
              {product.pack}
            </span>
          )}

          {product.strength && (
            <span className="rounded-md bg-[#f5f7fa] px-2.5 py-1.5 text-[10px] font-semibold text-[#6e7d87]">
              {product.strength}
            </span>
          )}

          {product.puffs && (
            <span className="rounded-md bg-[#f5f7fa] px-2.5 py-1.5 text-[10px] font-semibold text-[#6e7d87]">
              {product.puffs} Puffs
            </span>
          )}
        </div>

        {/* Card Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-[#e1e8ee] pt-4">
          <span className="text-xs font-bold text-[#6e7d87]">
            View product details
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f8ef] text-[#079b57] transition group-hover:bg-[#079b57] group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import {
  ArrowUpRight,
  Package,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export interface ProductPageCardData {
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

interface ProductPageCardProps {
  product: ProductPageCardData;
}

export default function ProductPageCard({
  product,
}: ProductPageCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#e5ebe7] bg-white shadow-[0_5px_22px_rgba(20,45,32,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#079b57]/35 hover:shadow-[0_20px_45px_rgba(7,155,87,0.12)]">

      {/* Product Image */}
      <Link
        href={`/products/${product.id}`}
        className="relative block p-3"
      >
        <div className="relative flex h-[200px] items-center justify-center overflow-hidden rounded-[16px] bg-[radial-gradient(circle_at_50%_35%,#ffffff_0%,#f4f8f5_65%,#edf3ef_100%)]">

          {/* Decorative background */}
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#079b57]/[0.045] blur-2xl transition duration-500 group-hover:bg-[#079b57]/[0.10]" />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          {product.image ? (
            <Image
              src={product.image}
              alt={`${product.brand} ${product.name}`}
              loading="lazy"
              width={0}
              height={0}
              unoptimized
              className="relative z-[1] w-full object-contain p-5 transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <Package
              size={58}
              strokeWidth={1.2}
              className="text-[#aab9af]"
            />
          )}

          {/* Top badges */}
          <div className="absolute left-3 top-3 z-10 flex flex-col items-start gap-2">
            {product.isNew && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#079b57] px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-white shadow-sm">
                <Sparkles size={11} />
                New Arrival
              </span>
            )}

            {product.isBestSeller && (
              <span className="rounded-full bg-[#031713] px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-white shadow-sm">
                Best Seller
              </span>
            )}
          </div>

          {product.isFeatured && (
            <span className="absolute right-3 top-3 z-10 rounded-full border border-[#dce9df] bg-white/95 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-[#08784f] shadow-sm">
              Featured
            </span>
          )}

          {/* Hover action */}
          <span className="absolute bottom-3 right-3 z-10 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white text-[#08784f] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={19} />
          </span>
        </div>
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-2">

        {/* Brand and category */}
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#079b57]">
            {product.brand}
          </span>

          {product.category && (
            <span className="max-w-[55%] truncate rounded-md bg-[#f1f6f2] px-2.5 py-1 text-[9px] font-bold text-[#697b70]">
              {product.category}
            </span>
          )}
        </div>

        {/* Product name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="line-clamp-2 min-h-[40px] text-[15px] font-extrabold leading-6 tracking-[-0.025em] text-[#17242d] transition-colors duration-200 group-hover:text-[#079b57]">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        {product.description && (
          <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-[#849087]">
            {product.description}
          </p>
        )}

        {/* Specifications */}
        <div className="mt-4 flex min-h-[20px] flex-wrap gap-1.5">
          {product.pack && (
            <span className="rounded-md border border-[#e8eee9] bg-[#f8faf8] px-2.5 py-1.5 text-[9px] font-bold text-[#53645a]">
              {product.pack}
            </span>
          )}

          {product.strength && (
            <span className="rounded-md border border-[#e8eee9] bg-[#f8faf8] px-2.5 py-1.5 text-[9px] font-bold text-[#53645a]">
              {product.strength}
            </span>
          )}

          {product.battery && (
            <span className="rounded-md border border-[#e8eee9] bg-[#f8faf8] px-2.5 py-1.5 text-[9px] font-bold text-[#53645a]">
              {product.battery}
            </span>
          )}

          {product.puffs && (
            <span className="rounded-md border border-[#e8eee9] bg-[#f8faf8] px-2.5 py-1.5 text-[9px] font-bold text-[#53645a]">
              {product.puffs} Puffs
            </span>
          )}

          {product.capacity && (
            <span className="rounded-md border border-[#e8eee9] bg-[#f8faf8] px-2.5 py-1.5 text-[9px] font-bold text-[#53645a]">
              {product.capacity}
            </span>
          )}
        </div>

        {/* Flavours */}
        {product.flavours && product.flavours.length > 0 && (
          <div className="mt-1">
            <p className="mb-1.5 text-[9px] font-bold uppercase tracking-wider text-[#8a978e]">
              Available flavours
            </p>

            <p className="line-clamp-1 text-[10px] font-medium text-[#53645a]">
              {product.flavours.slice(0, 3).join(" · ")}
              {product.flavours.length > 3 &&
                ` +${product.flavours.length - 3} more`}
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-2 flex items-center justify-between gap-3 border-t border-[#edf1ed] pt-2">

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#34483b]">
              <ShieldCheck
                size={14}
                className="shrink-0 text-[#079b57]"
              />
              Wholesale range
            </div>

            <p className="mt-1 text-[9px] text-[#8b978f]">
              View product information
            </p>
          </div>

          <Link
            href={`/products/${product.id}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#08784f] px-3.5 py-3 text-[9px] font-black uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#05613f] hover:shadow-lg hover:shadow-[#079b57]/20"
          >
            View Details
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}

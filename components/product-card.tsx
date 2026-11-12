// "use client";

// import Link from "next/link";
// import { ArrowUpRight, LockKeyhole } from "lucide-react";
// import { Product } from "@/lib/data";

// export default function ProductCard({ product }: { product: Product }) {
//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#e2e9e2] bg-white shadow-[0_6px_24px_rgba(19,43,27,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#b9d9c3] hover:shadow-[0_20px_48px_rgba(19,43,27,0.12)]">
//       <Link href={`/products/${product.slug}`} className="relative block p-2.5">
//         <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-[14px] bg-[radial-gradient(circle_at_50%_35%,#ffffff_0%,#f4f7f4_58%,#eaf0eb_100%)]">
//           <span className="absolute left-3 top-3 z-10 rounded-md border border-[#dce9df] bg-white/90 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[0.14em] text-[#28734f] shadow-sm">{product.badge || "Trade range"}</span>
//           {/* Use manufacturer-approved product imagery for each exact SKU. */}
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img src={product.image} alt={product.imageAlt} loading="lazy" className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-[1.055]" />
//           <span className="absolute bottom-3 right-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full border border-[#e1e9e2] bg-white text-[#234333] opacity-0 shadow-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight size={16}/></span>
//         </div>
//       </Link>
//       <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
//         <div className="mb-2 flex items-center justify-between gap-2"><span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#168253]">{product.brand}</span><span className="rounded-md bg-[#f2f5f2] px-2 py-1 text-[8px] font-bold text-[#7b8980]">{product.category}</span></div>
//         <Link href={`/products/${product.slug}`} className="text-[14px] font-black leading-5 tracking-[-0.03em] text-[#1d3024] transition hover:text-[#08784f]">{product.name}</Link>
//         <p className="mt-1.5 text-[10px] leading-5 text-[#7c8980]">{product.flavour}</p>
//         <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#edf1ed] pt-3.5 mt-4">
//           <div className="min-w-0"><p className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#34483b]"><LockKeyhole size={11} className="text-[#168253]"/> Trade account pricing</p><p className="mt-1 text-[9px] text-[#8b978f]">Sign in to view availability</p></div>
//           <Link href="/login" className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#08784f] px-3.5 py-2.5 text-[9px] font-black uppercase tracking-[0.06em] text-white transition hover:bg-[#05613f]">Sign in <ArrowUpRight size={12}/></Link>
//         </div>
//       </div>
//     </article>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import { Package, ArrowUpRight } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category?: string;
  image: string;
  pack?: string;
  strength?: string;
  battery?: string;
  puffs?: string | number;
  capacity?: string;
  description?: string;
  flavours?: string[];
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
      className="group overflow-hidden rounded-2xl border border-[#e3e9e6] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#079b57]/40 hover:shadow-xl"
    >
      <div className="relative flex h-[250px] items-center justify-center overflow-hidden bg-[#f8faf9] p-5">
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            quality={90}
            className="object-contain p-4 transition duration-500 group-hover:scale-105"
          />
        ) : (
          <Package size={50} className="text-[#aab7b0]" />
        )}

        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-[#079b57] px-3 py-1 text-xs font-bold text-white">
            NEW
          </span>
        )}

        {product.isBestSeller && (
          <span className="absolute right-3 top-3 rounded-full bg-[#031713] px-3 py-1 text-xs font-bold text-white">
            BEST SELLER
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#079b57]">
          {product.brand}
        </p>

        <h3 className="line-clamp-2 min-h-[48px] text-base font-bold text-[#17242d] transition group-hover:text-[#079b57]">
          {product.name}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.pack && (
            <span className="rounded-md bg-[#f0f5f2] px-2.5 py-1 text-xs text-[#53635b]">
              {product.pack}
            </span>
          )}

          {product.strength && (
            <span className="rounded-md bg-[#f0f5f2] px-2.5 py-1 text-xs text-[#53635b]">
              {product.strength}
            </span>
          )}

          {product.battery && (
            <span className="rounded-md bg-[#f0f5f2] px-2.5 py-1 text-xs text-[#53635b]">
              {product.battery}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#edf0ee] pt-4">
          <span className="text-sm font-semibold text-[#53635b]">
            View product
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4f0ec] text-[#079b57] transition group-hover:bg-[#079b57] group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
}
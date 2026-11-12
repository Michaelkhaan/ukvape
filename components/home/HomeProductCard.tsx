import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import type { HomeProduct } from "@/lib/homepage-data";

interface Props {
  product: HomeProduct;
  onClick?: (product: HomeProduct) => void;
}

export default function HomeProductCard({ product, onClick }: Props) {
  return (
    <article
      onClick={() => onClick?.(product)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-slate-200/70"
    >
      <Link
        href={`/products?search=${encodeURIComponent(product.name)}`}
        className="block"
      >
        <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white p-5">
          {product.isNew && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              New
            </span>
          )}

          {product.isBestSeller && (
            <span className="absolute right-3 top-3 z-10 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Best seller
            </span>
          )}

          <Image
            src={product.image}
            alt={product.name}
            width={0}
            height={0}
            unoptimized
            className="w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
            {product.brand} / {product.category}
          </span>

          <h3 className="mt-2 min-h-12 text-sm font-bold leading-5 text-slate-900">
            {product.name}
          </h3>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              ["Pack", product.pack],
              ["Strength", product.strength],
              ["Battery", product.battery],
              ["Puffs", product.puffs],
              ["Capacity", product.capacity],
              ["VG/PG", product.vgpg],
            ]
              .filter((item) => item[1])
              .slice(0, 4)
              .map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg bg-slate-50 px-2.5 py-2"
                >
                  <span className="block text-[9px] font-medium text-slate-400">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-xs font-bold text-slate-700">
                    {value}
                  </span>
                </div>
              ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
              <LockKeyhole size={13} />
              Trade access required
            </span>

            <ArrowUpRight
              size={18}
              className="text-emerald-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
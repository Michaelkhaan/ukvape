import Link from "next/link";
import { homeBrands } from "@/lib/homepage-data";
import { ArrowUpRight } from "lucide-react";

export default function BrandShowcase() {
  return (
    <section className="py-12">
      <div className="mb-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
          Our catalogue
        </span>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
          Explore Our Brands
        </h2>
      </div>

      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-3 lg:grid-cols-6">
        {homeBrands.map((brand) => (
          <Link
            key={brand}
            href={`/products?brand=${encodeURIComponent(brand)}`}
            className="group flex min-h-24 items-center justify-center gap-2 border-b border-r border-slate-100 p-5 text-center transition hover:bg-emerald-50"
          >
            <span className="text-sm font-black tracking-tight text-slate-700 group-hover:text-emerald-700">
              {brand.toUpperCase()}
            </span>
            <ArrowUpRight
              size={14}
              className="text-slate-300 group-hover:text-emerald-600"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
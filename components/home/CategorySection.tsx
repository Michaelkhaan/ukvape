import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeCategories } from "@/lib/homepage-data";

export default function CategorySection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mb-7">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
          Browse catalogue
        </span>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
          Shop by Category
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Browse available wholesale product categories.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {homeCategories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
          >
            <div className="relative aspect-square overflow-hidden bg-slate-50 p-3">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 50vw, 16vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between gap-2 p-3">
              <span className="text-xs font-bold text-slate-800">
                {category.name}
              </span>
              <ArrowUpRight
                size={15}
                className="shrink-0 text-emerald-600"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
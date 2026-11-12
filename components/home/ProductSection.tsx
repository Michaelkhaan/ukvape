
"use client"

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HomeProduct } from "@/lib/homepage-data";
import HomeProductCard from "./HomeProductCard";
import { useRouter } from "next/navigation";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  products: HomeProduct[];
  href: string;
}

export default function ProductSection({
  eyebrow,
  title,
  description,
  products,
  href,
}: Props) {

  const router = useRouter();

  const handleProductClick = (product: HomeProduct) => {
    console.log("Selected product:", product);
    router.push("/trade-register");
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            {eyebrow}
          </span>

          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        <Link
          href={href}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
        >
          View all
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <HomeProductCard key={product.id} product={product} onClick={handleProductClick} />
        ))}
      </div>
    </section>
  );
}

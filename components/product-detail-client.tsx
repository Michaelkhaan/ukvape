import Link from "next/link";
import SiteLayout from "@/components/site-layout";
import { products } from "@/lib/data";
import { ProductVisual } from "@/components/product-visual";
import ProductCard from "@/components/product-card";
import {
  ArrowUpRight,
  BadgeCheck,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-7xl px-5 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Product not found
          </h1>
          <Link
            href="/products"
            className="mt-5 inline-flex text-sm font-bold text-emerald-700"
          >
            Back to catalogue
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <main className="bg-[#f7f9f7]">
        <div className="mx-auto max-w-[1320px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-emerald-700">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-emerald-700">
              Catalogue
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-800">{product.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_8px_35px_rgba(15,23,42,0.05)] sm:p-5">
              <div className="relative overflow-hidden rounded-[20px] bg-[#f5f7f5]">
                <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-800 shadow-sm">
                  {product.brand}
                </div>
                <div className="h-[390px] sm:h-[520px]">
                  <ProductVisual product={product} large />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex h-20 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-[#f7f9f7] p-2"
                  >
                    <ProductVisual product={product} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center py-2 lg:py-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-800">
                <BadgeCheck size={13} /> Verified trade catalogue
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                {product.brand} <span className="mx-1 text-slate-300">/</span>{" "}
                {product.category}
              </p>
              <h1 className="mt-3 text-3xl font-black leading-tight tracking-[-0.055em] text-slate-950 sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-slate-500">
                {product.flavour}
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">
                {product.description}
              </p>

              <div className="mt-8 rounded-2xl border border-emerald-100 bg-white p-5 shadow-[0_5px_20px_rgba(15,23,42,0.035)]">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                    <LockKeyhole size={19} />
                  </span>
                  <div>
                    <h2 className="text-sm font-extrabold text-slate-900">
                      Wholesale pricing is for approved trade accounts
                    </h2>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Sign in to view current trade pricing, availability and
                      ordering options.
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#08784f] px-5 py-3.5 text-xs font-extrabold text-white transition hover:bg-[#05613f]"
                  >
                    Sign in for trade pricing <ArrowUpRight size={15} />
                  </Link>
                  <Link
                    href="/trade-register"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-xs font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
                  >
                    Apply for an account
                  </Link>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-4 border-y border-slate-200 py-5 sm:grid-cols-3">
                <div className="flex items-center gap-2.5">
                  <Truck size={18} className="text-emerald-700" />
                  <span className="text-[11px] font-semibold text-slate-700">
                    UK delivery support
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={18} className="text-emerald-700" />
                  <span className="text-[11px] font-semibold text-slate-700">
                    Verified trade access
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PackageCheck size={18} className="text-emerald-700" />
                  <span className="text-[11px] font-semibold text-slate-700">
                    Trade catalogue
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Category
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800">
                    {product.category}
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Availability
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800">
                    {product.stock}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16 border-t border-slate-200 pt-12">
            <div className="mb-7 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Keep exploring
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-slate-900">
                  Related catalogue picks
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800"
              >
                View catalogue <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products
                .filter((item) => item.id !== product.id)
                .slice(0, 4)
                .map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
            </div>
          </section>
        </div>
      </main>
    </SiteLayout>
  );
}

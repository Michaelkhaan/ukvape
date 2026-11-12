import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Package,
  ShieldCheck,
} from "lucide-react";

import SiteLayout from "@/components/site-layout";
import { products1 } from "@/lib/data";


export const instant = false;

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  // Find the individual product range using its ID
  const product = products1.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  

  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f5f7fa] text-[#17242d]">
        {/* Hero */}
        <section className="bg-[#031713] text-white">
          <div className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-white/50">
              <Link href="/" className="hover:text-[#20e980]">
                Home
              </Link>

              <span>/</span>

              <Link href="/products" className="hover:text-[#20e980]">
                Products
              </Link>

              <span>/</span>

              <span className="text-[#20e980]">
                {product.name}
              </span>
            </div>

            <div className="mt-8 max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#20e980]">
                {product.brand} / {product.category}
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold">
                  {product.variants.length} Variations
                </span>

                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold">
                  Wholesale Range
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#079b57]">
                Explore all options
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Available Variations
              </h2>

              <p className="mt-2 text-sm text-[#69756f]">
                Browse all available types in this product range.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#08784f] hover:text-[#05613f]"
            >
              <ArrowLeft size={15} />
              Back to products
            </Link>
          </div>

          {product.variants.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {product.variants.map((variant) => (
                <article
                  key={variant.id}
                  className="group overflow-hidden rounded-2xl border border-[#e1e8ee] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#079b57]/40 hover:shadow-xl"
                >
                  <div className="relative flex h-[250px] items-center justify-center overflow-hidden bg-[#f8faf9] p-5">
                    {variant.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={variant.image}
                        alt={variant.name}
                        loading="lazy"
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Package
                        size={50}
                        className="text-[#aab7b0]"
                      />
                    )}

                    <span className="absolute left-3 top-3 rounded-full bg-[#e4f0ec] px-3 py-1.5 text-[9px] font-black uppercase text-[#08784f]">
                      {product.brand}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#079b57]">
                      {product.name}
                    </p>

                    <h3 className="mt-2 text-lg font-extrabold text-[#17242d]">
                      {variant.name}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {variant.strength && (
                        <span className="rounded-md bg-[#f0f5f2] px-3 py-2 text-xs font-semibold text-[#53635b]">
                          {variant.strength}
                        </span>
                      )}

                      {variant.pack && (
                        <span className="rounded-md bg-[#f0f5f2] px-3 py-2 text-xs font-semibold text-[#53635b]">
                          {variant.pack}
                        </span>
                      )}

                      {variant.flavour && (
                        <span className="rounded-md bg-[#f0f5f2] px-3 py-2 text-xs font-semibold text-[#53635b]">
                          {variant.flavour}
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#edf0ee] pt-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-[#53635b]">
                        <ShieldCheck
                          size={15}
                          className="text-[#079b57]"
                        />
                        Trade range
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-[#079b57] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#dce5df] bg-white px-6 py-16 text-center">
              <Package
                size={36}
                className="mx-auto text-[#079b57]"
              />

              <h3 className="mt-4 text-lg font-bold">
                No variations available
              </h3>

              <p className="mt-2 text-sm text-[#69756f]">
                Product variations will appear here when added.
              </p>
            </div>
          )}
        </section>
      </main>
    </SiteLayout>
  );
}
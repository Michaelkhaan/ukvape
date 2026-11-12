import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronRight,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";

import SiteLayout from "@/components/site-layout";
import { products } from "@/lib/data";
import ProductCard from "@/components/product-card";

export default function Products() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f5f7fa] text-[#17242d]">
        <section className="relative isolate overflow-hidden bg-[#031713] text-white">
          {/* Background Image */}
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Neon Green Vape Warehouse Display.png')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 -z-10 bg-[#031713]/85" />

          {/* Gradient Effects */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(32,233,128,0.19),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(7,155,87,0.18),transparent_35%)]" />

          <div className="absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-[#20e980]/10" />

          <div className="absolute -bottom-60 -left-32 -z-10 h-[450px] w-[450px] rounded-full bg-[#079b57]/10 blur-[100px]" />

          <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#20e980]/25 bg-[#079b57]/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#20e980] sm:text-xs">
                <BadgeCheck size={16} />
                B2B Wholesale Catalogue
              </div>

              <h1 className="mt-7 text-4xl font-black leading-[1] tracking-tight sm:text-5xl md:text-5xl">
                Wholesale Vape
                <span className="block bg-gradient-to-r from-[#20e980] to-white bg-clip-text text-transparent">
                  Products UK
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75">
                Explore our wholesale product catalogue featuring recognised
                brands, reusable pod kits, e-liquids, prefilled pods and
                accessories for verified UK trade customers.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#catalogue"
                  className="inline-flex items-center gap-3 rounded-full bg-[#079b57] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-[#079b57]/20 transition hover:-translate-y-1 hover:bg-[#067c48]"
                >
                  Explore Catalogue
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/trade-register"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:border-[#20e980] hover:bg-white/10"
                >
                  Open Trade Account
                  <ChevronRight size={17} />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[#20e980]" size={22} />
                  <div>
                    <p className="text-xs font-extrabold">Verified Access</p>
                    <p className="mt-1 text-[10px] text-white/50">
                      Trade customers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Truck className="text-[#20e980]" size={22} />
                  <div>
                    <p className="text-xs font-extrabold">UK Distribution</p>
                    <p className="mt-1 text-[10px] text-white/50">
                      Wholesale supply
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Boxes className="text-[#20e980]" size={22} />
                  <div>
                    <p className="text-xs font-extrabold">Product Catalogue</p>
                    <p className="mt-1 text-[10px] text-white/50">
                      Multiple brands
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATALOGUE INTRO */}
        {/* <section
          id="catalogue"
          className="scroll-mt-24 px-4 pt-12 sm:px-6 md:pt-16 lg:px-8"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="flex flex-col justify-between gap-6 border-b border-[#e1e8ee] pb-8 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#079b57]">
                  <span className="h-2 w-2 rounded-full bg-[#079b57]" />
                  Explore Our Collection
                </div>

                <h2 className="text-3xl font-black tracking-tight text-[#17242d] sm:text-4xl">
                  Shop Wholesale Products
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e7d87]">
                  Find products by brand, category or product range. Search our
                  catalogue to discover available wholesale inventory.
                </p>
              </div>
            </div>
          </div>


        </section> */}


<section
  id="catalogue"
  className="scroll-mt-24 px-4 pb-20 pt-12 sm:px-6 md:pt-16 lg:px-8"
>
  <div className="mx-auto max-w-[1500px]">

    {/* Catalogue heading */}
    <div className="flex flex-col justify-between gap-6 border-b border-[#e1e8ee] pb-8 md:flex-row md:items-end">
      <div>
        <div className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#079b57]">
          <span className="h-2 w-2 rounded-full bg-[#079b57]" />
          Explore Our Collection
        </div>

        <h2 className="text-3xl font-black tracking-tight text-[#17242d] sm:text-4xl">
          Shop Wholesale Products
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e7d87]">
          Find products by brand, category or product range.
          Search our catalogue to discover available wholesale inventory.
        </p>
      </div>

      {/* Product count */}
      <div className="flex items-center gap-3 self-start rounded-xl border border-[#e1e8ee] bg-white px-4 py-3 md:self-auto">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f7ed] text-[#079b57]">
          <ShoppingBag size={18} />
        </div>

        <div>
          <p className="text-lg font-black leading-none text-[#17242d]">
            {products.length}
          </p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#829099]">
            Products available
          </p>
        </div>
      </div>
    </div>

    {/* Products grid */}
    {products.length > 0 ? (
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <div className="mt-10 rounded-2xl border border-dashed border-[#dce5df] bg-white px-6 py-16 text-center">
        <ShoppingBag
          size={36}
          className="mx-auto text-[#079b57]"
        />

        <h3 className="mt-4 text-lg font-bold text-[#17242d]">
          No products available
        </h3>

        <p className="mt-2 text-sm text-[#69756f]">
          Please check back soon for new products.
        </p>
      </div>
    )}

  </div>
</section>


        {/* PRODUCT FILTERS AND GRID */}

        {/* TRADE CTA */}
        <section className="px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-2xl bg-[#031713] text-white">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('/Neon Green Vape Warehouse Display.png')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00140e]/80 via-[#00140e]/45 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[300px] w-full flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[360px] md:min-h-[420px] lg:min-h-0 lg:aspect-[2/1] lg:w-[56%] lg:px-8">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00e995] bg-[#031713]/50 text-[#20e980] sm:h-14 sm:w-14">
                <Store size={25} />
              </div>

              {/* Subtitle */}
              <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#20e980] sm:text-xs md:text-sm">
                Verified Wholesale Access
              </p>

              {/* Heading */}
              <h2 className="mt-3 text-2xl font-black leading-[1.05] tracking-tight sm:text-3xl md:text-4xl lg:text-[clamp(32px,3.5vw,54px)]">
                <span className="block text-white">Unlock Wholesale</span>
                <span className="block text-[#00e995]">Pricing</span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-3 max-w-lg text-xs font-semibold leading-6 text-white/85 sm:text-sm md:text-base">
                Apply for a verified trade account to access
                <br className="hidden sm:block" />
                wholesale pricing and retailer ordering.
              </p>

              {/* Button */}
              <Link
                href="/trade-register"
                className="mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-[#00d991] px-6 py-3 text-xs font-extrabold text-[#031713] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20e980] sm:px-8 sm:py-3.5 sm:text-sm md:text-base"
              >
                Apply for Trade Access
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className="border-t border-[#e1e8ee] bg-white px-4 py-7 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1500px] items-start gap-3">
            <ShieldCheck size={21} className="mt-0.5 shrink-0 text-[#079b57]" />

            <div>
              <h3 className="text-xs font-extrabold text-[#17242d]">
                Trade Supply and Compliance
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#6e7d87]">
                Product information is provided for legally eligible business
                customers. All products and supply are subject to applicable
                laws and regulations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

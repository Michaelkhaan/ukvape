"use client"

import Link from "next/link";
import SiteLayout from "@/components/site-layout";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronRight,
  Flame,
  Package,
  Search,
  ShieldCheck,
  Store,
  Truck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import BestSellerProductCard from "@/components/best-seller-product-card";
import { useState } from "react";

const products = [
  {
    name: "Hayati Pro Ultra+ Kit Juicy Peach 20mg",
    slug: "hayati-pro-ultra-plus-kit-juicy-peach-20mg",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "Best Seller",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra+ Kit Cherry Ice 20mg",
    slug: "hayati-pro-ultra-plus-kit-cherry-ice-20mg",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "Best Seller",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra Plus Kit Strawberry Ice",
    slug: "hayati-pro-ultra-plus-kit-strawberry-ice",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "New",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra Plus Kit Grape GB / Blue Razz GB",
    slug: "hayati-pro-ultra-plus-kit-grape-blue-razz",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "Featured",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra Plus Kit H' Berg / P' Man",
    slug: "hayati-pro-ultra-plus-kit-h-berg-p-man",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra+ Kit Juicy Peach 20mg",
    slug: "hayati-pro-ultra-plus-kit-juicy-peach-20mg",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "Best Seller",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra+ Kit Cherry Ice 20mg",
    slug: "hayati-pro-ultra-plus-kit-cherry-ice-20mg",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "Best Seller",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra Plus Kit Strawberry Ice",
    slug: "hayati-pro-ultra-plus-kit-strawberry-ice",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "New",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra Plus Kit Grape GB / Blue Razz GB",
    slug: "hayati-pro-ultra-plus-kit-grape-blue-razz",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "Featured",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra Plus Kit H' Berg / P' Man",
    slug: "hayati-pro-ultra-plus-kit-h-berg-p-man",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra+ Kit Juicy Peach 20mg",
    slug: "hayati-pro-ultra-plus-kit-juicy-peach-20mg",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "Best Seller",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra+ Kit Cherry Ice 20mg",
    slug: "hayati-pro-ultra-plus-kit-cherry-ice-20mg",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "Best Seller",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra Plus Kit Strawberry Ice",
    slug: "hayati-pro-ultra-plus-kit-strawberry-ice",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "New",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra Plus Kit Grape GB / Blue Razz GB",
    slug: "hayati-pro-ultra-plus-kit-grape-blue-razz",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    badge: "Featured",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
  {
    name: "Hayati Pro Ultra Plus Kit H' Berg / P' Man",
    slug: "hayati-pro-ultra-plus-kit-h-berg-p-man",
    category: "Pod Kits",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    image:
      "https://globalbargain.co.uk/uploads/products/f3dde22c-c3b1-4721-98f3-a2dc32b78dab.webp",
  },
];

const categories = ["All Products", "Pod Kits", "Pods"];

const popularCategories = [
  "Nic Pouches",
  "E-liquids",
  "Pods",
  "Vape Kits",
  "Coils + Tanks",
  "Vape Accessories",
];

const brands = [
  "BAR FUEL",
  "BAR JUICE",
  "BIG BOLD",
  "CRYSTAL CLEAR",
  "DINNER LADY",
  "DOOZY",
];

export default function BestSellersPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage,
  );
  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f5f7fa] text-[#17242d]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#031713] text-white">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Neon Green Vape Warehouse Display.png')",
            }}
          />

          <div className="absolute inset-0 -z-10 bg-[#031713]/85" />

          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(32,233,128,0.2),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(7,155,87,0.2),transparent_35%)]" />

          <div className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#20e980]/25 bg-[#079b57]/15 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#20e980]">
                <Flame size={16} />
                High Demand Products
              </div>

              <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight">
                Best Selling
                <span className="block bg-gradient-to-r from-[#20e980] to-white bg-clip-text text-transparent">
                  Wholesale Products
                </span>
                <span className="block text-white">UK</span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-8 text-white/70">
                Explore popular products and recognised wholesale brands in our
                trade catalogue. Product information is provided for eligible
                business customers.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#best-selling-products"
                  className="inline-flex items-center gap-3 rounded-full bg-[#079b57] px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#067c48]"
                >
                  Explore Products
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:border-[#20e980]"
                >
                  Browse Catalogue
                  <ChevronRight size={17} />
                </Link>
              </div>

              <div className="mt-12 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[#20e980]" size={24} />
                  <div>
                    <p className="text-xs font-extrabold">Verified Access</p>
                    <p className="mt-1 text-[10px] text-white/50">
                      Trade customers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Truck className="text-[#20e980]" size={24} />
                  <div>
                    <p className="text-xs font-extrabold">UK Distribution</p>
                    <p className="mt-1 text-[10px] text-white/50">
                      Wholesale supply
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Boxes className="text-[#20e980]" size={24} />
                  <div>
                    <p className="text-xs font-extrabold">Popular Products</p>
                    <p className="mt-1 text-[10px] text-white/50">
                      Product discovery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT INTRO */}
        <section
          id="best-selling-products"
          className="scroll-mt-24 px-4 pt-14 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="flex flex-col justify-between gap-5 border-b border-[#e1e8ee] pb-8 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#079b57]">
                  <span className="h-2 w-2 rounded-full bg-[#079b57]" />
                  Retailer Demand
                </div>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Popular Wholesale Products
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e7d87]">
                  Explore the products featured in the bestselling catalogue.
                  Select a product to view its individual product information.
                </p>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e9f8ef] px-4 py-2 text-xs font-bold text-[#079b57]">
                <BadgeCheck size={15} />
                {products.length} Listed Products
              </span>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID */}
        {/* PRODUCT GRID */}
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentProducts.map((product) => (
                <BestSellerProductCard key={product.slug} product={product} />
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#e1e8ee] pt-7 sm:flex-row">
                <p className="text-sm text-[#6e7d87]">
                  Showing{" "}
                  <span className="font-bold text-[#17242d]">
                    {startIndex + 1}
                  </span>
                  {" - "}
                  <span className="font-bold text-[#17242d]">
                    {Math.min(startIndex + productsPerPage, products.length)}
                  </span>
                  {" of "}
                  <span className="font-bold text-[#17242d]">
                    {products.length}
                  </span>{" "}
                  products
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="flex h-10 items-center gap-2 rounded-lg border border-[#e1e8ee] bg-white px-4 text-xs font-bold text-[#17242d] transition hover:border-[#079b57] hover:text-[#079b57] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight className="rotate-180" size={15} />
                    Previous
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                  ).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-10 w-10 rounded-lg text-xs font-extrabold transition ${
                        currentPage === page
                          ? "bg-[#079b57] text-white shadow-md shadow-[#079b57]/20"
                          : "border border-[#e1e8ee] bg-white text-[#17242d] hover:border-[#079b57] hover:text-[#079b57]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="flex h-10 items-center gap-2 rounded-lg border border-[#e1e8ee] bg-white px-4 text-xs font-bold text-[#17242d] transition hover:border-[#079b57] hover:text-[#079b57] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* RETAILER DEMAND */}
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-[#e1e8ee] bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f8ef] text-[#079b57]">
                <Flame size={23} />
              </div>
              <h3 className="mt-5 text-lg font-black">Retailer Demand</h3>
              <p className="mt-2 text-sm leading-7 text-[#6e7d87]">
                Browse products featured in the wholesale best-seller
                collection.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e1e8ee] bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f8ef] text-[#079b57]">
                <Store size={23} />
              </div>
              <h3 className="mt-5 text-lg font-black">Trusted Brands</h3>
              <p className="mt-2 text-sm leading-7 text-[#6e7d87]">
                Discover recognised names and their wholesale product
                collections.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e1e8ee] bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f8ef] text-[#079b57]">
                <Zap size={23} />
              </div>
              <h3 className="mt-5 text-lg font-black">Product Discovery</h3>
              <p className="mt-2 text-sm leading-7 text-[#6e7d87]">
                Explore available product information and specifications.
              </p>
            </div>
          </div>
        </section>

        {/* POPULAR CATEGORIES */}
        <section className="border-y border-[#e1e8ee] bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1500px]">
            <div className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#079b57]">
                Explore Collections
              </p>
              <h2 className="mt-3 text-3xl font-black">Popular Categories</h2>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {popularCategories.map((category) => (
                <Link
                  key={category}
                  href="/products"
                  className="group rounded-xl border border-[#e1e8ee] bg-[#f8fafb] p-5 text-center transition hover:-translate-y-1 hover:border-[#079b57] hover:bg-[#e9f8ef]"
                >
                  <Package
                    size={25}
                    className="mx-auto text-[#079b57] transition group-hover:scale-110"
                  />
                  <p className="mt-3 text-xs font-extrabold">{category}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-[#079b57]">
                    Explore <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1500px]">
            <div className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#079b57]">
                Wholesale Collections
              </p>
              <h2 className="mt-3 text-3xl font-black">Premium Brands</h2>
              <p className="mt-3 text-sm text-[#6e7d87]">
                Discover brands featured on the reference page.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {brands.map((brand) => (
                <Link
                  key={brand}
                  href={`/brands/${brand.toLowerCase().replaceAll(" ", "-")}`}
                  className="flex min-h-20 items-center justify-center rounded-xl border border-[#e1e8ee] bg-white px-4 py-5 text-center text-xs font-black tracking-wide transition hover:border-[#079b57] hover:bg-[#e9f8ef] hover:text-[#079b57]"
                >
                  {brand}
                </Link>
              ))}
            </div>

            <div className="mt-7 text-center">
              <Link
                href="/brands"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#079b57] hover:text-[#067c48]"
              >
                Explore All Brands <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#e1e8ee] bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#079b57]">
                Need More Information?
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-9 space-y-4">
              {[
                {
                  q: "Which products are featured in the best-seller catalogue?",
                  a: "The source catalogue features pod kits and pods, alongside other wholesale product categories.",
                },
                {
                  q: "Can I view product information before applying for trade access?",
                  a: "You can browse the product catalogue and available product information. Trade pricing is subject to verified account access.",
                },
                {
                  q: "How can I access wholesale pricing?",
                  a: "Apply for a trade account. Pricing and ordering access should be made available only after the appropriate retailer verification.",
                },
                {
                  q: "Does the product catalogue change?",
                  a: "Product collections and availability can change. Keep your own catalogue data updated to reflect current stock and product information.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-[#e1e8ee] bg-[#f8fafb] p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold">
                    {item.q}
                    <ChevronRight
                      size={18}
                      className="shrink-0 text-[#079b57] transition group-open:rotate-90"
                    />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[#6e7d87]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

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
            <ShieldCheck className="mt-0.5 shrink-0 text-[#079b57]" size={21} />
            <div>
              <h3 className="text-xs font-extrabold">
                Trade Supply and Compliance
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#6e7d87]">
                Nicotine products are addictive. Product information is intended
                for legally eligible adult business customers. All supply must
                comply with applicable laws and regulations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

/* PRODUCT GRID WITH SEARCH AND CATEGORY FILTERS */

function ProductGrid() {
  // Kept as a separate client component in the next implementation step
  // if you want interactive search and category filtering.
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-black">Best Selling Products</h2>
            <p className="mt-2 text-sm text-[#6e7d87]">
              Explore the products in this collection.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.slug}
              className="group overflow-hidden rounded-2xl border border-[#e1e8ee] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#079b57]/50 hover:shadow-xl hover:shadow-[#079b57]/10"
            >
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-5">
                {product.badge && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-[#079b57] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
                    {product.badge}
                  </span>
                )}

                <span className="absolute right-4 top-4 z-10 rounded-full border border-[#079b57]/15 bg-[#e9f8ef] px-3 py-1.5 text-[9px] font-extrabold text-[#079b57]">
                  {product.category}
                </span>

                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-5 transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Package size={48} className="text-[#079b57]" />
                )}
              </div>

              <div className="p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#079b57]">
                  HAYATI
                </p>

                <h3 className="mt-2 min-h-[48px] text-sm font-extrabold leading-6 text-[#17242d] transition group-hover:text-[#079b57]">
                  {product.name}
                </h3>

                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-[#e1e8ee] py-4">
                  <div>
                    <p className="text-[10px] text-[#8a969e]">Pack Size</p>
                    <p className="mt-1 text-xs font-extrabold">
                      {product.pack}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8a969e]">Strength</p>
                    <p className="mt-1 text-xs font-extrabold">
                      {product.strength}
                    </p>
                  </div>
                  {product.battery && (
                    <div>
                      <p className="text-[10px] text-[#8a969e]">Battery</p>
                      <p className="mt-1 text-xs font-extrabold">
                        {product.battery}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-[10px] text-[#8a969e]">Puffs</p>
                    <p className="mt-1 text-xs font-extrabold">
                      {product.puffs}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#079b57]">
                    View Product
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f8ef] text-[#079b57] transition group-hover:bg-[#079b57] group-hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

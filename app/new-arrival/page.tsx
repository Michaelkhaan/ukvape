"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SiteLayout from "@/components/site-layout";

import {
  ArrowRight,
  ArrowUpDown,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
  Package,
  LockKeyhole,
  Store,
} from "lucide-react";

import { homeProducts } from "@/lib/homepage-data";

type ProductItem = {
  id: string;
  name: string;
  brand?: string;
  category?: string;
  image?: string;
  pack?: string;
  strength?: string;
  battery?: string;
  puffs?: string;
  capacity?: string;
  isNew?: boolean;
  badge?: string;
  badges?: string[];
};

const PAGE_SIZE = 12;

export default function NewArrival() {
  // Safely read the existing homepage product array
  const allProducts: ProductItem[] = Array.isArray(homeProducts)
    ? (homeProducts as ProductItem[])
    : [];

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  // Select products marked as new.
  // If none are marked, show the first 24 products.
  const newProducts = useMemo(() => {
    const marked = allProducts.filter((product) => {
      return (
        product.isNew === true ||
        product.badge?.toLowerCase() === "new" ||
        product.badges?.some((badge) => badge.toLowerCase() === "new")
      );
    });

    return marked.length > 0 ? marked : allProducts.slice(0, 24);
  }, [allProducts]);

  // Category list
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        newProducts
          .map((product) => product.category)
          .filter((category): category is string => Boolean(category)),
      ),
    );

    return ["All", ...uniqueCategories];
  }, [newProducts]);

  // Search, category filtering and sorting
  const filteredProducts = useMemo(() => {
    let result = [...newProducts];

    if (activeCategory !== "All") {
      result = result.filter((product) => product.category === activeCategory);
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((product) =>
        [product.name, product.brand, product.category, product.strength]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query)),
      );
    }

    if (sort === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "za") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [newProducts, activeCategory, search, sort]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );

  const safePage = Math.min(currentPage, totalPages);

  const paginatedProducts = filteredProducts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
    setCurrentPage(1);
  };

  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f5f7fa] text-[#17242d]">
        {/* ================= HERO ================= */}

        <section className="relative isolate overflow-hidden bg-[#031713] text-white">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/newarrivalheroimage.png')",
            }}
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 -z-10 bg-[#031713]/75" />

          {/* Green gradient effects */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_35%,rgba(7,155,87,0.30),transparent_40%)]" />

          <div className="absolute -right-32 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#20e980]/10 blur-[120px]" />

          <div className="absolute -bottom-40 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-[#079b57]/20 blur-[120px]" />

          <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#20e980]/30 bg-[#20e980]/10 px-4 py-2 text-sm font-semibold text-[#20e980]">
              <Sparkles size={16} />
              Freshly Added to Our Catalogue
            </div>

            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#20e980]">
                {"Discover What's New"}
              </p>

              <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-5xl">
                New
                <span className="block text-[#20e980]">Arrivals.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                Discover the latest additions to our wholesale catalogue.
                Explore new products, browse brands, and find the latest
                catalogue updates.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#new-products"
                  className="inline-flex items-center gap-3 rounded-full bg-[#20e980] px-7 py-4 font-bold text-[#031713] transition hover:-translate-y-1 hover:bg-[#16d875]"
                >
                  Explore New Arrivals
                  <ArrowRight size={19} />
                </a>

                <Link
                  href="/register"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:border-[#20e980] hover:bg-white/10"
                >
                  Trade Registration
                  <ArrowRight size={19} />
                </Link>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap gap-7 border-t border-white/10 pt-7">
              <div className="flex items-center gap-3">
                <Sparkles className="text-[#20e980]" size={23} />
                <span className="text-sm font-semibold text-white/80">
                  Latest Products
                </span>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="text-[#20e980]" size={23} />
                <span className="text-sm font-semibold text-white/80">
                  Trade Catalogue
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="text-[#20e980]" size={23} />
                <span className="text-sm font-semibold text-white/80">
                  Regular Updates
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BREADCRUMB ================= */}

        <div className="border-b border-[#e3e8ec] bg-white">
          <div className="mx-auto flex max-w-[1500px] items-center gap-2 px-5 py-4 sm:px-8 lg:px-12">
            <Link
              href="/"
              className="text-sm text-[#7b8992] hover:text-[#079b57]"
            >
              Home
            </Link>

            <ChevronRight size={15} className="text-[#aab3ba]" />

            <span className="text-sm font-semibold text-[#079b57]">
              New Arrivals
            </span>
          </div>
        </div>

        {/* ================= PRODUCT SECTION ================= */}

        <section
          id="new-products"
          className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
        >
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#079b57]">
                <span className="h-2 w-2 rounded-full bg-[#20e980]" />
                Just Landed
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Latest Products
              </h2>

              <p className="mt-3 text-sm text-[#697781] sm:text-base">
                Explore our latest catalogue additions.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-bold text-[#079b57] transition hover:gap-3"
            >
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* SEARCH AND SORT */}

          <div className="mb-7 rounded-2xl border border-[#e4e9ed] bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-[480px]">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a969e]"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search products, brands or categories..."
                  className="h-12 w-full rounded-xl border border-[#e3e8ec] bg-[#f8fafb] pl-12 pr-11 text-sm outline-none transition placeholder:text-[#9aa5ac] focus:border-[#079b57] focus:ring-4 focus:ring-[#079b57]/10"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setCurrentPage(1);
                    }}
                    aria-label="Clear search"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#89959d] hover:text-[#079b57]"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <ArrowUpDown size={18} className="text-[#079b57]" />

                <label
                  htmlFor="product-sort"
                  className="whitespace-nowrap text-sm font-semibold text-[#697781]"
                >
                  Sort by
                </label>

                <select
                  id="product-sort"
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="h-12 min-w-0 flex-1 rounded-xl border border-[#e3e8ec] bg-[#f8fafb] px-4 text-sm font-semibold outline-none focus:border-[#079b57] sm:min-w-[180px]"
                >
                  <option value="latest">Latest Added</option>
                  <option value="az">Name: A to Z</option>
                  <option value="za">Name: Z to A</option>
                </select>
              </div>
            </div>
          </div>

          {/* CATEGORY FILTERS */}

          <div className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <SlidersHorizontal size={18} className="text-[#079b57]" />

              <h3 className="text-sm font-bold">Browse by Category</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "border-[#079b57] bg-[#079b57] text-white shadow-lg shadow-[#079b57]/15"
                      : "border-[#dfe6e9] bg-white text-[#596872] hover:border-[#079b57] hover:text-[#079b57]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT COUNT */}

          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#e1e7ea] pb-5">
            <p className="text-sm text-[#697781]">
              Showing{" "}
              <span className="font-bold text-[#17242d]">
                {paginatedProducts.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-[#17242d]">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            {(search || activeCategory !== "All") && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-bold text-[#079b57] hover:underline"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* PRODUCT GRID */}

          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedProducts.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-[#e5eaed] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#079b57]/40 hover:shadow-xl hover:shadow-[#17242d]/[0.07]"
                >
                  {/* Product Image */}

                  <Link
                    href={`/product/${product.id}`}
                    className="relative block aspect-square overflow-hidden bg-[#f1f4f5]"
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-6 transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[#a2adb4]">
                        <Package size={54} />
                      </div>
                    )}

                    <span className="absolute left-4 top-4 rounded-full bg-[#20e980] px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-[#031713]">
                      New Arrival
                    </span>
                  </Link>

                  {/* Product Information */}

                  <div className="p-5">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#079b57]">
                        {product.brand || "New Product"}
                      </span>

                      {product.pack && (
                        <span className="rounded-full bg-[#f1f5f3] px-2.5 py-1 text-[10px] font-bold text-[#66756e]">
                          {product.pack}
                        </span>
                      )}
                    </div>

                    <Link href={`/product/${product.id}`}>
                      <h3 className="min-h-[48px] text-base font-extrabold leading-6 text-[#17242d] transition group-hover:text-[#079b57]">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="mt-2 text-xs text-[#89959d]">
                      {product.category || "Catalogue Product"}
                    </p>

                    {/* Specifications */}

                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.strength && (
                        <span className="rounded-lg bg-[#f3f6f7] px-2.5 py-2 text-[11px] font-semibold text-[#52616a]">
                          {product.strength}
                        </span>
                      )}

                      {product.battery && (
                        <span className="rounded-lg bg-[#f3f6f7] px-2.5 py-2 text-[11px] font-semibold text-[#52616a]">
                          {product.battery}
                        </span>
                      )}

                      {product.puffs && (
                        <span className="rounded-lg bg-[#f3f6f7] px-2.5 py-2 text-[11px] font-semibold text-[#52616a]">
                          {product.puffs} puffs
                        </span>
                      )}

                      {product.capacity && (
                        <span className="rounded-lg bg-[#f3f6f7] px-2.5 py-2 text-[11px] font-semibold text-[#52616a]">
                          {product.capacity}
                        </span>
                      )}
                    </div>

                    {/* Trade Price */}

                    <div className="mt-5 border-t border-[#edf0f2] pt-4">
                      <div className="mb-4 flex items-center gap-2 text-sm font-bold text-[#697781]">
                        <LockKeyhole size={15} className="text-[#079b57]" />
                        Login to view trade price
                      </div>

                      <Link
                        href="/trade-register"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#031713] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#079b57]"
                      >
                        View Product
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#d5dfdf] bg-white px-5 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e7f5ee] text-[#079b57]">
                <Search size={28} />
              </div>

              <h3 className="mt-5 text-xl font-black text-[#17242d]">
                No Products Found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#75828b]">
                No products match your current search or category. Try another
                search term or reset the filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-full bg-[#079b57] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#067c46]"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* PAGINATION */}

          {filteredProducts.length > PAGE_SIZE && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                disabled={safePage === 1}
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                aria-label="Previous page"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dfe6e9] bg-white transition hover:border-[#079b57] hover:text-[#079b57] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={19} />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`h-11 min-w-11 rounded-xl px-3 text-sm font-bold transition ${
                      safePage === page
                        ? "bg-[#079b57] text-white"
                        : "border border-[#dfe6e9] bg-white text-[#596872] hover:border-[#079b57] hover:text-[#079b57]"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                type="button"
                disabled={safePage === totalPages}
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages, page + 1))
                }
                aria-label="Next page"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dfe6e9] bg-white transition hover:border-[#079b57] hover:text-[#079b57] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          )}
        </section>

        {/* ================= TRADE CTA ================= */}

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
      </main>
    </SiteLayout>
  );
}

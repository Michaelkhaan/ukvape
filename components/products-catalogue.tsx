/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { products1 } from "@/lib/data";

const PRODUCTS_PER_PAGE = 9;

export default function ProductsCatalogue() {
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const brands = useMemo(
    () => [...new Set(products1.map((product) => product.brand))].sort(),
    []
  );

  const categories = useMemo(
    () =>
      [...new Set(products1.map((product) => product.category).filter(Boolean))].sort(),
    []
  );

  const filteredProducts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return products1.filter((product) => {
      const matchesSearch =
        !searchTerm ||
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        (product.category ?? "").toLowerCase().includes(searchTerm) ||
        (product.description ?? "").toLowerCase().includes(searchTerm) ||
        product.variants.some(
          (variant) =>
            variant.name.toLowerCase().includes(searchTerm) ||
            (variant.flavour ?? "").toLowerCase().includes(searchTerm)
        );

      const matchesBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand);

      const matchesCategory =
        selectedCategories.length === 0 ||
        (product.category
          ? selectedCategories.includes(product.category)
          : false);

      return matchesSearch && matchesBrand && matchesCategory;
    });
  }, [search, selectedBrands, selectedCategories]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const activeFilterCount =
    selectedBrands.length + selectedCategories.length;

  function toggleBrand(brand: string) {
    setSelectedBrands((current) =>
      current.includes(brand)
        ? current.filter((item) => item !== brand)
        : [...current, brand]
    );
    setCurrentPage(1);
  }

  function toggleCategory(category: string) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
    setCurrentPage(1);
  }

  function clearFilters() {
    setSearch("");
    setSelectedBrands([]);
    setSelectedCategories([]);
    setCurrentPage(1);
  }

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)] xl:gap-8">
        {/* FILTER SIDEBAR */}
        <aside className="rounded-2xl border border-[#e1e8ee] bg-white p-5 lg:sticky lg:top-24">
          <div className="flex items-center justify-between border-b border-[#edf0ee] pb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={18} className="text-[#079b57]" />
              <h3 className="text-sm font-extrabold text-[#17242d]">
                Filters
              </h3>

              {activeFilterCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#079b57] px-1.5 text-[10px] font-bold text-white">
                  {activeFilterCount}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={clearFilters}
              className="text-[11px] font-bold text-[#079b57] transition hover:text-[#05613f]"
            >
              Clear all
            </button>
          </div>

          {/* SEARCH */}
          <div className="mt-5">
            <label
              htmlFor="product-search"
              className="mb-2 block text-xs font-extrabold text-[#17242d]"
            >
              Search products
            </label>

            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#829099]"
              />

              <input
                id="product-search"
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search catalogue..."
                className="h-11 w-full rounded-xl border border-[#e1e8ee] bg-[#f8faf9] pl-9 pr-3 text-xs text-[#17242d] outline-none transition placeholder:text-[#9aa6a0] focus:border-[#079b57] focus:bg-white"
              />
            </div>
          </div>

          {/* BRAND FILTER */}
          {brands.length > 0 && (
            <div className="mt-6 border-t border-[#edf0ee] pt-5">
              <h4 className="mb-4 text-xs font-extrabold text-[#17242d]">
                Brand
              </h4>

              <div className="space-y-3">
                {brands.map((brand) => {
                  const checked = selectedBrands.includes(brand);

                  return (
                    <label
                      key={brand}
                      className="flex cursor-pointer items-center justify-between gap-3"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-[17px] w-[17px] items-center justify-center rounded border transition ${
                            checked
                              ? "border-[#079b57] bg-[#079b57] text-white"
                              : "border-[#cbd5ce] bg-white"
                          }`}
                        >
                          {checked && <Check size={12} />}
                        </span>

                        <span className="text-xs font-medium text-[#53635b]">
                          {brand}
                        </span>
                      </span>

                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleBrand(brand)}
                        className="sr-only"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* CATEGORY FILTER */}
          {categories.length > 0 && (
            <div className="mt-6 border-t border-[#edf0ee] pt-5">
              <h4 className="mb-4 text-xs font-extrabold text-[#17242d]">
                Category
              </h4>

              <div className="space-y-3">
                {categories.map((category) => {
                  const checked = selectedCategories.includes(category as any);

                  return (
                    <label
                      key={category}
                      className="flex cursor-pointer items-center gap-3"
                    >
                      <span
                        className={`flex h-[17px] w-[17px] items-center justify-center rounded border transition ${
                          checked
                            ? "border-[#079b57] bg-[#079b57] text-white"
                            : "border-[#cbd5ce] bg-white"
                        }`}
                      >
                        {checked && <Check size={12} />}
                      </span>

                      <span className="text-xs font-medium text-[#53635b]">
                        {category}
                      </span>

                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCategory(category as any)}
                        className="sr-only"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* SIDEBAR FOOTER */}
          <div className="mt-6 rounded-xl bg-[#f0f7f3] p-4">
            <div className="flex items-center gap-2 text-[#08784f]">
              <Filter size={15} />
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                Your selection
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-[#69756f]">
              {filteredProducts.length} product{" "}
              {filteredProducts.length === 1 ? "range" : "ranges"} match your
              current filters.
            </p>
          </div>
        </aside>

        {/* PRODUCTS AREA */}
        <div className="min-w-0">
          {/* RESULTS TOOLBAR */}
          <div className="flex flex-col justify-between gap-3 rounded-xl border border-[#e1e8ee] bg-white p-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-extrabold text-[#17242d]">
                Product Catalogue
              </p>

              <p className="mt-1 text-xs text-[#829099]">
                Showing{" "}
                {filteredProducts.length > 0 ? startIndex + 1 : 0}
                {"–"}
                {Math.min(
                  startIndex + PRODUCTS_PER_PAGE,
                  filteredProducts.length
                )}{" "}
                of {filteredProducts.length} product ranges
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#69756f]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f7ed] text-[#079b57]">
                <ShoppingBagIcon />
              </span>
              {PRODUCTS_PER_PAGE} products per page
            </div>
          </div>

          {/* ACTIVE FILTERS */}
          {(selectedBrands.length > 0 ||
            selectedCategories.length > 0 ||
            search.trim()) && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {search.trim() && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCurrentPage(1);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#e8f7ed] px-3 py-2 text-[10px] font-bold text-[#08784f]"
                >
                  Search: {search}
                  <X size={12} />
                </button>
              )}

              {selectedBrands.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => toggleBrand(brand)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#e8f7ed] px-3 py-2 text-[10px] font-bold text-[#08784f]"
                >
                  {brand}
                  <X size={12} />
                </button>
              ))}

              {selectedCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#e8f7ed] px-3 py-2 text-[10px] font-bold text-[#08784f]"
                >
                  {category}
                  <X size={12} />
                </button>
              ))}
            </div>
          )}

          {/* PRODUCT GRID */}
          {currentProducts.length > 0 ? (
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {currentProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group overflow-hidden rounded-2xl border border-[#e1e8ee] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#079b57]/40 hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-[#f8faf9] p-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-[#e4f0ec] px-3 py-1.5 text-[9px] font-black uppercase text-[#08784f]">
                      {product.brand}
                    </span>

                    <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-[9px] font-bold text-[#53635b] shadow-sm">
                      {product.variants.length} Types
                    </span>
                  </div>

                  {/* INFORMATION */}
                  <div className="p-5">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#079b57]">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-lg font-extrabold text-[#17242d] transition-colors group-hover:text-[#079b57]">
                      {product.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-[#69756f]">
                      {product.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#edf0ee] pt-4">
                      <span className="text-xs font-extrabold text-[#08784f]">
                        View Product Range
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ed] text-[#079b57] transition group-hover:bg-[#079b57] group-hover:text-white">
                        <ArrowRight size={17} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-[#dce5df] bg-white px-6 py-16 text-center">
              <Search
                size={36}
                className="mx-auto text-[#079b57]"
              />

              <h3 className="mt-4 text-lg font-bold text-[#17242d]">
                No products found
              </h3>

              <p className="mt-2 text-sm text-[#69756f]">
                Try changing your search or removing some filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-full bg-[#079b57] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#067c48]"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#e1e8ee] pt-6 sm:flex-row">
              <p className="text-xs text-[#829099]">
                Page {currentPage} of {totalPages}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.max(1, page - 1))
                  }
                  disabled={currentPage === 1}
                  className="flex h-10 items-center gap-2 rounded-lg border border-[#e1e8ee] bg-white px-3 text-xs font-bold text-[#53635b] transition hover:border-[#079b57] hover:text-[#079b57] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft size={16} />
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      aria-current={currentPage === page ? "page" : undefined}
                      className={`h-10 min-w-10 rounded-lg px-3 text-xs font-extrabold transition ${
                        currentPage === page
                          ? "bg-[#079b57] text-white shadow-md shadow-[#079b57]/20"
                          : "border border-[#e1e8ee] bg-white text-[#53635b] hover:border-[#079b57] hover:text-[#079b57]"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.min(totalPages, page + 1)
                    )
                  }
                  disabled={currentPage === totalPages}
                  className="flex h-10 items-center gap-2 rounded-lg border border-[#e1e8ee] bg-white px-3 text-xs font-bold text-[#53635b] transition hover:border-[#079b57] hover:text-[#079b57] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ShoppingBagIcon() {
  return <Search size={16} />;
}

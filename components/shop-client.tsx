"use client";

import { useMemo, useState } from "react";
import ProductCard from "./product-card";
import { products, categories, brands } from "@/lib/data";
import { ArrowDownUp, Filter, Search, SlidersHorizontal, X } from "lucide-react";

export default function ShopClient() {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState("featured");
  const [query, setQuery] = useState("");
  const [mobileFilters, setMobileFilters] = useState(false);

  const filtered = useMemo(() => {
    const list = products.filter((product) =>
      (category === "All" || product.category === category) &&
      (brand === "All" || product.brand === brand) &&
      `${product.name} ${product.flavour} ${product.brand}`.toLowerCase().includes(query.toLowerCase()),
    );
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, brand, sort, query]);

  const reset = () => { setCategory("All"); setBrand("All"); setQuery(""); setSort("featured"); };

  const filters = (
    <div className="space-y-7">
      <div><div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-extrabold text-slate-900">Categories</h3><span className="text-[10px] font-semibold text-slate-400">{categories.length}</span></div><div className="space-y-2.5">{["All", ...categories].map((item) => <label key={item} className="flex cursor-pointer items-center gap-2.5 text-xs text-slate-600"><input type="radio" name="category" checked={category === item} onChange={() => setCategory(item)} className="h-4 w-4 accent-emerald-700"/>{item}</label>)}</div></div>
      <div className="border-t border-slate-100 pt-6"><div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-extrabold text-slate-900">Brands</h3><span className="text-[10px] font-semibold text-slate-400">{brands.length}</span></div><div className="space-y-2.5">{["All", ...brands].map((item) => <label key={item} className="flex cursor-pointer items-center gap-2.5 text-xs text-slate-600"><input type="radio" name="brand" checked={brand === item} onChange={() => setBrand(item)} className="h-4 w-4 accent-emerald-700"/>{item}</label>)}</div></div>
      <button onClick={reset} className="w-full rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-600 transition hover:border-emerald-300 hover:text-emerald-800">Reset all filters</button>
    </div>
  );

  return (
    <div className="grid gap-6 pb-16 lg:grid-cols-[250px_minmax(0,1fr)]">
      <aside className="hidden h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.035)] lg:block"><div className="mb-6 flex items-center gap-2 border-b border-slate-100 pb-5"><SlidersHorizontal size={17} className="text-emerald-700"/><h2 className="text-sm font-extrabold text-slate-900">Refine catalogue</h2></div>{filters}</aside>
      <div className="min-w-0">
        <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_4px_18px_rgba(15,23,42,0.035)] sm:p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div><h2 className="text-xl font-extrabold tracking-[-0.04em] text-slate-900">Wholesale catalogue</h2><p className="mt-1 text-xs text-slate-500">{filtered.length} products in this collection</p></div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <label className="flex h-11 min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-[#f8faf9] px-3 focus-within:border-emerald-500 sm:w-[260px]"><Search size={16} className="shrink-0 text-slate-400"/><input aria-label="Search products" placeholder="Search products..." value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-slate-400"/>{query && <button onClick={() => setQuery("")} aria-label="Clear search"><X size={14}/></button>}</label>
              <label className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 px-3"><ArrowDownUp size={15} className="text-slate-400"/><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products" className="bg-transparent text-xs font-semibold text-slate-700 outline-none"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="name">Name</option></select></label>
              <button onClick={() => setMobileFilters(true)} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-700 lg:hidden"><Filter size={15}/> Filters</button>
            </div>
          </div>
          {(category !== "All" || brand !== "All") && <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4"><span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Active:</span>{category !== "All" && <button onClick={() => setCategory("All")} className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-800">{category} ×</button>}{brand !== "All" && <button onClick={() => setBrand("All")} className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-800">{brand} ×</button>}<button onClick={reset} className="text-[10px] font-bold text-slate-500 underline">Clear all</button></div>}
        </div>

        {filtered.length ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">{filtered.map((product) => <ProductCard key={product.id} product={product}/>)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-500"><Search size={20}/></div><h3 className="mt-4 text-lg font-extrabold text-slate-900">No products found</h3><p className="mt-2 text-sm text-slate-500">Try changing your search or removing a filter.</p><button onClick={reset} className="mt-5 rounded-xl bg-emerald-700 px-5 py-3 text-xs font-bold text-white hover:bg-emerald-800">Clear filters</button></div>}
      </div>

      {mobileFilters && <div className="fixed inset-0 z-[100] bg-slate-950/45 lg:hidden" onClick={() => setMobileFilters(false)}><div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-6" onClick={(event) => event.stopPropagation()}><div className="mb-6 flex items-center justify-between"><h2 className="text-lg font-extrabold text-slate-900">Filter catalogue</h2><button onClick={() => setMobileFilters(false)} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100"><X size={17}/></button></div>{filters}<button onClick={() => setMobileFilters(false)} className="mt-5 w-full rounded-xl bg-emerald-700 py-3.5 text-xs font-extrabold text-white">Show {filtered.length} products</button></div></div>}
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, LockKeyhole } from "lucide-react";
import { Product, money } from "@/lib/data";
import { useCart } from "./cart-provider";

export default function HomeProductTile({ product, image, badge }: { product: Product; image: string; badge: string }) {
  const { add } = useCart();
  return (
    <article className="group relative flex min-w-0 flex-col overflow-hidden rounded-[13px] border border-[#e1e8ef] bg-white shadow-[0_3px_12px_rgba(15,34,50,.055)] transition duration-300 hover:-translate-y-1 hover:border-[#b8d9c5] hover:shadow-[0_12px_25px_rgba(10,45,28,.12)]">
      <div className="relative flex h-[150px] items-center justify-center bg-[linear-gradient(145deg,#fff_0%,#f5f8fb_100%)] sm:h-[168px]">
        <span className={`absolute left-2.5 top-2.5 z-10 rounded-md px-2 py-1 text-[8px] font-black text-white ${badge === "Hot" ? "bg-[#f04427]" : "bg-[#079b57]"}`}>{badge}</span>
        <button aria-label={`Save ${product.name}`} className="absolute right-2.5 top-2.5 z-10 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-[#71808a] shadow-sm transition hover:text-[#079b57]"><Heart size={14}/></button>
        <Link href={`/products/${product.slug}`} className="relative h-full w-full p-3">
          <Image src={image} alt={product.imageAlt} fill sizes="(max-width: 640px) 45vw, 180px" className="object-contain p-3 transition duration-500 group-hover:scale-105" unoptimized/>
        </Link>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-2.5">
        <span className="text-[8px] font-extrabold uppercase tracking-[.13em] text-[#07894e]">{product.brand}</span>
        <Link href={`/products/${product.slug}`} className="mt-1 line-clamp-2 min-h-[30px] text-[10px] font-extrabold leading-[1.45] text-[#14222b] hover:text-[#07894e]">{product.name}</Link>
        <div className="mt-2 flex items-center justify-between gap-2 border-t border-[#edf1f3] pt-2.5">
          <div className="min-w-0"><span className="block text-[11px] font-black text-[#07894e]">{money(product.price)}</span><span className="mt-0.5 flex items-center gap-1 text-[7px] font-semibold text-[#87949b]"><LockKeyhole size={9}/>Trade account rates</span></div>
          <button onClick={() => add(product)} aria-label={`Add ${product.name} to basket`} className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#079b57] to-[#007b49] text-white shadow-[0_4px_10px_rgba(0,130,70,.18)] transition hover:scale-105 hover:from-[#10c968] hover:to-[#079b57]"><ShoppingCart size={14}/></button>
        </div>
      </div>
    </article>
  );
}

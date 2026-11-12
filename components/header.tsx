"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  UserRound,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Truck,
  Mail,
  Phone,
  Headphones,
  Heart,
  LockKeyhole,
} from "lucide-react";
import { useCart } from "./cart-provider";
import Image from "next/image";

const navItems = [
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/products" },
  { label: "Collection", href: "/collection" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_3px_18px_rgba(3,20,14,0.08)]">
      <div className="bg-[#03110f] text-white">
        <div className="mx-auto flex max-w-375 flex-wrap items-center justify-between gap-x-5 gap-y-1 px-4 py-1 text-[10px] font-semibold sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-white/90">
            <span className="inline-flex items-center gap-2">
              <Truck size={13} className="text-[#13df76]" />
              Free Delivery on Orders Over £100
            </span>
            <span className="hidden items-center gap-2 border-l border-white/20 pl-6 sm:inline-flex">
              <ShieldCheck size={13} className="text-[#13df76]" />
              Trade Accounts Available
            </span>
            <span className="hidden items-center gap-2 border-l border-white/20 pl-6 lg:inline-flex">
              <Headphones size={13} className="text-[#13df76]" />
              Excellent Customer Support
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/85">
            <a
              href="tel:+442012345678"
              className="hidden items-center gap-1.5 hover:text-[#27e982] md:inline-flex"
            >
              <Phone size={11} />
              Call Us: 020 1234 5678
            </a>
            <a
              href="mailto:info@globalbargain.co.uk"
              className="hidden items-center gap-1.5 hover:text-[#27e982] xl:inline-flex"
            >
              <Mail size={11} />
              info@globalbargain.co.uk
            </a>
            <Link
            href="/login"
            aria-label="Wishlist and account"
            className="hidden h-9 w-8 place-items-center transition hover:text-[#079b57] lg:grid"
          >
            <Heart size={19} />
          </Link>
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative grid h-9 w-9 place-items-center transition hover:text-[#079b57]"
          >
            <ShoppingCart size={21} />
            <span className="absolute -right-0.5 -top-0.5 grid h-[16px] min-w-[16px] place-items-center rounded-full bg-[#10c968] px-1 text-[8px] font-black text-[#04150e]">
              {count}
            </span>
          </Link>
          </div>
          
        </div>
      </div>

      <div className="mx-auto flex min-h-[66px] max-w-[1500px] items-center gap-4 px-4 sm:px-6 lg:gap-7 lg:px-10">
        <Link
          href="/"
          className="flex w-[190px] shrink-0 items-center gap-2.5"
          aria-label="Global Bargain home"
        >
          <Image src="/logo-mark.webp" alt="UK VapeDistro" width={0} height={0} className="w-full" unoptimized />
          {/* <span className="relative grid h-10 w-10 place-items-center rounded-full border-[3px] border-[#079b57] text-[25px] font-black italic leading-none text-[#079b57] after:absolute after:-right-1 after:bottom-0 after:h-3 after:w-3 after:rounded-full after:border-2 after:border-white after:bg-[#14db75]">
            G
          </span>
          <span className="flex flex-col text-[17px] font-black leading-[0.88] tracking-[-0.055em] text-[#0b1720]">
            GLOBAL<span className="mt-1 text-[#079b57]">BARGAIN</span>
          </span> */}
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center gap-8 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-10 whitespace-nowrap text-[15px] font-semibold! text-[#17232b] transition hover:text-[#079b57]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 text-[#10212a]">
          <Link
              href="/login"
              className="inline-flex items-center gap-1.5 hover:text-[#27e982]"
            >
              <UserRound size={12} />
              Login
            </Link>
            <Link
              href="/trade-register"
              className="hidden items-center gap-1.5 rounded-md bg-[#10c968] px-3 py-1.5 font-extrabold text-[#04150e] transition hover:bg-[#40ed8c] sm:inline-flex"
            >
              <LockKeyhole size={11} />
              Trade Login
            </Link>
          
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-lg border border-[#e5ece8] text-[#10212a] xl:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#e8efeb] bg-white px-4 py-4 shadow-xl xl:hidden">
          <form
            action="/products"
            className="mb-3 flex h-10 overflow-hidden rounded-lg border border-[#dce5e9]"
          >
            <input
              name="q"
              placeholder="Search for products..."
              className="min-w-0 flex-1 px-3 text-xs outline-none"
            />
            <button
              aria-label="Search"
              className="w-11 bg-[#079b57] text-white"
            >
              <Search size={16} className="mx-auto" />
            </button>
          </form>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-[#f4f8f5] px-3 py-3 text-[11px] font-bold text-[#24382d]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[#e7f7ed] px-3 py-3 text-[11px] font-extrabold text-[#087c49]"
            >
              All Categories
            </Link>
            <Link
              href="/trade-register"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[#087c49] px-3 py-3 text-[11px] font-extrabold text-white"
            >
              Trade Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

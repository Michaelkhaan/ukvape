"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  UserRound,
  Menu,
  X,
  ShieldCheck,
  Truck,
  Mail,
  Phone,
  Headphones,
  Heart,
  LockKeyhole,
} from "lucide-react";
import { useCart } from "./cart-provider";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/products" },
  { label: "Collection", href: "/collection" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "New Arrivals", href: "/new-arrival" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_3px_18px_rgba(3,20,14,0.08)]">
      {/* TOP BAR */}
      <div className="bg-[#03110f] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-3 py-2 text-[10px] font-semibold sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/90 sm:gap-x-6">
            <span className="inline-flex items-center gap-1.5">
              <Truck size={13} className="shrink-0 text-[#13df76]" />
              <span>Free Delivery on Orders Over £100</span>
            </span>

            <span className="hidden items-center gap-2 border-l border-white/20 pl-4 sm:inline-flex">
              <ShieldCheck size={13} className="shrink-0 text-[#13df76]" />
              Trade Accounts Available
            </span>

            <span className="hidden items-center gap-2 border-l border-white/20 pl-4 xl:inline-flex">
              <Headphones size={13} className="shrink-0 text-[#13df76]" />
              Excellent Customer Support
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-white/85 sm:gap-4">
            <a
              href="tel:+442012345678"
              className="hidden items-center gap-1.5 transition hover:text-[#27e982] md:inline-flex"
            >
              <Phone size={11} />
              Call Us: 020 1234 5678
            </a>

            <a
              href="mailto:info@globalbargain.co.uk"
              className="hidden items-center gap-1.5 transition hover:text-[#27e982] lg:inline-flex"
            >
              <Mail size={11} />
              info@globalbargain.co.uk
            </a>

            <Link
              href="/login"
              aria-label="Wishlist and account"
              className="hidden h-8 w-8 place-items-center transition hover:text-[#27e982] lg:grid"
            >
              <Heart size={18} />
            </Link>

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="relative grid h-8 w-8 place-items-center transition hover:text-[#27e982]"
            >
              <ShoppingCart size={20} />

              <span className="absolute -right-0.5 -top-0.5 grid h-[16px] min-w-[16px] place-items-center rounded-full bg-[#10c968] px-1 text-[8px] font-black text-[#04150e]">
                {count}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="mx-auto flex min-h-[68px] max-w-[1500px] items-center justify-between gap-3 px-3 sm:px-6 lg:gap-5 lg:px-8 xl:px-10">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex w-[135px] shrink-0 items-center sm:w-[160px] lg:w-[175px] xl:w-[190px]"
          aria-label="Global Bargain home"
        >
          <Image
            src="/logo-mark.webp"
            alt="Global Bargain"
            width={190}
            height={60}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 md:flex 2xl:gap-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative whitespace-nowrap py-6 text-[15px] font-medium transition-colors duration-200
        ${
          isActive(item.href)
            ? "text-[#079b57] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#079b57]"
            : "text-[#17232b] hover:text-[#079b57]"
        }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* HEADER ACTIONS */}
        <div className="flex shrink-0 items-center gap-2 text-[#10212a] sm:gap-3 lg:gap-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs font-semibold transition hover:text-[#079b57] sm:text-sm"
          >
            <UserRound size={16} />
            <span className="hidden sm:inline">Login</span>
          </Link>

          <Link
            href="/trade-register"
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-md bg-[#10c968] px-3 py-2 text-xs font-extrabold text-[#04150e] transition hover:bg-[#40ed8c] sm:inline-flex lg:px-4 lg:text-sm"
          >
            <LockKeyhole size={13} />
            Trade Login
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#e5ece8] text-[#10212a] transition hover:border-[#079b57] hover:text-[#079b57] xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      {open && (
        <div className="border-t border-[#e8efeb] bg-white px-4 py-5 shadow-xl xl:hidden">
          {/* SEARCH */}
          <form
            action="/products"
            className="mb-5 flex h-11 overflow-hidden rounded-xl border border-[#dce5e9] bg-[#f8faf9]"
          >
            <input
              name="q"
              placeholder="Search for products..."
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#17232b] outline-none placeholder:text-[#9aa49f]"
            />

            <button
              type="submit"
              aria-label="Search"
              className="grid w-12 shrink-0 place-items-center bg-[#079b57] text-white transition hover:bg-[#067c46]"
            >
              <Search size={18} />
            </button>
          </form>

          {/* NAVIGATION LINKS */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-11 items-center rounded-xl border border-[#e8efeb] bg-[#f8faf9] px-3 py-3 text-xs font-bold text-[#24382d] transition hover:border-[#079b57] hover:bg-[#e7f7ed] hover:text-[#087c49] sm:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* MOBILE ACTIONS */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              href="/products"
              onClick={closeMenu}
              className="flex min-h-11 items-center justify-center rounded-xl bg-[#e7f7ed] px-3 py-3 text-xs font-extrabold text-[#087c49] transition hover:bg-[#d5f2e0] sm:text-sm"
            >
              All Categories
            </Link>

            <Link
              href="/trade-register"
              onClick={closeMenu}
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#087c49] px-3 py-3 text-xs font-extrabold text-white transition hover:bg-[#06663c] sm:text-sm"
            >
              <LockKeyhole size={14} />
              Trade Account
            </Link>
          </div>

          {/* CONTACT DETAILS */}
          <div className="mt-5 flex flex-col gap-3 border-t border-[#e8efeb] pt-4 text-xs text-[#69756f] sm:flex-row sm:items-center sm:justify-between">
            <a
              href="tel:+442012345678"
              className="inline-flex items-center gap-2 transition hover:text-[#079b57]"
            >
              <Phone size={14} className="text-[#079b57]" />
              020 1234 5678
            </a>

            <a
              href="mailto:info@globalbargain.co.uk"
              className="inline-flex items-center gap-2 transition hover:text-[#079b57]"
            >
              <Mail size={14} className="text-[#079b57]" />
              info@globalbargain.co.uk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

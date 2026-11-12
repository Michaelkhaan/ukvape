"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import SiteLayout from "@/components/site-layout";
import {
  Search,
  ArrowRight,
  Truck,
  ShieldCheck,
  Package,
  Store,
  CheckCircle2,
  Tag,
} from "lucide-react";
import Image from "next/image";

interface Brand {
  name: string;
  slug: string;
  description: string;
  image: string;
}

const brands: Brand[] = [
  {
    name: "ASPIRE",
    slug: "aspire",
    description:
      "Reliable devices, pods and kits built for smooth performance and quality.",
    image: "/aspire.webp",
  },
  {
    name: "BAR FUEL",
    slug: "bar-fuel",
    description: "Powerful flavour profiles and modern product designs.",
    image: "/bar-fuel.webp",
  },
  {
    name: "BAR JUICE",
    slug: "bar-juice",
    description: "Bold flavour profiles and a diverse product catalogue.",
    image: "/bar-juice.webp",
  },
  {
    name: "BIG BOLD",
    slug: "big-bold",
    description: "A premium range of e-liquids with distinctive flavours.",
    image: "/big-bold.webp",
  },
  {
    name: "DINNER LADY",
    slug: "dinner-lady",
    description: "A well-known UK e-liquid brand with a range of flavours.",
    image: "/dinner-lady.webp",
  },
  {
    name: "DOOZY",
    slug: "doozy",
    description: "Expertly crafted e-liquids and a diverse product catalogue.",
    image: "/doozy.webp",
  },
  {
    name: "ELFBAR",
    slug: "elfbar",
    description: "A recognised brand offering a range of vape products.",
    image: "/elfbar.webp",
  },
  {
    name: "ELUX",
    slug: "elux",
    description: "A range of products with distinctive designs.",
    image: "/elux.webp",
  },
  {
    name: "HANGSEN",
    slug: "hangsen",
    description: "A global e-liquid manufacturer known for its product range.",
    image: "/hangsen.webp",
  },
  {
    name: "HAYATI",
    slug: "hayati",
    description: "A wholesale brand offering a range of products.",
    image: "/hayati.webp",
  },
  {
    name: "INNOKIN",
    slug: "innokin",
    description:
      "Innovative vape devices and kits designed around performance.",
    image: "/innokin.webp",
  },
  {
    name: "IVG",
    slug: "ivg",
    description: "A recognised brand offering e-liquids and devices.",
    image: "/ivg.webp",
  },
  {
    name: "JUST JUICE",
    slug: "just-juice",
    description: "A range of e-liquids with diverse flavour profiles.",
    image: "/just-juice.webp",
  },
  {
    name: "KILLA",
    slug: "killa",
    description:
      "A modern brand offering a range of products for trade buyers.",
    image: "/killa.webp",
  },
  {
    name: "KINGSTON",
    slug: "kingston",
    description: "A selection of products for wholesale distribution.",
    image: "/kingston.webp",
  },
  {
    name: "LOST MARY",
    slug: "lost-mary",
    description: "A recognised brand with a range of distinctive products.",
    image: "/lost-mary.webp",
  },
  {
    name: "VAPORESSO",
    slug: "vaporesso",
    description: "Devices, pods and kits engineered around performance.",
    image: "/vaporesso.webp",
  },
];

const benefits = [
  {
    icon: Truck,
    title: "Fast UK Trade Delivery",
    description:
      "Reliable wholesale delivery support for approved UK retailers.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Retailer Access",
    description:
      "Trade pricing available exclusively for verified wholesale accounts.",
  },
  {
    icon: Package,
    title: "Premium Product Catalogue",
    description: "A curated catalogue of products and accessories.",
  },
];

export default function BrandsPage() {
  const [search, setSearch] = useState("");

  const filteredBrands = useMemo(
    () =>
      brands.filter((brand) =>
        brand.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f5f7fa] text-[#17242d]">
        {/* Hero */}

        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#031713] px-5 py-8 text-white">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
            style={{
              backgroundImage: "url('/Neon Green Vape Warehouse Display.png')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031713]/95 via-[#031713]/85 to-[#031713]/55" />

          {/* Green Ambient Effects */}
          <div className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-[#079b57]/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 -z-10 h-80 w-80 rounded-full bg-[#079b57]/15 blur-3xl" />

          <div className="relative mx-auto max-w-[1500px] px-2 sm:px-6 lg:px-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#20e980]/30 bg-[#079b57]/20 px-4 py-2 text-sm font-semibold text-[#20e980] backdrop-blur-sm">
              <Tag size={16} />
              Wholesale Brand Directory
            </div>

            <h1 className="max-w-3xl text-[42px] font-extrabold leading-tight">
              Leading Wholesale
              <span className="block text-[#20e980]">Brands UK</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/80 md:text-sm">
              Explore our brand catalogue and discover a wide range of products
              available for verified UK trade customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#brand-catalogue"
                className="inline-flex items-center gap-2 rounded-full bg-[#079b57] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#067c48]"
              >
                Browse Brands <ArrowRight size={17} />
              </a>

              <Link
                href="/trade-register"
                className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:border-[#20e980] hover:bg-white/10"
              >
                Trade Registration
              </Link>
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 border-t border-white/20 pt-7 sm:grid-cols-3">
              {[
                "Verified Trade Supply",
                "Large Brand Catalogue",
                "UK Wholesale Distribution",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-white/85"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-[#20e980]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Catalogue */}
        <section
          id="brand-catalogue"
          className="px-4 py-10 sm:px-6 md:py-10 lg:px-8"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#079b57]">
                  Our Brands
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight text-[#17242d] md:text-4xl">
                  Browse Brand Catalogue
                </h2>

                <p className="mt-3 text-sm text-[#6e7d87]">
                  Explore our collection of wholesale brands.
                </p>
              </div>

              <div className="rounded-full border border-[#e1e8ee] bg-white px-4 py-2 text-xs font-bold text-[#17242d]">
                {filteredBrands.length} Brands Available
              </div>
            </div>

            {/* Search */}
            <div className="mb-8 max-w-md">
              <div className="flex items-center gap-3 rounded-xl border border-[#e1e8ee] bg-white px-4 py-3 shadow-[0_3px_12px_rgba(14,32,45,.04)] transition focus-within:border-[#079b57] focus-within:ring-2 focus-within:ring-[#079b57]/10">
                <Search size={19} className="text-[#079b57]" />

                <input
                  type="text"
                  placeholder="Search brands..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-sm text-[#17242d] outline-none placeholder:text-[#9aa6ae]"
                />
              </div>
            </div>

            {/* Brand Grid */}
            {filteredBrands.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredBrands.map((brand) => (
                  <Link
                    href={`/brands/${brand.slug}`}
                    key={brand.slug}
                    className="group flex min-h-[290px] flex-col overflow-hidden rounded-2xl border border-[#e1e8ee] bg-white shadow-[0_4px_18px_rgba(14,32,45,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#079b57]/40 hover:shadow-[0_15px_35px_rgba(7,155,87,0.12)]"
                  >
                    {/* Brand Image */}
                    <div className="relative h-44 overflow-hidden bg-[#f5f7fa] sm:h-48">
                      <Image
                        src={brand.image}
                        alt={`${brand.name} brand`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-contain p-5 transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#031713]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Brand Label */}
                      <div className="absolute bottom-3 left-3 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-extrabold tracking-wider text-[#079b57] shadow-sm backdrop-blur-sm">
                        OFFICIAL BRAND
                      </div>
                    </div>

                    {/* Brand Details */}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <h3 className="text-sm font-extrabold text-[#17242d] transition-colors group-hover:text-[#079b57]">
                        {brand.name}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-xs leading-6 text-[#6e7d87]">
                        {brand.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-[#e1e8ee] pt-4">
                        <span className="text-xs font-extrabold text-[#079b57]">
                          View Brand
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9f8ef] text-[#079b57] transition-all duration-300 group-hover:bg-[#079b57] group-hover:text-white">
                          <ArrowRight size={15} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-[#dce5eb] bg-white py-16 text-center">
                <Search className="mx-auto mb-3 text-[#079b57]" size={32} />
                <h3 className="font-bold text-[#17242d]">No brands found</h3>
                <p className="mt-2 text-sm text-[#6e7d87]">
                  Try searching with another brand name.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Wholesale Information */}
        <section className="border-y border-[#e1e8ee] bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-[1500px] items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#079b57]">
                Wholesale Distribution
              </p>

              <h2 className="text-3xl font-extrabold leading-tight text-[#17242d] md:text-4xl">
                UK Wholesale Brand Distribution
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#6e7d87]">
                Explore our wholesale brand catalogue, discover available
                products and browse our selection for verified UK retailers and
                trade buyers.
              </p>

              <p className="mt-3 text-sm leading-8 text-[#6e7d87]">
                Find popular brands including Hayati, Lost Mary, Elf Bar,
                Vaporesso and more.
              </p>

              <Link
                href="/trade-register"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#079b57] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#067c48]"
              >
                Open Trade Account
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex gap-4 rounded-xl border border-[#e1e8ee] bg-[#f5f7fa] p-5 transition hover:border-[#079b57]/30 hover:bg-white"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e9f8ef] text-[#079b57]">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="text-sm font-extrabold text-[#17242d]">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-[#6e7d87]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trade CTA */}

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

        {/* Compliance Notice */}
        <section className="border-t border-[#e1e8ee] bg-white px-4 py-7 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1500px] items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e9f8ef] text-[#079b57]">
              <CheckCircle2 size={19} />
            </div>

            <div>
              <h3 className="text-xs font-extrabold text-[#17242d]">
                Trade Supply for Verified UK Businesses
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#6e7d87]">
                Product availability and supply are subject to applicable UK
                requirements. Access is restricted to legally eligible, verified
                business customers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

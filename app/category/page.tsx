import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Box,
  Boxes,
  ChevronRight,
  CircleHelp,
  LockKeyhole,
  Package,
  ShieldCheck,
  Store,
  Truck,
} from "lucide-react";

import SiteLayout from "@/components/site-layout";

const flavours = [
  {
    name: "Strawberry Lychee",
    slug: "strawberry-lychee",
  },
  {
    name: "Coffee",
    slug: "coffee",
  },
  {
    name: "Bubblegum",
    slug: "bubblegum",
  },
  {
    name: "Cola",
    slug: "cola",
  },
  {
    name: "Ruby Berry",
    slug: "ruby-berry",
  },
  {
    name: "Banana Ice",
    slug: "banana-ice",
  },
  {
    name: "Ice Cold",
    slug: "ice-cold",
  },
  {
    name: "Grape Ice",
    slug: "grape-ice",
  },
  {
    name: "Mango Ice",
    slug: "mango-ice",
  },
  {
    name: "Frosted Mint",
    slug: "frosted-mint",
  },
  {
    name: "Blueberry",
    slug: "blueberry",
  },
];

const products = flavours.map((flavour) => ({
  ...flavour,
  id: `hayati-nic-pouches-${flavour.slug}`,
  name: `Hayati® Nic Pouches ${flavour.name}`,
  brand: "HAYATI",
  category: "Nic Pouches",
  sku: `hayati-nic-pouches-${flavour.slug}`,
  pack: "Pack of 5",
  strength: "20mg",
  flavourCount: "11 options",
  size: "70",
  image: `/products/hayati-nic-pouches-${flavour.slug}.webp`,
}));

const relatedCategories = [
  {
    name: "Pod Kits",
    description: "Browse the pod kit category.",
    href: "/products?category=pod-kits",
  },
  {
    name: "Replacement Pods",
    description: "Browse replacement pod products.",
    href: "/products?category=replacement-pods",
  },
  {
    name: "E-Liquids",
    description: "Browse the e-liquid category.",
    href: "/products?category=e-liquids",
  },
  {
    name: "Vape Accessories",
    description: "Browse vape accessories.",
    href: "/products?category=accessories",
  },
];

const faqs = [
  {
    question: "What products are included in this category?",
    answer:
      "This category displays Hayati Nic Pouches in 11 listed flavour options.",
  },
  {
    question: "What are the listed product specifications?",
    answer:
      "The reference catalogue lists a pack size of 5, a strength of 20mg, 11 flavour options and a product size value of 70. Check the individual product packaging and manufacturer information for full details.",
  },
  {
    question: "Can I see wholesale prices without an account?",
    answer:
      "The reference website displays trade pricing after login. On this page, use the trade login link to access your account and check your available pricing.",
  },
  {
    question: "Who can access wholesale products?",
    answer:
      "This catalogue is intended for verified UK trade customers aged 18 or over. Nicotine is addictive.",
  },
];

export function generateStaticParams() {
  return [
    { slug: "nic-pouches" },
  ];
}

export default function NicPouchesPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f5f7fa] text-[#17242d]">
        {/* Breadcrumb */}
        <div className="border-b border-[#e1e8ee] bg-white">
          <div className="mx-auto flex max-w-[1500px] items-center gap-2 px-4 py-4 text-sm sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-[#71808a] transition hover:text-[#079b57]"
            >
              Home
            </Link>

            <ChevronRight size={15} className="text-[#aab5bd]" />

            <Link
              href="/brand"
              className="text-[#71808a] transition hover:text-[#079b57]"
            >
              Categories
            </Link>

            <ChevronRight size={15} className="text-[#aab5bd]" />

            <span className="font-bold text-[#079b57]">Nic Pouches</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#031713]">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#079b57]/20 blur-[100px]" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#20e980]/10 blur-[100px]" />

          <div className="relative mx-auto grid max-w-[1500px] items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#20e980]/30 bg-[#20e980]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#20e980]">
                <BadgeCheck size={15} />
                Wholesale Category
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Nicotine
                <span className="text-[#20e980]"> Pouches</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#b7c8c0] sm:text-lg">
                Browse the Hayati Nic Pouches collection, including available
                flavour options and product specifications. Trade pricing is
                available through your verified retailer account.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#079b57] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#087d49]"
                >
                  Trade Login
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href="#nic-pouches-products"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:border-[#20e980] hover:text-[#20e980]"
                >
                  View Products
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Category summary */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#20e980]">
                Category Overview
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  { value: "11", label: "Flavour options" },
                  { value: "20mg", label: "Listed strength" },
                  { value: "5", label: "Pack quantity" },
                  { value: "70", label: "Listed size" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p className="text-2xl font-black text-white sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs font-medium text-[#a8bbb1]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#079b57]/15 p-4">
                <Package className="shrink-0 text-[#20e980]" size={22} />
                <div>
                  <p className="text-sm font-bold text-white">HAYATI</p>
                  <p className="mt-1 text-xs text-[#a8bbb1]">
                    Brand featured in this category
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust information */}
        <section className="border-b border-[#e1e8ee] bg-white">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-4 py-7 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              {
                icon: ShieldCheck,
                title: "Verified Trade Access",
                description: "For approved trade customers",
              },
              {
                icon: Boxes,
                title: "Product Information",
                description: "Specifications and flavour options",
              },
              {
                icon: Store,
                title: "Retailer Catalogue",
                description: "Category-based product browsing",
              },
              {
                icon: LockKeyhole,
                title: "Trade Pricing",
                description: "Available after account login",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9f8ef] text-[#079b57]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold">{item.title}</h3>
                    <p className="mt-1 text-xs text-[#71808a]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Products */}
        <section
          id="nic-pouches-products"
          className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#079b57]">
                Wholesale Products
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#17242d] sm:text-4xl">
                Nic Pouches Collection
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#71808a]">
                Browse all listed Hayati Nic Pouches variants and compare
                their flavour names and specifications.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dce5e0] bg-white px-4 py-2 text-sm font-bold text-[#079b57]">
              <Package size={17} />
              {products.length} Products
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group overflow-hidden rounded-2xl border border-[#e1e8ee] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#079b57]/40 hover:shadow-xl hover:shadow-[#079b57]/10"
              >
                {/* Product image placeholder */}
                <div className="relative flex h-[230px] items-center justify-center overflow-hidden bg-[#f0f5f2]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e5f4eb] to-[#f5f7fa]" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-[#079b57]/10 bg-white shadow-lg transition duration-300 group-hover:scale-105">
                    <Package size={42} className="text-[#079b57]" />
                  </div>

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#079b57] shadow-sm">
                    HAYATI
                  </span>

                  <span className="absolute right-4 top-4 rounded-full bg-[#031713] px-3 py-1.5 text-[10px] font-bold text-white">
                    20mg
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#079b57]">
                    Nic Pouches
                  </p>

                  <h3 className="mt-2 min-h-12 text-base font-extrabold leading-6 text-[#17242d] transition group-hover:text-[#079b57]">
                    {product.name}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-[#f5f7fa] p-3">
                      <p className="text-[10px] text-[#71808a]">Pack size</p>
                      <p className="mt-1 text-xs font-bold text-[#17242d]">
                        {product.pack}
                      </p>
                    </div>

                    <div className="rounded-lg bg-[#f5f7fa] p-3">
                      <p className="text-[10px] text-[#71808a]">Strength</p>
                      <p className="mt-1 text-xs font-bold text-[#17242d]">
                        {product.strength}
                      </p>
                    </div>

                    <div className="rounded-lg bg-[#f5f7fa] p-3">
                      <p className="text-[10px] text-[#71808a]">Flavours</p>
                      <p className="mt-1 text-xs font-bold text-[#17242d]">
                        {product.flavourCount}
                      </p>
                    </div>

                    <div className="rounded-lg bg-[#f5f7fa] p-3">
                      <p className="text-[10px] text-[#71808a]">Size</p>
                      <p className="mt-1 text-xs font-bold text-[#17242d]">
                        {product.size}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#e1e8ee] pt-4">
                    <span className="text-xs font-bold text-[#079b57]">
                      Login for Trade Prices
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f8ef] text-[#079b57] transition group-hover:bg-[#079b57] group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Product specifications */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#079b57]">
                Product Information
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Category Specifications
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#71808a]">
                The following information is based on the specifications
                displayed in the reference category and product listings.
                Check individual packaging for complete product information.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-[#e1e8ee]">
                {[
                  ["Brand", "HAYATI"],
                  ["Product Type", "Nic Pouches"],
                  ["Pack Size", "Pack of 5"],
                  ["Strength", "20mg"],
                  ["Available Flavours", "11"],
                  ["Listed Size", "70"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between gap-4 px-5 py-4 ${
                      index % 2 === 0 ? "bg-[#f5f7fa]" : "bg-white"
                    }`}
                  >
                    <span className="text-sm text-[#71808a]">{label}</span>
                    <span className="text-sm font-extrabold text-[#17242d]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-[#031713] p-7 text-white sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#079b57]/20 text-[#20e980]">
                <Package size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Available Flavour Options
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#a8bbb1]">
                The Hayati listing shows the following 11 flavour names.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {flavours.map((flavour) => (
                  <span
                    key={flavour.slug}
                    className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white"
                  >
                    {flavour.name}
                  </span>
                ))}
              </div>

              <Link
                href="/login"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#079b57] px-5 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#087d49]"
              >
                Access Trade Account
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* Retailer information */}
        <section className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#dce5e0] bg-[#eaf5ee] p-7 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#079b57]">
                  Wholesale Account Information
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#17242d]">
                  Trade Account Access
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#62736b]">
                  Trade prices and ordering access are provided through
                  verified retailer accounts. Sign in to check your account
                  pricing and available ordering options.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#079b57] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#087d49]"
                >
                  Trade Login
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#079b57]/30 bg-white px-6 py-4 text-sm font-extrabold text-[#079b57] transition hover:bg-[#f3fbf6]"
                >
                  Register
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related categories */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#079b57]">
              Explore More
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Related Categories
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group rounded-2xl border border-[#e1e8ee] bg-white p-6 transition hover:-translate-y-1 hover:border-[#079b57]/40 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8ef] text-[#079b57]">
                    <Boxes size={21} />
                  </div>

                  <h3 className="mt-5 font-extrabold text-[#17242d]">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#71808a]">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-[#079b57]">
                    Browse Category
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[1000px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f8ef] text-[#079b57]">
              <CircleHelp size={25} />
            </div>

            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#079b57]">
              Help Centre
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 text-sm text-[#71808a]">
              Information about this product category and trade access.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#e1e8ee] bg-white p-5 open:border-[#079b57]/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-[#17242d]">
                  {faq.question}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e9f8ef] text-[#079b57] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-[#e1e8ee] pt-4 text-sm leading-7 text-[#71808a]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Nicotine warning */}
        <section className="border-t border-[#e1e8ee] bg-[#fff8e9]">
          <div className="mx-auto flex max-w-[1500px] items-start gap-4 px-4 py-7 sm:px-6 lg:px-8">
            <ShieldCheck
              size={23}
              className="mt-0.5 shrink-0 text-[#a36b12]"
            />

            <div>
              <h3 className="text-sm font-black text-[#68460f]">
                Important Product Information
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#806b48]">
                Nicotine is an addictive chemical. Products containing
                nicotine are intended only for adults aged 18 and over.
                Ensure all applicable age-verification, retailer
                verification and UK legal requirements are followed.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
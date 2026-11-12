import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Package,
  ShieldCheck,
  Store,
  Truck,
} from "lucide-react";

import SiteLayout from "@/components/site-layout";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/data";
import { homeCategories } from "@/lib/homepage-data";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const categoryDetails: Record<
  string,
  {
    description: string;
    brand: string;
    specifications: { label: string; value: string }[];
    faqs: { question: string; answer: string }[];
  }
> = {
  "pod-kits": {
    brand: "Pod Kits",
    description:
      "Browse the pod kit products in our catalogue, with product details, specifications and available options.",
    specifications: [
      { label: "Category", value: "Pod Kits" },
      { label: "Product type", value: "Vape devices" },
      { label: "Availability", value: "Subject to stock" },
    ],
    faqs: [
      {
        question: "What products are listed in this category?",
        answer:
          "This category displays the pod kit products currently included in our product catalogue.",
      },
      {
        question: "Can I view product specifications?",
        answer:
          "Select a product to view its available product information and specifications.",
      },
    ],
  },

  "replacement-pods": {
    brand: "Replacement Pods",
    description:
      "Browse replacement pod products and view their available product details.",
    specifications: [
      { label: "Category", value: "Replacement Pods" },
      { label: "Product type", value: "Replacement pods" },
      { label: "Availability", value: "Subject to stock" },
    ],
    faqs: [
      {
        question: "What are replacement pods?",
        answer:
          "Replacement pods are product components designed for compatible devices. Check the product details for compatibility.",
      },
      {
        question: "How do I check compatibility?",
        answer:
          "Review the product specifications and manufacturer compatibility information before ordering.",
      },
    ],
  },

  "e-liquids": {
    brand: "E-Liquids",
    description:
      "Explore the e-liquid products listed in our wholesale catalogue.",
    specifications: [
      { label: "Category", value: "E-Liquids" },
      { label: "Product type", value: "E-liquid" },
      { label: "Availability", value: "Subject to stock" },
    ],
    faqs: [
      {
        question: "Where can I find e-liquid specifications?",
        answer:
          "Select an individual product to see its available specifications and product information.",
      },
      {
        question: "Are all products always available?",
        answer:
          "Availability can change. Check the individual product listing for current stock information.",
      },
    ],
  },

  "nicotine-pouches": {
    brand: "Nicotine Pouches",
    description:
      "Browse the nicotine pouch products in our catalogue. Product listings show available flavours, pack details and stated nicotine strength where supplied.",
    specifications: [
      { label: "Category", value: "Nicotine Pouches" },
      { label: "Product type", value: "Nicotine pouches" },
      { label: "Pack information", value: "See individual product" },
      { label: "Nicotine strength", value: "See individual product" },
    ],
    faqs: [
      {
        question: "What flavours are listed?",
        answer:
          "Available flavour options are shown on the individual product listings.",
      },
      {
        question: "Where can I check nicotine strength?",
        answer:
          "Check the individual product information and packaging for the stated nicotine strength.",
      },
      {
        question: "Are nicotine pouches suitable for everyone?",
        answer:
          "No. Nicotine is addictive. These products are intended only for adults who meet the applicable legal age requirements.",
      },
    ],
  },

  "vape-accessories": {
    brand: "Vape Accessories",
    description:
      "Browse the accessories listed in our catalogue, including their available product details.",
    specifications: [
      { label: "Category", value: "Vape Accessories" },
      { label: "Product type", value: "Accessories" },
      { label: "Availability", value: "Subject to stock" },
    ],
    faqs: [
      {
        question: "What accessories are available?",
        answer: "The products currently listed in this category appear below.",
      },
      {
        question: "How do I check product compatibility?",
        answer:
          "Review the product details and manufacturer guidance before purchasing.",
      },
    ],
  },

  "coils-tanks": {
    brand: "Coils & Tanks",
    description:
      "Find the coils and tanks listed in our catalogue, with individual product details.",
    specifications: [
      { label: "Category", value: "Coils & Tanks" },
      { label: "Product type", value: "Coils and tanks" },
      { label: "Availability", value: "Subject to stock" },
    ],
    faqs: [
      {
        question: "How can I find the correct coil?",
        answer:
          "Check the product listing and manufacturer's compatibility information for your device.",
      },
      {
        question: "Are coils and tanks interchangeable?",
        answer:
          "Not all coils and tanks are compatible. Confirm compatibility with the device manufacturer before purchasing.",
      },
    ],
  },
};

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = homeCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const details = categoryDetails[slug];

  const categoryProducts = products.filter(
    (product) =>
      normalize(product.category ?? "") === normalize(category.name) ||
      (slug === "nicotine-pouches" &&
        normalize(product.category ?? "") === "nicpouches"),
  );

  const relatedCategories = homeCategories
    .filter((item) => item.slug !== category.slug)
    .slice(0, 4);

  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f5f7fa] text-[#17242d]">
        {/* Breadcrumb */}
        <section className="border-b border-[#e8edeb] bg-white">
          <div className="mx-auto flex max-w-[1500px] items-center gap-2 px-4 py-4 text-sm sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-[#7b8982] transition hover:text-[#079b57]"
            >
              Home
            </Link>

            <ChevronRight size={15} className="text-[#aab4af]" />

            <Link
              href="/category"
              className="text-[#7b8982] transition hover:text-[#079b57]"
            >
              Categories
            </Link>

            <ChevronRight size={15} className="text-[#aab4af]" />

            <span className="font-semibold text-[#031713]">
              {category.name}
            </span>
          </div>
        </section>

        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#031713]">
          {/* Category background image */}
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${category.image}')`,
            }}
          />

          {/* Readability overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031713] via-[#031713]/75 to-[#031713]/15" />

          {/* Green glow */}
          <div className="absolute -right-24 -top-32 -z-10 h-[450px] w-[450px] rounded-full bg-[#079b57]/15 blur-[100px]" />

          <div className="relative mx-auto grid min-h-[480px] max-w-[1500px] items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#20e980]/30 bg-[#20e980]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#20e980]">
                <Store size={15} />
                Product category
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                {category.name}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#c0d0c8]">
                {details.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#20e980] px-6 py-4 text-sm font-extrabold text-[#031713] transition hover:bg-white"
                >
                  Browse products
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/register"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-6 py-4 text-sm font-bold text-white! transition hover:border-[#20e980] hover:text-[#20e980]"
                >
                  Trade registration
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#d1ded7]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#20e980]" />
                  Trade catalogue
                </div>

                <div className="flex items-center gap-2">
                  <Boxes size={18} className="text-[#20e980]" />
                  Product range
                </div>

                <div className="flex items-center gap-2">
                  <Truck size={18} className="text-[#20e980]" />
                  Delivery information
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category information */}
        <section className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#e3e9e6] bg-white p-6">
              <Package className="mb-4 text-[#079b57]" size={27} />
              <h3 className="font-bold">Product range</h3>
              <p className="mt-2 text-sm leading-6 text-[#75827b]">
                Products listed under {category.name}.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e3e9e6] bg-white p-6">
              <BadgeCheck className="mb-4 text-[#079b57]" size={27} />
              <h3 className="font-bold">Product information</h3>
              <p className="mt-2 text-sm leading-6 text-[#75827b]">
                Individual product details and specifications.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e3e9e6] bg-white p-6">
              <Truck className="mb-4 text-[#079b57]" size={27} />
              <h3 className="font-bold">Delivery details</h3>
              <p className="mt-2 text-sm leading-6 text-[#75827b]">
                Check your account or delivery page for order information.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e3e9e6] bg-white p-6">
              <ShieldCheck className="mb-4 text-[#079b57]" size={27} />
              <h3 className="font-bold">Trade account</h3>
              <p className="mt-2 text-sm leading-6 text-[#75827b]">
                Account access is subject to registration and approval.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section
          id="products"
          className="mx-auto max-w-[1500px] scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#079b57]">
                Explore catalogue
              </p>

              <h2 className="text-3xl font-black text-[#17242d] sm:text-4xl">
                {category.name} Products
              </h2>

              <p className="mt-3 text-sm text-[#7b8982]">
                {categoryProducts.length} products listed in this category
              </p>
            </div>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#cbd8d0] bg-white px-6 py-16 text-center">
              <Package size={42} className="mx-auto mb-4 text-[#079b57]" />

              <h3 className="text-xl font-bold text-[#17242d]">
                No products available
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#7b8982]">
                There are currently no products assigned to this category. Add
                products to your product data to display them here.
              </p>
            </div>
          )}
        </section>

        {/* Specifications */}
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-[1500px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#079b57]">
                Category information
              </p>

              <h2 className="text-3xl font-black text-[#17242d]">
                {category.name} Details
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#718078]">
                Browse the available products and review their individual
                specifications before placing an order.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e3e9e6]">
              {details.specifications.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between gap-5 px-5 py-4 ${
                    index % 2 === 0 ? "bg-[#f7faf8]" : "bg-white"
                  }`}
                >
                  <span className="text-sm font-semibold text-[#68766f]">
                    {item.label}
                  </span>

                  <span className="text-right text-sm font-bold text-[#17242d]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trade account */}
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1500px] overflow-hidden rounded-3xl bg-[#031713] px-6 py-12 text-center text-white md:px-16 md:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#20e980]/30 bg-[#20e980]/10 text-[#20e980]">
              <Store size={25} />
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-black md:text-4xl">
              Access Our Trade Catalogue
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#c0d0c8]">
              Register for a trade account to access the account features
              available to approved customers.
            </p>

            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#20e980] px-7 py-4 text-sm font-extrabold text-[#031713] transition hover:bg-white"
            >
              Register for trade
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Related categories */}
        <section className="mx-auto max-w-[1500px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-7">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#079b57]">
              Discover more
            </p>

            <h2 className="text-3xl font-black text-[#17242d]">
              Related Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {relatedCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/category/${item.slug}`}
                className="group rounded-2xl border border-[#e3e9e6] bg-white p-5 transition hover:-translate-y-1 hover:border-[#079b57]/40 hover:shadow-lg"
              >
                <div className="relative mb-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-[#f5f7fa]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-4 transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#17242d]">
                    {item.name}
                  </h3>

                  <ArrowUpRight size={17} className="shrink-0 text-[#079b57]" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-[#e8edeb] bg-white py-16">
          <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
            <div className="mb-10 text-center">
              <CircleHelp size={30} className="mx-auto mb-4 text-[#079b57]" />

              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#079b57]">
                Help centre
              </p>

              <h2 className="text-3xl font-black text-[#17242d]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {details.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[#e3e9e6] bg-[#f8faf9] p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-[#17242d]">
                    {faq.question}

                    <span className="text-xl text-[#079b57] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-[#718078]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Nicotine notice */}
        <section className="border-t border-[#e8edeb] bg-[#f5f7fa] py-8">
          <div className="mx-auto flex max-w-[1500px] items-start gap-3 px-4 sm:px-6 lg:px-8">
            <CheckCircle2
              size={20}
              className="mt-0.5 shrink-0 text-[#079b57]"
            />

            <p className="text-xs leading-6 text-[#718078]">
              Age restrictions apply. Nicotine is addictive. Products containing
              nicotine are intended only for adults who meet applicable legal
              age requirements. Always check the product packaging and
              manufacturer information.
            </p>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

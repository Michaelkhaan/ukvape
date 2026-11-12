import Link from "next/link";
import { notFound } from "next/navigation";
import SiteLayout from "@/components/site-layout";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Package,
  Store,
  Tag,
} from "lucide-react";
import { products } from "@/lib/data";
import ProductCard from "@/components/home/product-card";

const brands = [
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
    description:
      "Curated products and accessories for verified trade customers.",
  },
];

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// export const dynamicParams = true;

export function generateStaticParams() {
  return brands.map((brand) => ({
    id: brand.slug,
  }));
}

export default async function BrandDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const normalizedId = decodeURIComponent(id || "")
    .toLowerCase()
    .trim();

  const brand = brands.find((item) => item.slug.toLowerCase() === normalizedId);

  const brandProducts = products.filter(
    (product) => product.brand?.toLowerCase() === brand?.name.toLowerCase(),
  );

  if (!brand) {
    notFound();
  }

  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f5f7fa] text-[#17242d]">
        {/* Breadcrumb */}
        <div className="border-b border-[#e1e8ee] bg-white px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1500px] items-center gap-2 text-xs font-medium text-[#6e7d87]">
            <Link href="/" className="transition hover:text-[#079b57]">
              Home
            </Link>

            <ChevronRight size={14} />

            <Link href="/brands" className="transition hover:text-[#079b57]">
              Brands
            </Link>

            <ChevronRight size={14} />

            <span className="font-bold text-[#17242d]">{brand.name}</span>
          </div>
        </div>

        {/* Full Background Brand Hero */}
        <section
          className="relative isolate flex min-h-[500px] items-center overflow-hidden bg-[#031713] bg-cover bg-center bg-no-repeat px-4 py-8 text-white sm:px-6 md:min-h-[600px] lg:px-8"
          style={{
            backgroundImage: `url("${brand.image}")`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 -z-10 bg-[#031713]/75" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031713] via-[#031713]/90 to-[#031713]/35" />

          {/* Green Lighting */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_45%,rgba(7,155,87,0.30),transparent_45%)]" />

          {/* Decorative Elements */}
          <div className="absolute -right-32 -top-32 -z-10 h-[450px] w-[450px] rounded-full border border-[#20e980]/10" />

          <div className="absolute -right-20 -bottom-40 -z-10 h-[400px] w-[400px] rounded-full bg-[#079b57]/15 blur-[100px]" />

          <div className="relative z-10 mx-auto w-full max-w-[1500px]">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#20e980]/30 bg-[#079b57]/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#20e980] backdrop-blur-md">
                <Tag size={15} />
                Premium Wholesale Brand
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl md:text-5xl">
                {brand.name}

                <span className="mt-3 block bg-gradient-to-r from-[#20e980] via-[#64f5ae] to-white bg-clip-text text-transparent">
                  Wholesale UK
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base md:text-base">
                {brand.description} Explore our wholesale brand collection and
                discover trade opportunities for your business.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/trade-register"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#079b57] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-[#079b57]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#067c48]"
                >
                  Open Trade Account
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/brands"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:border-[#20e980] hover:bg-white/10"
                >
                  All Brands
                  <ChevronRight size={17} />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#20e980]/20 bg-[#079b57]/20 text-[#20e980]">
                    <CheckCircle2 size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white">Verified</p>
                    <p className="mt-1 text-[10px] text-white/55">
                      Trade Supply
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#20e980]/20 bg-[#079b57]/20 text-[#20e980]">
                    <Truck size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white">
                      UK Distribution
                    </p>
                    <p className="mt-1 text-[10px] text-white/55">
                      Trade Delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#20e980]/20 bg-[#079b57]/20 text-[#20e980]">
                    <Package size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white">Business</p>
                    <p className="mt-1 text-[10px] text-white/55">
                      Wholesale Accounts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalogue */}
        {/* Product Catalogue */}
        <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#079b57]">
                  Brand Products
                </p>

                <h2 className="text-3xl font-extrabold text-[#17242d] md:text-4xl">
                  {brand.name} Products
                </h2>

                <p className="mt-3 text-sm text-[#6e7d87]">
                  Explore the available {brand.name} wholesale catalogue.
                </p>
              </div>

              <span className="rounded-full border border-[#e1e8ee] bg-white px-4 py-2 text-xs font-bold">
                {brandProducts.length} Products
              </span>
            </div>

            {brands.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {brandProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#dce5eb] bg-white px-5 py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e9f8ef] text-[#079b57]">
                  <Package size={29} />
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-[#17242d]">
                  No products available yet
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-[#6e7d87]">
                  There are currently no products listed for this brand. Please
                  check back later for catalogue updates.
                </p>

                <Link
                  href="/brands"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#079b57] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#067c48]"
                >
                  Browse Other Brands
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Wholesale Distribution */}
        <section className="border-y border-[#e1e8ee] bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#079b57]">
                Wholesale Distribution
              </p>

              <h2 className="text-3xl font-extrabold leading-tight text-[#17242d] md:text-4xl">
                {brand.name} Wholesale Distribution UK
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#6e7d87]">
                Browse the {brand.name} brand catalogue for UK retailers,
                distributors, and verified trade buyers.
              </p>

              <p className="mt-3 text-sm leading-8 text-[#6e7d87]">
                Discover available products and explore relevant wholesale
                inventory for your business.
              </p>

              <p className="mt-3 text-sm leading-8 text-[#6e7d87]">
                Our B2B platform provides product discovery, retailer-focused
                ordering, and a professional wholesale shopping experience for
                verified business customers.
              </p>

              <Link
                href="/trade-register"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#079b57] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#067c48]"
              >
                Register for Trade
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex gap-4 rounded-2xl border border-[#e1e8ee] bg-[#f5f7fa] p-5 transition hover:border-[#079b57]/30 hover:bg-white"
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
              <ShieldCheck size={19} />
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

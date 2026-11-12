import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  ChevronRight,
  Package,
  ShieldCheck,
  Store,
  Truck,
} from "lucide-react";

import SiteLayout from "@/components/site-layout";

const products = [
  {
    id: "hayati-pro-max-4k",
    name: "Hayati Pro Max+ 4K",
    subtitle: "Pro Max Series",
    image: "/hayati-pro-max-4k.webp",
    description:
      "Hayati Pro Max+ 4K product range with multiple flavour options.",
    specifications: [
      ["Dimensions", "28 × 114.2 × 28 mm"],
      ["Puff specification", "Up to 4,000"],
      ["Battery", "850mAh"],
      ["Flavour options", "30 listed"],
    ],
    packaging: [
      ["Display box", "5 pieces"],
      ["Carton quantity", "160 pieces"],
      ["Carton dimensions", "181 × 57 × 140 mm"],
      ["Carton weight", "18.83 kg"],
    ],
    flavours: [
      "White Peach",
      "Watermelon Ice",
      "Triple Mango",
      "Summer Dream",
      "Strawberry Watermelon",
      "Strawberry Raspberry Ice",
      "Strawberry Kiwi",
      "Red Sour Raspberry",
      "Pink Lemonade",
      "Mr Blue",
      "Lemon & Lime",
      "Juicy Peach",
      "Grape Berry",
      "Fruit Twist",
      "Fresh Mint",
      "Fizzy Cherry",
      "Cherry Cola",
      "Blueberry Raspberry",
      "Blue Sour Raspberry",
      "Blue Razz Lemonade",
      "Blackcurrant Lemonade",
      "Blackberry Raspberry",
      "Banana Ice",
    ],
    href: "/register",
  },
  {
    id: "hayati-pro-ultra",
    name: "Hayati Pro Ultra+",
    subtitle: "Ultra Series",
    image: "/hayati-pro-ultra.webp",
    description:
      "Hayati Pro Ultra+ range with multiple listed flavour combinations.",
    specifications: [
      ["Dimensions", "53.3 × 107 × 29.3 mm"],
      ["Puff specification", "Up to 25,000"],
      ["Battery", "850mAh"],
      ["E-liquid capacity", "2 + 2 × 10ml"],
      ["Nicotine strength", "20mg"],
      ["Flavour options", "50 listed"],
    ],
    packaging: [
      ["Display box", "5 pieces"],
      ["Carton quantity", "60 pieces"],
      ["Carton dimensions", "487 × 332 × 192 mm"],
      ["Carton weight", "11.62 kg"],
    ],
    flavours: [
      "Blackcurrant Cotton K Blue Raspberry",
      "Blackcurrant Lemonade",
      "Blue Razz Cherry",
      "Blue Razz GB",
      "Blue Sour Raspberry",
      "Blueberry Raspberry",
      "Cherry Berry",
      "Fresh Mint",
      "Fruit Twist",
      "Grape GB",
      "Juicy Peach",
      "Lemon & Lime",
      "Mr Blue",
      "Raspberry Cola",
      "Strawberry Raspberry Ice",
      "Strawberry Watermelon",
      "Summer Dream",
      "Watermelon Ice",
      "Cola Ice",
      "Mango Peach Pineapple",
    ],
    href: "/register",
  },
  {
    id: "hayati-pro-max-6k",
    name: "Hayati Pro Max+ 6K",
    subtitle: "Pro Max Series",
    image: "/hayati-pro-max-6k.webp",
    description: "Hayati Pro Max+ 6K range with a broad flavour catalogue.",
    specifications: [
      ["Dimensions", "28 × 124.7 × 28 mm"],
      ["Puff specification", "Up to 6,000"],
      ["E-liquid", "2 + 1ml"],
      ["Nicotine strength", "20mg"],
      ["Battery", "850mAh"],
    ],
    packaging: [
      ["Display box", "5 pieces"],
      ["Carton quantity", "160 pieces"],
      ["Carton weight", "20.8 kg"],
    ],
    flavours: [
      "Banana Ice",
      "Berry Lemonade",
      "Black Mamba",
      "Blackberry Ice",
      "Blackcurrant Lemonade",
      "Blue Frozen",
      "Blue Fusion",
      "Blue Razz Cherry",
      "Blue Razz GB",
      "Blue Sour Raspberry",
      "Cherry Berry",
      "Cherry Cola",
      "Cola Ice",
      "Double Apple",
      "Double Menthol",
      "Fizzy Cherry",
      "Fresh Mint",
      "Fruit Twist",
      "Grape Berry",
      "Grape GB",
      "Juicy Peach",
      "Kiwi Cooler",
      "Lemon & Lime",
      "Lychee Ice",
      "Mad Blue",
      "Mango Banana",
      "Mr Blue",
      "Pink Lemonade",
      "Strawberry Kiwi",
      "Strawberry Watermelon",
      "Summer Dream",
      "Triple Mango",
      "Watermelon Ice",
      "White Peach Raspberry",
    ],
    href: "/register",
  },
  {
    id: "hayati-player-edition",
    name: "Hayati Pro Max Player Edition",
    subtitle: "Special Edition",
    image: "/hayati-player-edition.webp",
    description:
      "Hayati Pro Max Player Edition with dedicated product design and listed specifications.",
    specifications: [
      ["Dimensions", "28 × 12.47 × 28 mm"],
      ["Puff specification", "Up to 6,000"],
      ["Battery", "850mAh"],
      ["E-liquid capacity", "2 + 10ml"],
      ["Nicotine strength", "20mg"],
      ["Flavour options", "5 listed"],
    ],
    packaging: [
      ["Display box", "5 pieces"],
      ["Carton dimensions", "488 × 374 × 331 mm"],
    ],
    flavours: [
      "Multiple flavour options",
      "Check current trade catalogue for availability",
    ],
    href: "/register",
  },
  {
    id: "hayati-halloween-edition",
    name: "Hayati Pro Halloween Limited Edition",
    subtitle: "Limited Edition",
    image: "/hayati-halloween-edition.webp",
    description: "Hayati Pro Halloween Limited Edition product range.",
    specifications: [
      ["Product range", "Limited Edition"],
      ["Flavour information", "Multiple options listed"],
      ["Technical specifications", "Contact sales for details"],
    ],
    packaging: [],
    flavours: [
      "Banana Ice & 14 Flavours",
      "Blackcurrant Cotton K Blue Raspberry & 14 Flavours",
    ],
    href: "/register",
  },
];

const benefits = [
  {
    icon: Truck,
    title: "UK Trade Delivery",
    description: "Delivery information for approved UK retailers.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Retailers",
    description: "Trade account access for verified customers.",
  },
  {
    icon: Package,
    title: "Product Information",
    description: "Product specifications and packaging details.",
  },
  {
    icon: Store,
    title: "Wholesale Catalogue",
    description: "Explore the available Hayati product ranges.",
  },
];

export default function HayatiCollectionPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f5f7fa] text-[#17242d]">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#031713]">
          {/* Background image */}
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/heroimage.png')",
            }}
          />

          {/* Dark overlay for readable text */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031713] via-[#031713]/90 to-[#031713]/20" />

          {/* Green glow */}
          <div className="absolute -right-32 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-[#079b57]/20 blur-[120px]" />

          <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-4 py-8 sm:px-6 lg:min-h-[500px] lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#20e980]/30 bg-[#20e980]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#20e980]">
                <BadgeCheck size={15} />
                Brand Collection
              </div>

              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[#20e980]">
                Wholesale Product Catalogue
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                HAYATI
                <span className="block text-[#20e980]">Collection</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[#b7c8c0]">
                Explore the Hayati product catalogue, including Pro Max, Pro
                Ultra, Player Edition and Limited Edition ranges. Product
                specifications and available options are listed for verified
                trade customers.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="#hayati-products"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#079b57] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#087d49]"
                >
                  Explore Collection
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-black/20 px-6 py-4 text-sm font-bold text-white transition hover:border-[#20e980] hover:text-[#20e980]"
                >
                  Trade Registration
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#c0d0c8]">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-[#20e980]" />
                  Trade catalogue
                </span>

                <span className="flex items-center gap-2">
                  <Boxes size={17} className="text-[#20e980]" />5 product ranges
                </span>

                <span className="flex items-center gap-2">
                  <Truck size={17} className="text-[#20e980]" />
                  UK delivery information
                </span>
              </div>
            </div>

            {/* Space for background image's product visuals */}
            <div className="hidden lg:block" />
          </div>
        </section>

        {/* Benefits */}
        <section className="border-b border-[#e1e7e5] bg-white">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-4 py-9 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e4f0ec] text-[#079b57]">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#17242d]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-[#69756f]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Collection products */}
        <section
          id="hayati-products"
          className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        >
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#079b57]">
                Explore the range
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#17242d] sm:text-4xl">
                Hayati Product Collection
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#69756f]">
                Browse the available product ranges and review their listed
                technical specifications and packaging information.
              </p>
            </div>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#079b57] transition hover:text-[#031713]"
            >
              Trade Login
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-[#e5e9ed] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="relative flex h-64 items-center justify-center bg-[#f5f7fa] p-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#079b57]">
                    Hayati
                  </p>

                  <h3 className="text-lg font-bold text-[#17242d]">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#69756f]">
                    {product.specifications.find(([label]) =>
                      label.toLowerCase().includes("puff"),
                    )?.[1] || "Wholesale product"}
                  </p>

                  <Link
                    href="/trade-register"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#031713] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#079b57]"
                  >
                    View Product
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trade account section */}
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

        {/* Nicotine information */}
        <section className="border-t border-[#e1e7e5] bg-white px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1500px] items-start gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-[#079b57]" size={20} />
            <p className="text-xs leading-7 text-[#69756f]">
              Nicotine is an addictive chemical. Product information on this
              page is intended for eligible adult trade customers. Products and
              specifications should be checked against current supplier
              information and applicable UK requirements.
            </p>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

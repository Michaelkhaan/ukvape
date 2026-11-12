
import Link from "next/link";
import SiteLayout from "@/components/site-layout";

import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Headphones,
  HeartHandshake,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Focus",
    description:
      "Explore carefully presented product ranges with clear and useful product information.",
    number: "01",
  },
  {
    icon: Truck,
    title: "Reliable Service",
    description:
      "Straightforward ordering and delivery information to help your business plan ahead.",
    number: "02",
  },
  {
    icon: HeartHandshake,
    title: "Business Relationships",
    description:
      "We value long-term trade relationships and aim to make every customer interaction count.",
    number: "03",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Our team is here to help with product questions, trade accounts and general enquiries.",
    number: "04",
  },
];

const features = [
  {
    icon: PackageCheck,
    title: "Product Discovery",
    description:
      "Browse our catalogue and discover products across our available ranges.",
  },
  {
    icon: ShieldCheck,
    title: "Trade-Focused",
    description:
      "A dedicated wholesale experience designed around eligible business customers.",
  },
  {
    icon: Clock3,
    title: "Easy Ordering",
    description:
      "A simple browsing and ordering experience that keeps things straightforward.",
  },
];

export default function About() {
  return (
    <SiteLayout>
      <main className="overflow-hidden bg-[#f5f7fa] text-[#17242d]">

        {/* HERO SECTION */}
         <section
      className="relative isolate overflow-hidden bg-[#031713] bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/about hero image.png')",
      }}
    >
      {/* Dark background overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031713]/95 via-[#031713]/80 to-[#031713]/45" />

      {/* Green radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_40%,rgba(7,155,87,0.25),transparent_40%)]" />

      {/* Additional glow effects */}
      <div className="absolute -right-32 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#20e980]/10 blur-[120px]" />

      <div className="absolute -bottom-40 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-[#079b57]/15 blur-[120px]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12">

        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#20e980]/30 bg-[#031713]/60 px-4 py-2 text-sm font-semibold text-[#20e980] shadow-lg shadow-black/10 backdrop-blur-md">
            <Sparkles size={16} />
            Get to Know Global Bargain
          </div>

          {/* Eyebrow */}
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-[#20e980]">
            Who We Are
          </p>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl">
            Your Business.
            <span className="block text-[#20e980]">
              Our Commitment.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/80">
            Welcome to Global Bargain — your UK wholesale partner.
            We bring product discovery, convenient ordering and
            dedicated trade support together in one place.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="/products"
              className="group inline-flex items-center gap-3 rounded-full bg-[#20e980] px-7 py-4 font-bold text-[#031713] shadow-lg shadow-[#20e980]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#16d875]"
            >
              Explore Our Catalogue
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-[#031713]/40 px-7 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#20e980] hover:bg-white/10"
            >
              Contact Our Team
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* Trust features */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/20 pt-7">

            {[
              "Wholesale Focused",
              "Trade Account Support",
              "Customer First",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-white/85"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#20e980]"
                />
                {item}
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#031713]/50 to-transparent" />
    </section>

        {/* OUR STORY */}
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-2 lg:gap-20">

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#079b57]/15 bg-[#079b57]/5 px-4 py-2 text-sm font-bold text-[#079b57]">
                <Building2 size={16} />
                Our Story
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-[#17242d] sm:text-4xl lg:text-5xl">
                A wholesale partner built around
                <span className="text-[#079b57]"> your business.</span>
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-[#69756f]">
                <p>
                  Global Bargain is focused on providing business
                  customers with a convenient way to explore product
                  ranges, place orders and access helpful account support.
                </p>

                <p>
                  We believe that a good wholesale experience should be
                  straightforward. From discovering products to managing
                  orders, our aim is to bring everything together in a
                  clear and accessible way.
                </p>

                <p>
                  Whether you are exploring our catalogue for the first
                  time or managing an existing trade account, we want
                  every interaction with Global Bargain to feel simple
                  and professional.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#031713] px-7 py-4 font-bold text-white transition hover:bg-[#079b57]"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* BRAND VISUAL */}
            <div className="relative">
              <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#20e980]/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-[#031713] p-7 text-white shadow-2xl shadow-[#031713]/15 sm:p-10">

                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#079b57]/25 blur-[90px]" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#20e980]/30 bg-[#20e980]/10 text-[#20e980]">
                    <StoreIcon />
                  </div>

                  <p className="mt-12 text-sm font-bold uppercase tracking-[0.2em] text-[#20e980]">
                    Global Bargain
                  </p>

                  <h3 className="mt-4 max-w-md text-3xl font-black leading-tight sm:text-4xl">
                    Making wholesale
                    <span className="text-[#20e980]"> simpler.</span>
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                    A straightforward destination for business customers
                    to discover products and access trade account support.
                  </p>

                  <div className="mt-10 space-y-4 border-t border-white/10 pt-7">
                    {[
                      "Discover product ranges",
                      "Explore our trade catalogue",
                      "Get help when you need it",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-white/80"
                      >
                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-[#20e980]"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#dce2dd] bg-white p-5 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e4f0ec] text-[#079b57]">
                    <HeartHandshake size={23} />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#17242d]">
                      Built for Business
                    </p>
                    <p className="mt-1 text-xs text-[#69756f]">
                      Wholesale focused
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="bg-white px-5 py-20 sm:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[1300px]">

            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#079b57]">
                The Global Bargain Experience
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#17242d] sm:text-4xl">
                Everything focused on
                <span className="text-[#079b57]"> your convenience.</span>
              </h2>

              <p className="mt-5 leading-8 text-[#69756f]">
                We aim to make wholesale product discovery and account
                management a more straightforward experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-3xl border border-[#dce2dd] bg-[#f8faf9] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#20e980] hover:bg-white hover:shadow-xl hover:shadow-[#079b57]/5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e4f0ec] text-[#079b57] transition group-hover:bg-[#079b57] group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <p className="mt-8 text-xs font-bold tracking-[0.2em] text-[#079b57]">
                      0{index + 1}
                    </p>

                    <h3 className="mt-3 text-xl font-extrabold text-[#17242d]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#69756f]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <div className="mx-auto max-w-[1300px]">

            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#079b57]">
                  What Matters to Us
                </span>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-[#17242d] sm:text-4xl">
                  The values behind
                  <span className="text-[#079b57]"> our service.</span>
                </h2>
              </div>

              <p className="max-w-md leading-7 text-[#69756f]">
                Our approach is built around clear communication,
                dependable service and positive business relationships.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="group relative overflow-hidden rounded-3xl border border-[#dce2dd] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#20e980] hover:shadow-xl hover:shadow-[#079b57]/5"
                  >
                    <span className="absolute right-5 top-4 text-5xl font-black text-[#079b57]/[0.06]">
                      {value.number}
                    </span>

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e4f0ec] text-[#079b57] transition group-hover:bg-[#079b57] group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-7 text-lg font-extrabold text-[#17242d]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#69756f]">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
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

      </main>
    </SiteLayout>
  );
}

function StoreIcon() {
  return <Building2 size={27} />;
}

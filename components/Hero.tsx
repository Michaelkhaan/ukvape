import { ArrowRight, Headphones, ShieldCheck, Tag, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  const benefits = [
    { icon: Truck, title: "Free Delivery", text: "On Orders Over £100" },
    {
      icon: ShieldCheck,
      title: "Trade Accounts",
      text: "Available to Businesses",
    },
    { icon: Tag, title: "Competitive Prices", text: "For Trade & Retail" },
    {
      icon: Headphones,
      title: "Dedicated Support",
      text: "Always Here to Help",
    },
  ];

  return (
    <section className="relative isolate min-h-[350px] overflow-hidden bg-[#020f0e] text-white md:min-h-[400px]">
      <div className="absolute inset-y-0 right-0 -z-20 w-full sm:w-[67%]">
        <Image
          src="/hero-device-stage.jpg"
          alt="Reusable vape pod devices displayed in a studio"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 67vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#020e0d_0%,rgba(2,14,13,.98)_28%,rgba(2,14,13,.62)_51%,rgba(2,14,13,.12)_78%,rgba(2,14,13,.38)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-50 [background:repeating-linear-gradient(130deg,transparent_0,transparent_110px,rgba(20,226,112,.08)_112px,transparent_130px)]" />

      <div className="mx-auto grid min-h-[350px] max-w-[1500px] grid-cols-1 items-center gap-5 px-5 py-10 sm:px-7 lg:min-h-[312px] lg:grid-cols-[minmax(0,1fr)_250px] lg:px-10 lg:py-7">
        <div className="relative z-10 max-w-[620px]">
          <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] text-[#28ef88] sm:text-[11px]">
            <span className="h-px w-8 bg-[#20df7b]" />
            Premium Vape Wholesale
            <span className="h-px w-8 bg-[#20df7b]" />
          </p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-black leading-[.88] tracking-[-.065em] text-white">
            Leading UK
            <span className="mt-1 block bg-gradient-to-r from-[#39f18c] via-[#1fe47d] to-[#0bb96a] bg-clip-text italic text-transparent">
              Vape Supplier
            </span>
          </h1>
          <p className="mt-4 text-[15px] font-medium tracking-[-.02em] text-white/90 sm:text-[17px]">
            Top Brands. Best Prices. Trade Only.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#00d96d] to-[#42ef8c] px-6 text-[11px] font-black text-[#042116] shadow-[0_7px_22px_rgba(0,220,109,.24)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Shop Wholesale{" "}
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/trade-register"
              className="inline-flex h-11 items-center rounded-full border border-white/65 bg-black/15 px-6 text-[11px] font-extrabold text-white backdrop-blur-sm transition hover:border-[#35ed8d] hover:bg-white/10"
            >
              Trade Account
            </Link>
          </div>
        </div>

        {/* <div className="relative z-10 hidden space-y-3.5 lg:block">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#13e77c] bg-[#031b16]/75 text-[#23ee85] shadow-[0_0_20px_rgba(24,225,119,.12)]">
                    <Icon size={19} />
                  </span>
                  <span>
                    <b className="block text-[12px] font-extrabold text-white">
                      {title}
                    </b>
                    <small className="mt-0.5 block text-[10px] font-medium text-white/75">
                      {text}
                    </small>
                  </span>
                </div>
              ))}
            </div> */}
      </div>
    </section>
  );
}

export default Hero;

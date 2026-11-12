import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { featuredDevice } from "@/lib/homepage-data";

export default function FeaturedDevice() {
  return (
    <section className="relative my-16 overflow-hidden rounded-3xl bg-[#061c16] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(16,185,129,.23),transparent_55%)]" />

      <div className="relative grid items-center gap-8 px-6 py-12 md:grid-cols-2 md:px-12 md:py-16">
        <div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
            Featured device
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl">
            {featuredDevice.name}
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/65">
            {featuredDevice.description}
          </p>

          <div className="mt-7 space-y-3">
            {featuredDevice.specifications.map((spec) => (
              <div key={spec} className="flex items-center gap-3 text-sm">
                <Check size={17} className="text-emerald-400" />
                {spec}
              </div>
            ))}
          </div>

          <Link
            href="/products?search=Hayati%20Pro%20Ultra"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-400"
          >
            View product information
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="relative mx-auto h-[320px] w-full max-w-md">
          <Image
            src={featuredDevice.image}
            alt={featuredDevice.name}
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
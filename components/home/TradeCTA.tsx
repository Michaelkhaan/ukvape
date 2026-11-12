import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function TradeCTA() {
  return (
    <section className="relative mb-12 overflow-hidden rounded-3xl bg-emerald-600 px-6 py-12 text-white md:px-12">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />

      <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-100">
            <ShieldCheck size={18} />
            Verified wholesale access
          </div>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Business account access
          </h2>

          <p className="mt-4 text-sm leading-7 text-emerald-50">
            Apply for a verified trade account to access approved wholesale
            catalogue information and business ordering facilities.
          </p>
        </div>

        <Link
          href="/trade-register"
          className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-emerald-700! transition hover:bg-emerald-50"
        >
          Apply for Trade Access
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
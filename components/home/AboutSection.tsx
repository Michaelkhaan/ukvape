import Link from "next/link";
import { ArrowRight, Building2, PackageCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="grid gap-8 py-16 md:grid-cols-2 md:items-center">
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
          About Global Bargain
        </span>

        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
          Wholesale built around reliable retail partnerships.
        </h2>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          Global Bargain is a UK-based wholesale business providing verified
          trade customers with access to established brands, product ranges
          and business-focused supply services.
        </p>

        <Link
          href="/about"
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
        >
          Discover our company
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-7">
          <Building2 size={28} className="text-emerald-700" />
          <h3 className="mt-5 font-extrabold text-slate-900">
            Who We Are
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            A UK-based wholesale partner supporting verified business buyers.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-7">
          <PackageCheck size={28} className="text-emerald-700" />
          <h3 className="mt-5 font-extrabold text-slate-900">
            What We Do
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Provide structured product discovery, retailer ordering and trade
            account support.
          </p>
        </div>
      </div>
    </section>
  );
}
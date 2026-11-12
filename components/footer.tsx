"use client"

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Explore: [
    ["Vape range", "/products"],
    ["Brands", "/products?type=brands"],
    ["New arrivals", "/products?sort=new"],
    ["Best sellers", "/products?sort=best"],
  ],
  Information: [
    ["About us", "/about"],
    ["Trade accounts", "/trade-register"],
    ["FAQs", "/faq"],
    ["Contact", "/contact"],
  ],
  Policies: [
    ["Shipping policy", "/policies"],
    ["Returns policy", "/policies"],
    ["Privacy policy", "/policies"],
    ["Terms & conditions", "/policies"],
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#061b16] text-white">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_1.2fr] lg:px-12 lg:py-16">
        <div className="max-w-xs">
          <Link
          href="/"
          onClick={() => {}}
          className="flex w-[135px] shrink-0 items-center sm:w-[160px] lg:w-[175px] xl:w-[190px]"
          aria-label="Global Bargain home"
        >
          <Image
            src="/logo-mark.webp"
            alt="Global Bargain"
            width={190}
            height={60}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>
          <p className="mt-5 text-xs leading-6 text-slate-400">
            A UK vape wholesale partner supporting verified retailers with
            reusable pod systems, vape hardware and dedicated trade account
            support.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">
              {title}
            </h3>
            <ul className="mt-5 space-y-3">
              {links.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs text-slate-400 transition hover:text-emerald-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">
            Contact Global Bargain
          </h3>
          <div className="mt-5 space-y-4 text-xs text-slate-400">
            <p className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-emerald-400" />
              13 Overbridge Rd, Salford M7 1SL, United Kingdom
            </p>
            <p className="flex items-center gap-2.5">
              <Phone size={15} className="text-emerald-400" />
              +44 7438 088313
            </p>
            <p className="flex items-center gap-2.5">
              <Mail size={15} className="text-emerald-400" />
              info@globalbargain.co.uk
            </p>
          </div>
          <Link
            href="/trade-register"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-xs font-extrabold text-[#06271b] transition hover:bg-emerald-300"
          >
            Apply for trade access <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-5 py-5 text-[10px] text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <span>
            © 2026 Global Bargain Ltd. All rights
            reserved.
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={12} /> Verified trade access
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Truck size={12} /> UK distribution
            </span>
            <span>For verified trade customers aged 18+ only.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

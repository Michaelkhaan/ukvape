// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Headphones,
//   ShieldCheck,
//   Truck,
//   Tag,
//   ChevronRight,
//   Star,
// } from "lucide-react";
// import SiteLayout from "@/components/site-layout";
// import HomeProductTile from "@/components/home-product-tile";
// import { products } from "@/lib/data";
// import Hero from "@/components/Hero";
// import NewArrivals from "@/components/NewArrivals";

// const brands = [
//   "VAPORESSO",
//   "GEEKVAPE",
//   "HAYATI",
//   "SMOK",
//   "VOOPOO",
//   "OXVA",
//   "IVG",
// ];

// const categories = [
//   {
//     name: "Pod Kits",
//     href: "/products?category=Refillable%20Pod%20Kits",
//     image: "/category-pod-kits-exact.jpg",
//   },
//   {
//     name: "Refillable Pods",
//     href: "/products?category=Refillable%20Pod%20Kits",
//     image: "/category-refillable-pods-exact.jpg",
//   },
//   {
//     name: "Vape Devices",
//     href: "/products",
//     image: "/category-vape-devices-exact.jpg",
//   },
//   {
//     name: "E-Liquids",
//     href: "/products?category=E-Liquids",
//     image: "/category-eliquids-exact.jpg",
//   },
//   {
//     name: "Accessories",
//     href: "/products?category=Accessories",
//     image: "/category-accessories-exact.jpg",
//   },
// ];

// const benefits = [
//   { icon: Truck, title: "Free Delivery", text: "On Orders Over £100" },
//   {
//     icon: ShieldCheck,
//     title: "Trade Accounts",
//     text: "Available to Businesses",
//   },
//   { icon: Tag, title: "Competitive Prices", text: "For Trade & Retail" },
//   { icon: Headphones, title: "Dedicated Support", text: "Always Here to Help" },
// ];

// const trustItems = [
//   { icon: ShieldCheck, title: "100% Authentic", text: "Products" },
//   { icon: Truck, title: "Fast & Reliable", text: "UK Delivery" },
//   { icon: Headphones, title: "Expert Support", text: "For Your Business" },
//   { icon: Star, title: "Trusted by", text: "Trade Customers" },
// ];

// export default function Home() {

//   return (
//     <SiteLayout>
//       <main className="overflow-hidden bg-[#f5f7fa] text-[#111c25]">
//         {/* Hero — recreated from the approved reference artwork */}
//         <Hero />

//         <div className="relative z-20 mx-auto -mt-1 max-w-[1500px] px-4 sm:px-6 lg:px-4">
//           {/* Service strip */}
//           <section className="grid overflow-hidden rounded-[13px] border border-[#dce5eb] bg-white shadow-[0_8px_24px_rgba(14,32,45,.12)] sm:grid-cols-2 lg:grid-cols-4">
//             {benefits.map(({ icon: Icon, title, text }, index) => (
//               <div
//                 key={title}
//                 className={`flex min-h-[58px] items-center gap-3 px-4 py-3 sm:px-6 ${index ? "border-t border-[#e8eef2] sm:border-l sm:border-t-0" : ""} ${index === 2 ? "lg:border-l" : ""}`}
//               >
//                 <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e9f8ef] text-[#079b57]">
//                   <Icon size={19} />
//                 </span>
//                 <span>
//                   <b className="block text-[10px] font-extrabold leading-tight text-[#17242d]">
//                     {title}
//                   </b>
//                   <small className="mt-0.5 block text-[9px] text-[#6e7d87]">
//                     {text}
//                   </small>
//                 </span>
//               </div>
//             ))}
//           </section>

//           {/* Brand names */}
//           <section
//             aria-label="Featured brands"
//             className="mt-3 grid grid-cols-2 overflow-hidden rounded-xl border border-[#e3eaf0] bg-white shadow-sm sm:grid-cols-4 lg:grid-cols-7"
//           >
//             {brands.map((brand, index) => (
//               <Link
//                 href={`/products?brand=${encodeURIComponent(brand)}`}
//                 key={brand}
//                 className={`flex min-h-[58px] items-center justify-center px-3 py-3 text-center transition hover:bg-[#f0faf4] ${index ? "border-l border-[#e9eef2]" : ""} ${index >= 2 ? "border-t border-[#e9eef2] lg:border-t-0" : ""}`}
//               >
//                 <span
//                   className={`whitespace-nowrap text-[12px] font-black tracking-[-.045em] text-[#1c2a34] transition hover:text-[#078c50] sm:text-[13px] ${brand === "SMOK" ? "font-serif text-[17px]" : ""} ${brand === "OXVA" ? "italic tracking-[.06em]" : ""}`}
//                 >
//                   {brand}
//                 </span>
//               </Link>
//             ))}
//           </section>

//           {/* Vape categories */}
//           <section className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
//             {categories.map((category) => (
//               <Link
//                 href={category.href}
//                 key={category.name}
//                 className="group relative block overflow-hidden rounded-[13px] shadow-[0_4px_13px_rgba(13,34,46,.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(13,34,46,.18)]"
//               >
//                 <Image
//                   src={category.image}
//                   alt={`${category.name} category`}
//                   width={600}
//                   height={214}
//                   className="h-auto w-full object-cover"
//                   sizes="(max-width: 768px) 100vw, 20vw"
//                 />
//                 <span className="sr-only">Shop {category.name}</span>
//               </Link>
//             ))}
//           </section>

//           {/* Product showcase */}
//           <NewArrivals />

//           {/* Promotional panels */}
//           <section className="grid gap-3 pb-6 sm:grid-cols-2 sm:pb-8">
//             <Link
//               href="/trade-register"
//               className="group block overflow-hidden rounded-[13px] shadow-[0_5px_16px_rgba(12,31,42,.12)] transition hover:-translate-y-0.5 hover:shadow-lg"
//             >
//               <Image
//                 src="/promo-trade-exact.jpg"
//                 alt="Trade accounts — apply now and unlock exclusive business benefits"
//                 width={1490}
//                 height={264}
//                 className="h-auto w-full transition duration-500 group-hover:scale-[1.01]"
//               />
//             </Link>
//             <Link
//               href="/about"
//               className="group block overflow-hidden rounded-[13px] shadow-[0_5px_16px_rgba(12,31,42,.12)] transition hover:-translate-y-0.5 hover:shadow-lg"
//             >
//               <Image
//                 src="/promo-delivery-exact.jpg"
//                 alt="Fast and reliable UK delivery"
//                 width={1490}
//                 height={264}
//                 className="h-auto w-full transition duration-500 group-hover:scale-[1.01]"
//               />
//             </Link>
//           </section>

//           {/* Trust and service footer strip */}
//           <section className="mb-7 grid overflow-hidden rounded-xl bg-[#031713] text-white shadow-[0_8px_25px_rgba(2,21,15,.16)] sm:grid-cols-2 lg:grid-cols-4">
//             {trustItems.map(({ icon: Icon, title, text }, index) => (
//               <div
//                 key={title}
//                 className={`flex min-h-[72px] items-center gap-3 px-5 py-4 ${index ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}
//               >
//                 <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#14db75]/50 text-[#20e980]">
//                   <Icon size={21} />
//                 </span>
//                 <span>
//                   <b className="block text-[11px] font-extrabold">{title}</b>
//                   <small className="mt-0.5 block text-[10px] text-white/65">
//                     {text}
//                   </small>
//                 </span>
//               </div>
//             ))}
//           </section>

//           <section className="mb-8 flex flex-col items-start justify-between gap-3 rounded-xl border border-[#e1e8ee] bg-white px-4 py-4 sm:flex-row sm:items-center sm:px-6">
//             <div className="flex items-start gap-3">
//               <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eaf8ef] text-[#078e51]">
//                 <CheckCircle2 size={18} />
//               </span>
//               <div>
//                 <p className="text-[10px] font-extrabold text-[#1a2a33]">
//                   Trade supply for verified UK businesses
//                 </p>
//                 <p className="mt-1 max-w-3xl text-[9px] leading-5 text-[#77858e]">
//                   For verified business customers aged 18 and over. Product
//                   availability and supply are subject to applicable UK
//                   requirements. The catalogue focuses on reusable and refillable
//                   devices.
//                 </p>
//               </div>
//             </div>
//             <Link
//               href="/trade-register"
//               className="shrink-0 rounded-full bg-[#079b57] px-4 py-2.5 text-[9px] font-black text-white transition hover:bg-[#067c48]"
//             >
//               Apply for Trade Access{" "}
//               <ChevronRight size={12} className="ml-1 inline" />
//             </Link>
//           </section>
//         </div>
//       </main>
//     </SiteLayout>
//   );
// }



import SiteLayout from "@/components/site-layout";
import TrustHighlights from "@/components/home/TrustHighlights";
import BrandShowcase from "@/components/home/BrandShowcase";
import CategorySection from "@/components/home/CategorySection";

import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import BestSellersSection from "@/components/home/BestSellersSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";

import FeaturedDevice from "@/components/home/FeaturedDevice";
import AboutSection from "@/components/home/AboutSection";
import WholesaleInfo from "@/components/home/WholesaleInfo";
import FAQSection from "@/components/home/FAQSection";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import TradeCTA from "@/components/home/TradeCTA";
import ComplianceNotice from "@/components/home/ComplianceNotice";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f5f7fa] text-slate-900">

        {/* 01. Hero */}
        <Hero />

        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">

          {/* 02. Trust highlights */}
          <TrustHighlights />

          {/* 03. Brand showcase */}
          <BrandShowcase />

          {/* 04. Product categories */}
          <CategorySection />

          {/* 05. New arrivals */}
          <NewArrivalsSection />

          {/* 06. Best sellers */}
          <BestSellersSection />

          {/* 07. Featured products */}
          <FeaturedProductsSection />

          {/* 08. Featured device */}
          <FeaturedDevice />

          {/* 09. About Global Bargain */}
          <AboutSection />

          {/* 10. Wholesale information */}
          <WholesaleInfo />

          {/* 11. Service highlights */}
          <ServiceHighlights />

          {/* 12. FAQ */}
          <FAQSection />

          {/* 13. Trade account CTA */}
          <TradeCTA />

          {/* 14. Compliance notice */}
          <ComplianceNotice />

        </div>
      </main>
    </SiteLayout>
  );
}

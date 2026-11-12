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

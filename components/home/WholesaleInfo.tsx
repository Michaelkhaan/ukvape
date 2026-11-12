export default function WholesaleInfo() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-6 py-10 md:px-12 md:py-14">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
        Premium UK wholesale platform
      </span>

      <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-slate-950">
        Wholesale supply for retailers, distributors and established
        businesses.
      </h2>

      <div className="mt-7 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-bold text-slate-900">
            Premium wholesale distribution across the UK
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The Global Bargain platform provides a structured catalogue and
            business-focused ordering experience for verified UK retailers.
            Product discovery is organised around brands, categories and
            eligible wholesale inventory.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-slate-900">
            A modern B2B ecommerce experience
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Retailers can explore available catalogue information, manage
            trade account access and use dedicated support and distribution
            services through a responsive wholesale platform.
          </p>
        </div>
      </div>
    </section>
  );
}
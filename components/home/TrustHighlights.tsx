import { homeBenefits } from "@/lib/homepage-data";

export default function TrustHighlights() {
  return (
    <section className="relative z-10 mx-auto -mt-6 grid max-w-7xl grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
      {homeBenefits.map(({ icon: Icon, title, description }, index) => (
        <div
          key={title}
          className={`flex items-center gap-4 p-5 ${
            index ? "border-t border-slate-100 sm:border-l sm:border-t-0" : ""
          }`}
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
            <Icon size={23} />
          </span>
          <div>
            <h3 className="text-sm font-extrabold text-slate-900">{title}</h3>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              {description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
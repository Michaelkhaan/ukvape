import { Truck, ShieldCheck, PackageCheck } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Fast UK Trade Delivery",
    description: "Reliable wholesale delivery support for approved retailers.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Retailer Access",
    description: "Trade account access for verified business customers.",
  },
  {
    icon: PackageCheck,
    title: "Premium Product Catalogue",
    description: "A structured catalogue of eligible products and accessories.",
  },
];

export default function ServiceHighlights() {
  return (
    <section className="grid gap-4 py-12 md:grid-cols-3">
      {services.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="rounded-2xl border border-slate-200 bg-white p-6"
        >
          <Icon size={26} className="text-emerald-600" />
          <h3 className="mt-5 font-extrabold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>
      ))}
    </section>
  );
}
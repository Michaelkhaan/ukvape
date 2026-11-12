import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionTitle({ eyebrow, title, href, action = "View all" }: { eyebrow?: string; title: string; href?: string; action?: string }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        {eyebrow && <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">{eyebrow}</span>}
        <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.045em] text-slate-900 sm:text-3xl">{title}</h2>
      </div>
      {href && <Link href={href} className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-emerald-800 transition hover:text-emerald-600">{action}<ArrowRight size={15}/></Link>}
    </div>
  );
}

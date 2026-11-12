import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Package, ShieldCheck } from "lucide-react";

export type BestSellerProduct = {
  name: string;
  slug: string;
  category: string;
  pack?: string;
  strength?: string;
  battery?: string;
  puffs?: string;
  badge?: string;
  image: string;
};

type BestSellerProductCardProps = {
  product: BestSellerProduct;
};

export default function BestSellerProductCard({
  product,
}: BestSellerProductCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#e4ebe6] bg-white shadow-[0_8px_30px_rgba(15,40,28,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dfc9] hover:shadow-[0_18px_45px_rgba(15,92,55,0.12)]">
      <Link
        href={`/products/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="absolute inset-0 z-10 rounded-[22px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#079b57] focus-visible:ring-offset-2"
      />

      <div className="relative isolate flex h-[250px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,#ffffff_0%,#f7faf8_58%,#edf4ef_100%)] px-5 py-7 sm:h-[270px]">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#dff4e7]/70 blur-2xl transition-transform duration-500 group-hover:scale-125" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-white/90 blur-2xl" />

        {product.badge && (
          <span className="absolute left-4 top-4 z-[1] rounded-full border border-[#bce8cc] bg-[#e9f8ef] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#087a45]">
            {product.badge}
          </span>
        )}

        <span className="absolute right-4 top-4 z-[1] rounded-full border border-[#e1e9e3] bg-white/90 px-3 py-1.5 text-[10px] font-bold text-[#64736a] shadow-sm">
          {product.category}
        </span>

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="z-0 object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-[1.055]"
          />
        ) : (
          <Package className="h-16 w-16 text-[#9db8a7]" strokeWidth={1.2} />
        )}

        <div className="pointer-events-none absolute inset-x-8 bottom-3 h-px bg-gradient-to-r from-transparent via-[#dbe8df] to-transparent" />
      </div>

      <div className="relative z-[1] flex flex-1 flex-col px-5 pb-5 pt-4">
        <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#079b57]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#079b57]" />
          HAYATI
        </div>

        <h3 className="line-clamp-2 min-h-[48px] text-[15px] font-extrabold leading-6 text-[#172a20] transition-colors group-hover:text-[#07864b]">
          {product.name}
        </h3>

        <div className="my-4 grid grid-cols-2 gap-2">
          {[
            ["Pack", product.pack],
            ["Strength", product.strength],
            ...(product.battery ? [["Battery", product.battery]] : []),
            ["Puffs", product.puffs],
          ]
            .filter((item) => item[1])
            .slice(0, 4)
            .map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-[#edf1ed] bg-[#f8faf8] px-3 py-2"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#87948b]">
                  {label}
                </p>
                <p className="mt-0.5 text-xs font-extrabold text-[#293a30]">
                  {value}
                </p>
              </div>
            ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[#edf1ed] pt-4">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#718078]">
            <ShieldCheck size={14} className="text-[#079b57]" />
            Verified trade access
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#079b57] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#067c48]">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>
    </article>
  );
}

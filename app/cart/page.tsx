import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

import SiteLayout from "@/components/site-layout";
import CartClient from "@/components/cart-client";

export default function Cart() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f5f7fa] text-[#17242d]">
        {/* Hero Banner */}
        <section className="relative isolate overflow-hidden bg-[#031713] text-white">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(7,155,87,0.25),transparent_35%)]" />

          <div className="absolute -right-24 -top-32 -z-10 h-[380px] w-[380px] rounded-full bg-[#079b57]/20 blur-[100px]" />

          <div className="absolute -bottom-40 -left-20 -z-10 h-[350px] w-[350px] rounded-full bg-[#20e980]/10 blur-[100px]" />

          <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-10 flex items-center gap-2 text-sm font-medium text-white/50">
              <Link href="/" className="transition hover:text-[#20e980]">
                Home
              </Link>

              <span className="text-white/25">/</span>

              <span className="text-[#20e980]">Shopping Cart</span>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#20e980]/25 bg-[#20e980]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#20e980]">
                  <ShoppingBag size={15} />
                  Your shopping bag
                </div>

                <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  Your Cart<span className="text-[#20e980]">.</span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  {
                    " Everything you've selected, all in one place.Review your products, update quantities and continue to a smooth checkout experience."
                  }
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-white/65 sm:text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-[#20e980]" />
                    Easy order management
                  </div>

                  <div className="flex items-center gap-2">
                    <ShieldCheck size={17} className="text-[#20e980]" />
                    Secure checkout
                  </div>
                </div>
              </div>

              {/* Right information card */}
              <div className="hidden w-[280px] rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md lg:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20e980]/10 text-[#20e980]">
                  <Truck size={24} />
                </div>

                <h2 className="mt-5 text-lg font-bold">Ready when you are</h2>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Review your order and proceed when everything looks right.
                </p>

                <div className="mt-5 h-px bg-white/10" />

                <p className="mt-4 text-xs font-semibold text-[#20e980]">
                  YOUR ORDER STARTS HERE
                </p>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#079b57] to-transparent" />
        </section>

        {/* Cart Content */}
        
<section className="relative overflow-hidden bg-[#f5f7fa]">
  <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#079b57]/[0.04] blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

    {/* Section Header */}
    <div className="mb-9 flex flex-col justify-between gap-6 border-b border-[#dce5df] pb-7 sm:flex-row sm:items-end">

      <div className="max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#079b57]/15 bg-[#e8f5ed] px-3.5 py-2">
          <span className="h-2 w-2 rounded-full bg-[#079b57] shadow-[0_0_8px_rgba(7,155,87,0.5)]" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#087c49]">
            Shopping overview
          </span>
        </div>

        <h2 className="text-3xl font-black tracking-tight text-[#17242d] sm:text-4xl lg:text-[42px]">
          Review your
          <span className="text-[#079b57]"> selection.</span>
        </h2>

        <p className="mt-3 max-w-lg text-sm leading-7 text-[#69756f] sm:text-base">
          Your selected products are waiting. Review your items,
          adjust quantities and get everything ready for checkout.
        </p>
      </div>

      {/* Continue Shopping */}
      <Link
        href="/products"
        className="group inline-flex w-fit items-center justify-center gap-3 rounded-xl border border-[#cfe1d5] bg-white px-5 py-3.5 text-sm font-bold text-[#087c49] shadow-[0_4px_15px_rgba(20,50,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#079b57] hover:bg-[#079b57] hover:text-white hover:shadow-[0_10px_25px_rgba(7,155,87,0.18)]"
      >
        <span>Continue shopping</span>
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>

    {/* Cart Content */}
    <div className="relative">
      <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-br from-[#079b57]/10 via-transparent to-[#20e980]/10 blur-xl" />

      <div className="relative overflow-hidden rounded-2xl border border-[#e2eae5] bg-white shadow-[0_12px_45px_rgba(20,50,35,0.045)] sm:rounded-3xl">
        <div className="h-1 w-full bg-gradient-to-r from-[#079b57] via-[#20e980] to-[#079b57]" />

        <div className="p-4 sm:p-6 lg:p-8">
          <CartClient />
        </div>
      </div>
    </div>

    {/* Bottom Note */}
    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-[#69756f] sm:justify-start">
      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#079b57]" />
        Your cart is saved while you browse
      </span>

      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#079b57]" />
        Review quantities before checkout
      </span>
    </div>
  </div>
</section>


        {/* Bottom trust strip */}
        <section className="border-t border-[#e3e9e5] bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-7 sm:grid-cols-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e7f7ed] text-[#079b57]">
                <ShieldCheck size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#17242d]">
                  Secure shopping
                </p>
                <p className="mt-1 text-xs text-[#69756f]">
                  Protected checkout experience
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e7f7ed] text-[#079b57]">
                <Truck size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#17242d]">
                  Reliable delivery
                </p>
                <p className="mt-1 text-xs text-[#69756f]">
                  Convenient delivery options
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e7f7ed] text-[#079b57]">
                <ShoppingBag size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#17242d]">
                  Trade focused
                </p>
                <p className="mt-1 text-xs text-[#69756f]">
                  Built for wholesale customers
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

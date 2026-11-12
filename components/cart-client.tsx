
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  LockKeyhole,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Trash2,
  Truck,
} from "lucide-react";

import { useCart } from "./cart-provider";
import { money } from "@/lib/data";

const FREE_DELIVERY_LIMIT = 100;

export default function CartClient() {
  const { items, subtotal, change, remove } = useCart();

  const delivery =
    subtotal >= FREE_DELIVERY_LIMIT || subtotal === 0 ? 0 : 4.99;

  const total = subtotal + delivery;

  const remaining = Math.max(FREE_DELIVERY_LIMIT - subtotal, 0);

  const progress = Math.min(
    (subtotal / FREE_DELIVERY_LIMIT) * 100,
    100
  );

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_390px]">

      {/* LEFT: CART ITEMS */}
      <div className="min-w-0">

        {items.length > 0 ? (
          <>
            {/* Cart header */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-[#17242d]">
                  Cart items
                </h3>

                <p className="mt-1 text-sm text-[#69756f]">
                  Review and manage your selected products.
                </p>
              </div>

              <span className="rounded-full border border-[#dcece2] bg-[#eaf7ef] px-3.5 py-2 text-xs font-bold text-[#087c49]">
                {items.length} {items.length === 1 ? "Product" : "Products"}
              </span>
            </div>

            {/* Free delivery progress */}
            <div className="mb-6 overflow-hidden rounded-2xl border border-[#dcece2] bg-white p-5 shadow-[0_4px_20px_rgba(15,50,35,0.03)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f7ed] text-[#079b57]">
                  <Truck size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  {remaining > 0 ? (
                    <p className="text-sm font-bold text-[#17242d]">
                      {`You're ${money(remaining)} away from free delivery!`}
                    </p>
                  ) : (
                    <p className="text-sm font-bold text-[#087c49]">
                      {"Congratulations! You've unlocked free delivery."}
                    </p>
                  )}

                  <p className="mt-1 text-xs text-[#69756f]">
                    {remaining > 0
                      ? `Spend ${money(remaining)} more to qualify.`
                      : "Free delivery has been applied to your order."}
                  </p>
                </div>

                {remaining === 0 && (
                  <Check
                    size={21}
                    className="shrink-0 text-[#079b57]"
                  />
                )}
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#edf2ee]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#079b57] to-[#20e980] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-2 flex justify-between text-[10px] font-semibold text-[#8a9690]">
                <span>{money(subtotal)} spent</span>
                <span>{money(FREE_DELIVERY_LIMIT)} target</span>
              </div>
            </div>

            {/* Product list */}
            <div className="overflow-hidden rounded-2xl border border-[#e3ebe6] bg-white shadow-[0_5px_25px_rgba(15,50,35,0.035)]">

              {/* Table heading - desktop */}
              <div className="hidden grid-cols-[minmax(0,1fr)_100px_125px_100px_35px] items-center gap-4 border-b border-[#edf1ee] bg-[#f9fbfa] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#89948e] md:grid">
                <span>Product details</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span />
              </div>

              <div className="divide-y divide-[#edf1ee]">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="group grid gap-4 p-4 transition-colors hover:bg-[#fbfdfb] sm:p-5 md:grid-cols-[minmax(0,1fr)_100px_125px_100px_35px] md:items-center md:gap-4 md:px-6"
                  >
                    {/* Product details */}
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-[92px] w-[82px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#e8eeea] bg-gradient-to-br from-[#f7faf8] to-[#edf4ef] p-2">
                        <div
                          className="product-visual"
                          style={
                            {
                              "--device": product.colour,
                            } as React.CSSProperties
                          }
                        >
                          <div className="device">
                            <div className="device-screen">
                              <b>{product.brand}</b>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="min-w-0">
                        <span className="mb-1 inline-block text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#079b57]">
                          {product.brand}
                        </span>

                        <h4 className="line-clamp-2 text-sm font-extrabold leading-5 text-[#17242d] transition-colors group-hover:text-[#087c49] sm:text-[15px]">
                          {product.name}
                        </h4>

                        {product.flavour && (
                          <p className="mt-1.5 text-xs text-[#69756f]">
                            {product.flavour}
                          </p>
                        )}

                        <p className="mt-2 text-xs font-semibold text-[#89948e] md:hidden">
                          {money(product.price)} each
                        </p>
                      </div>
                    </div>

                    {/* Unit price */}
                    <div className="hidden md:block">
                      <p className="text-sm font-bold text-[#17242d]">
                        {money(product.price)}
                      </p>
                      <p className="mt-1 text-[10px] text-[#89948e]">
                        Per unit
                      </p>
                    </div>

                    {/* Quantity control */}
                    <div className="flex items-center justify-between md:block">
                      <span className="text-xs font-semibold text-[#89948e] md:hidden">
                        Quantity
                      </span>

                      <div className="inline-flex h-10 items-center rounded-xl border border-[#e3ebe6] bg-white p-1">
                        <button
                          type="button"
                          onClick={() =>
                            change(product.id, quantity - 1)
                          }
                          disabled={quantity <= 1}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#69756f] transition hover:bg-[#eaf7ef] hover:text-[#087c49] disabled:cursor-not-allowed disabled:opacity-35"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="min-w-8 text-center text-sm font-extrabold tabular-nums text-[#17242d]">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            change(product.id, quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#69756f] transition hover:bg-[#eaf7ef] hover:text-[#087c49]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Line total */}
                    <div className="flex items-center justify-between md:block">
                      <span className="text-xs font-semibold text-[#89948e] md:hidden">
                        Item total
                      </span>

                      <p className="text-sm font-black text-[#17242d]">
                        {money(product.price * quantity)}
                      </p>
                    </div>

                    {/* Remove */}
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => remove(product.id)}
                        aria-label={`Remove ${product.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-transparent text-[#a0aaa4] transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue shopping */}
            <Link
              href="/products"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087c49] transition hover:text-[#079b57]"
            >
              <ArrowRight
                size={16}
                className="rotate-180 transition-transform group-hover:-translate-x-1"
              />
              Continue shopping
            </Link>
          </>
        ) : (
          /* Empty cart */
          <div className="overflow-hidden rounded-3xl border border-[#e3ebe6] bg-white shadow-[0_8px_35px_rgba(15,50,35,0.04)]">
            <div className="relative overflow-hidden px-6 py-16 text-center sm:px-10 sm:py-20">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#20e980]/[0.06] blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#079b57]/[0.06] blur-3xl" />

              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] bg-[#eaf7ef] text-[#079b57] shadow-inner">
                <ShoppingBag size={40} strokeWidth={1.5} />

                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-[#20e980] text-[#031713]">
                  <Plus size={13} strokeWidth={3} />
                </span>
              </div>

              <span className="relative mt-7 inline-block rounded-full bg-[#eaf7ef] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#087c49]">
                Your bag is waiting
              </span>

              <h2 className="relative mt-4 text-2xl font-black tracking-tight text-[#17242d] sm:text-3xl">
                Your cart is empty
              </h2>

              <p className="relative mx-auto mt-3 max-w-md text-sm leading-7 text-[#69756f]">
                {"You haven't added any products yet. Explore our collection and find the products you need for your business."}
              </p>

              <Link
                href="/products"
                className="relative mt-8 inline-flex min-h-[50px] items-center justify-center gap-3 rounded-xl bg-[#079b57] px-7 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(7,155,87,0.2)] transition hover:-translate-y-0.5 hover:bg-[#067c46]"
              >
                Explore products
                <ArrowRight size={17} />
              </Link>

              <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] font-semibold text-[#89948e]">
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-[#079b57]" />
                  Quality products
                </span>

                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-[#079b57]" />
                  Trade focused
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT: ORDER SUMMARY */}
      <aside className="lg:sticky lg:top-24">
        <div className="overflow-hidden rounded-2xl border border-[#e3ebe6] bg-white shadow-[0_8px_30px_rgba(15,50,35,0.055)]">

          {/* Summary heading */}
          <div className="relative overflow-hidden bg-[#031713] px-6 py-6 text-white">
            <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#079b57]/20 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20e980]">
                  Your purchase
                </p>

                <h3 className="mt-2 text-xl font-black tracking-tight">
                  Order summary
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-[#20e980]">
                <ShoppingBag size={21} />
              </div>
            </div>

            <p className="relative mt-3 text-xs text-white/50">
              A clear breakdown of your order.
            </p>
          </div>

          <div className="p-5 sm:p-6">

            {/* Subtotal and delivery */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#69756f]">Subtotal</span>
                <span className="font-bold text-[#17242d]">
                  {money(subtotal)}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-[#69756f]">Delivery</span>

                {delivery === 0 ? (
                  <span className="rounded-full bg-[#eaf7ef] px-2.5 py-1 text-[11px] font-extrabold text-[#087c49]">
                    FREE
                  </span>
                ) : (
                  <span className="font-bold text-[#17242d]">
                    {money(delivery)}
                  </span>
                )}
              </div>
            </div>

            {subtotal > 0 && subtotal < FREE_DELIVERY_LIMIT && (
              <div className="mt-5 rounded-xl border border-[#dcece2] bg-[#f2faf4] p-3.5">
                <div className="flex items-start gap-2.5">
                  <Truck
                    size={17}
                    className="mt-0.5 shrink-0 text-[#079b57]"
                  />

                  <p className="text-xs leading-5 text-[#496655]">
                    Add{" "}
                    <span className="font-extrabold text-[#087c49]">
                      {money(remaining)}
                    </span>{" "}
                    more to your order to unlock free delivery.
                  </p>
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="my-5 border-t border-dashed border-[#dce5df]" />

            {/* Total */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-bold text-[#17242d]">
                  Total amount
                </p>
                <p className="mt-1 text-[10px] text-[#89948e]">
                  Including delivery
                </p>
              </div>

              <span className="text-2xl font-black tracking-tight text-[#087c49]">
                {money(total)}
              </span>
            </div>

            {/* Checkout */}
            <Link
              href={items.length > 0 ? "/checkout" : "/products"}
              className="group mt-6 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#079b57] px-5 py-3 text-sm font-extrabold text-white shadow-[0_7px_18px_rgba(7,155,87,0.19)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#067c46] hover:shadow-[0_12px_24px_rgba(7,155,87,0.25)]"
            >
              {items.length > 0 ? "Proceed to checkout" : "Explore products"}

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            {/* Security information */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-semibold text-[#89948e]">
              <LockKeyhole size={13} className="text-[#079b57]" />
              Secure checkout experience
            </div>

            <div className="mt-5 border-t border-[#edf1ee] pt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#17242d]">
                <ShieldCheck size={16} className="text-[#079b57]" />
                Shopping with confidence
              </div>

              <p className="mt-2 text-[11px] leading-5 text-[#89948e]">
                Shipping and applicable taxes are calculated at checkout.
                Final charges will be displayed before you place your order.
              </p>
            </div>
          </div>
        </div>

        {/* Support note */}
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#e3ebe6] bg-white p-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eaf7ef] text-[#079b57]">
            <Tag size={17} />
          </div>

          <div>
            <p className="text-xs font-bold text-[#17242d]">
              Looking for trade deals?
            </p>
            <p className="mt-1 text-[11px] leading-5 text-[#69756f]">
              Sign in to your trade account to access your available
              wholesale benefits.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

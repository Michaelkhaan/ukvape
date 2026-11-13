
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";

import type { Product } from "@/lib/data";
import { useCart } from "@/components/cart-provider";

type ProductDetailsClientProps = {
  product: Product;
};

export default function ProductDetailsClient({
  product,
}: ProductDetailsClientProps) {
  const { add } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      add(product);
    }

    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#17242d]">
      <div className="mx-auto max-w-[1450px] px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#69756f] transition hover:text-[#079b57]"
        >
          <ArrowLeft size={17} />
          Back to shopping
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product image */}
          <div className="flex min-h-[380px] items-center justify-center overflow-hidden rounded-3xl border border-[#e1e8ee] bg-white p-6 sm:min-h-[550px] sm:p-10">
            <img
              src={product.image}
              alt={product.imageAlt || product.name}
              className="max-h-[480px] w-full object-contain"
            />
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#e4f5ec] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#079b57]">
                {product.brand}
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#69756f] ring-1 ring-[#e1e8ee]">
                {product.category}
              </span>

              {product.badge && (
                <span className="rounded-full bg-[#fff3d1] px-4 py-2 text-xs font-bold text-[#9a6b00]">
                  {product.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#69756f]">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-extrabold text-[#079b57]">
                {formatPrice(product.price)}
              </span>

              {product.oldPrice && product.oldPrice > product.price && (
                <span className="text-lg font-medium text-[#9aa49f] line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>

            {/* Stock status */}
            <div className="mt-6 flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#079b57]" />
              <span className="text-sm font-semibold text-[#079b57]">
                {product.stock}
              </span>
            </div>

            {/* Product specifications */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#e1e8ee] bg-white">
              <div className="border-b border-[#e1e8ee] px-5 py-4">
                <h2 className="text-lg font-bold">Product details</h2>
              </div>

              <div className="divide-y divide-[#e1e8ee]">
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-sm text-[#69756f]">Product name</span>
                  <span className="text-right text-sm font-semibold">
                    {product.name}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-sm text-[#69756f]">Brand</span>
                  <span className="text-sm font-semibold">
                    {product.brand}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-sm text-[#69756f]">Category</span>
                  <span className="text-right text-sm font-semibold">
                    {product.category}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-sm text-[#69756f]">Flavour</span>
                  <span className="text-sm font-semibold">
                    {product.flavour || "Not specified"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-sm text-[#69756f]">Colour</span>
                  <span className="text-sm font-semibold">
                    {product.colour || "Not specified"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-sm text-[#69756f]">Product ID</span>
                  <span className="text-sm font-semibold">{product.id}</span>
                </div>
              </div>
            </div>

            {/* Quantity and cart */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex h-14 w-fit items-center rounded-xl border border-[#e1e8ee] bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="flex h-full w-12 items-center justify-center text-[#17242d] transition hover:text-[#079b57] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus size={17} />
                </button>

                <span className="w-10 text-center font-bold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="flex h-full w-12 items-center justify-center text-[#17242d] transition hover:text-[#079b57]"
                >
                  <Plus size={17} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex h-14 flex-1 items-center justify-center gap-3 rounded-xl bg-[#079b57] px-7 font-bold text-white transition hover:bg-[#067d47]"
              >
                {added ? (
                  <>
                    <Check size={20} />
                    Added to cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            <p className="mt-3 text-sm font-semibold text-[#079b57]">
              Subtotal: {formatPrice(product.price * quantity)}
            </p>

            {/* Trust information */}
            <div className="mt-8 grid gap-4 border-t border-[#e1e8ee] pt-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e4f5ec] text-[#079b57]">
                  <Truck size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold">Delivery information</p>
                  <p className="text-xs text-[#69756f]">
                    View delivery options at checkout
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e4f5ec] text-[#079b57]">
                  <ShieldCheck size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold">Secure checkout</p>
                  <p className="text-xs text-[#69756f]">
                    Secure shopping experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

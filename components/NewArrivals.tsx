import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import HomeProductTile from './home-product-tile'
import { products } from '@/lib/data'

function NewArrivals() {
      const productImages = [
        "/device-blue.jpg",
        "/device-black.jpg",
        "/device-purple.jpg",
        "/device-teal.jpg",
      ];
  return (
    <section className="pb-5 pt-5 sm:pb-7 sm:pt-6">
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <p className="flex items-center gap-2 text-[10px] font-black text-[#079b57]">
                  <span className="h-[2px] w-5 bg-[#079b57]" />
                  Just Landed
                </p>
                <h2 className="mt-1 text-[24px] font-black leading-none tracking-[-.055em] text-[#111d26] sm:text-[28px]">
                  New Arrivals
                </h2>
              </div>
              <Link
                href="/products"
                className="mb-1 inline-flex items-center gap-1.5 text-[10px] font-extrabold text-[#16232c] transition hover:text-[#079b57]"
              >
                View All Products <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              {products.slice(0, 4).map((product, index) => (
                <HomeProductTile
                  key={product.id}
                  product={product}
                  image={productImages[index] || product.image}
                  badge={index % 2 === 0 ? "New" : "Hot"}
                />
              ))}
            </div>
          </section>
  )
}

export default NewArrivals
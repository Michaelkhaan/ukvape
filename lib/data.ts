export type Product = {
  id: string;
  slug: string;
  name: string;
  flavour: string;
  price: number;
  oldPrice?: number;
  category: string;
  brand: string;
  badge?: string;
  colour: string;
  description: string;
  stock: string;
  image: string;
  imageAlt: string;
};

// Adult-only, reusable and refillable vape devices. Replace external image URLs
// with supplier-approved local assets before production deployment.
export const products: Product[] = [
  {
    id: "p1",
    slug: "vaporesso-xros-4-pod-kit",
    name: "Vaporesso XROS 4",
    flavour: "Refillable pod kit · Blue",
    price: 24.99,
    category: "Refillable Pod Kits",
    brand: "Vaporesso",
    badge: "Featured",
    colour: "#2479b9",
    description: "A reusable, rechargeable refillable pod kit from Vaporesso. Trade customers can sign in to view account-specific pricing and availability.",
    stock: "Check trade availability",
    image: "https://dampf-shop.de/media/a1/28/c0/1719181854/source321594-jpg_cea307897c32cb1a.jpg?ts=1719181854",
    imageAlt: "Vaporesso XROS 4 reusable refillable pod kit",
  },
  {
    id: "p2",
    slug: "vaporesso-xros-3-pod-kit",
    name: "Vaporesso XROS 3",
    flavour: "Refillable pod kit · Sky Blue",
    price: 22.99,
    category: "Refillable Pod Kits",
    brand: "Vaporesso",
    badge: "Popular range",
    colour: "#1680c3",
    description: "A rechargeable pod system designed for use with replaceable refillable pods. Sign in for trade availability.",
    stock: "Check trade availability",
    image: "https://cdn11.bigcommerce.com/s-8tn3otes3v/images/stencil/1920x1920/products/5780/44148/Vaporesso_XROS_3_Kit_Sky_Blue__27420_21121__43528.1751645425.jpg?c=2",
    imageAlt: "Vaporesso XROS 3 refillable pod kit in sky blue",
  },
  {
    id: "p3",
    slug: "geekvape-digi-max-pod-kit",
    name: "Geekvape Digi Max",
    flavour: "Rechargeable pod system · Misty Blue",
    price: 29.99,
    category: "Refillable Pod Kits",
    brand: "Geekvape",
    badge: "New in range",
    colour: "#2c72a9",
    description: "A rechargeable pod system for adult customers. Review product specifications and trade availability after account sign-in.",
    stock: "Check trade availability",
    image: "https://morevaping.com/imagecache/800/downloads/misty-blue-geekvape-digi-max.jpg",
    imageAlt: "Geekvape Digi Max rechargeable pod system",
  },
  {
    id: "p4",
    slug: "hayati-pro-ultra-plus-kit",
    name: "Hayati Pro Ultra+",
    flavour: "Reusable pod kit",
    price: 34.99,
    category: "Refillable Pod Kits",
    brand: "Hayati",
    badge: "Featured range",
    colour: "#277bdc",
    description: "A reusable pod kit. Verify the exact model, refill format and replaceable components against supplier documentation before listing for sale.",
    stock: "Check trade availability",
    image: "https://cdn.shopify.com/s/files/1/0574/2680/4901/files/HayatiProUltra.jpg?v=1760569347",
    imageAlt: "Hayati Pro Ultra reusable pod kit product image",
  },
];

export const categories = ["Refillable Pod Kits"];
export const brands = ["Vaporesso", "Geekvape", "Hayati"];
export const money = (n: number) => `£${n.toFixed(2)}`;

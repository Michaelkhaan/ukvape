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


export interface ProductVariant {
  id: string;
  name: string;
  image: string;
  flavour?: string;
  strength?: string;
  pack?: string;
}

export interface Product1 {
  id: string;
  name: string;
  brand: string;
  category?: string;
  image: string;
  description?: string;
  variants: ProductVariant[];
}



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
    image: "https://vapesdirect.pk/cdn/shop/files/121762_vaporesso-xros-4-nano-titanium-silver.webp?v=1765217385",
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
    image: "https://store.vaporesso.com/cdn/shop/files/XROS3_PeachPink_1.png?v=1783423356&width=1946",
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
    image: "https://tobaccohouse.pk/cdn/shop/files/RUBY_RED_Geekvape_Digi_Max_Pod_Mod_Kit_3000mAh.webp?v=1746278910&width=1445",
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
    image: "https://hayativapor.com/cdn/shop/files/Ultra_78168855-7dfe-4e37-8fe8-e42d917a94fb.png?v=1788849099&width=300",
    imageAlt: "Hayati Pro Ultra reusable pod kit product image",
  },
];

export const products1: Product1[] = [
  {
    id: "hayati-pro-max-pods",
    name: "Hayati Pro Max+ Pods",
    brand: "Hayati",
    category: "Prefilled Pods",
    image: "https://vaporizerhut.co.uk/cdn/shop/files/Blackberry_Raspberry_Hayati_Pro_Max_Pods_grande.png?v=1752238216",
    description:
      "Explore the Hayati Pro Max+ Pods product range.",

    variants: [
      {
        id: "strawberry-kiwi",
        name: "Strawberry Kiwi",
        flavour: "Strawberry Kiwi",
        image: "/products/strawberry-kiwi.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "blue-razz-ice",
        name: "Blue Razz Ice",
        flavour: "Blue Razz Ice",
        image: "/products/blue-razz-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "watermelon-ice",
        name: "Watermelon Ice",
        flavour: "Watermelon Ice",
        image: "/products/watermelon-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
    ],
  },
  {
    id: "hayati-pro-max-pods",
    name: "Hayati Pro Max+ Pods",
    brand: "Hayati",
    category: "Prefilled Pods",
    image: "https://vapeoffers.co.uk/cdn/shop/files/Hayati_Pro_Max_Pods_-_Triple_Mango.webp?v=1768559617&width=1214",
    description:
      "Explore the Hayati Pro Max+ Pods product range.",

    variants: [
      {
        id: "strawberry-kiwi",
        name: "Strawberry Kiwi",
        flavour: "Strawberry Kiwi",
        image: "/products/strawberry-kiwi.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "blue-razz-ice",
        name: "Blue Razz Ice",
        flavour: "Blue Razz Ice",
        image: "/products/blue-razz-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "watermelon-ice",
        name: "Watermelon Ice",
        flavour: "Watermelon Ice",
        image: "/products/watermelon-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
    ],
  },
  {
    id: "hayati-pro-max-pods",
    name: "Hayati Pro Max+ Pods",
    brand: "Hayati",
    category: "Prefilled Pods",
    image: "https://vaporizerhut.co.uk/cdn/shop/files/Blackberry_Raspberry_Hayati_Pro_Max_Pods_grande.png?v=1752238216",
    description:
      "Explore the Hayati Pro Max+ Pods product range.",

    variants: [
      {
        id: "strawberry-kiwi",
        name: "Strawberry Kiwi",
        flavour: "Strawberry Kiwi",
        image: "/products/strawberry-kiwi.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "blue-razz-ice",
        name: "Blue Razz Ice",
        flavour: "Blue Razz Ice",
        image: "/products/blue-razz-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "watermelon-ice",
        name: "Watermelon Ice",
        flavour: "Watermelon Ice",
        image: "/products/watermelon-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
    ],
  },
  {
    id: "hayati-pro-max-pods",
    name: "Hayati Pro Max+ Pods",
    brand: "Hayati",
    category: "Prefilled Pods",
    image: "https://vaporizerhut.co.uk/cdn/shop/files/Blackberry_Raspberry_Hayati_Pro_Max_Pods_grande.png?v=1752238216",
    description:
      "Explore the Hayati Pro Max+ Pods product range.",

    variants: [
      {
        id: "strawberry-kiwi",
        name: "Strawberry Kiwi",
        flavour: "Strawberry Kiwi",
        image: "/products/strawberry-kiwi.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "blue-razz-ice",
        name: "Blue Razz Ice",
        flavour: "Blue Razz Ice",
        image: "/products/blue-razz-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "watermelon-ice",
        name: "Watermelon Ice",
        flavour: "Watermelon Ice",
        image: "/products/watermelon-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
    ],
  },
  {
    id: "hayati-pro-max-pods",
    name: "Hayati Pro Max+ Pods",
    brand: "Hayati",
    category: "Prefilled Pods",
    image: "https://vaporizerhut.co.uk/cdn/shop/files/Blackberry_Raspberry_Hayati_Pro_Max_Pods_grande.png?v=1752238216",
    description:
      "Explore the Hayati Pro Max+ Pods product range.",

    variants: [
      {
        id: "strawberry-kiwi",
        name: "Strawberry Kiwi",
        flavour: "Strawberry Kiwi",
        image: "/products/strawberry-kiwi.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "blue-razz-ice",
        name: "Blue Razz Ice",
        flavour: "Blue Razz Ice",
        image: "/products/blue-razz-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "watermelon-ice",
        name: "Watermelon Ice",
        flavour: "Watermelon Ice",
        image: "/products/watermelon-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
    ],
  },
  {
    id: "hayati-pro-max-pods",
    name: "Hayati Pro Max+ Pods",
    brand: "Hayati",
    category: "Prefilled Pods",
    image: "https://vaporizerhut.co.uk/cdn/shop/files/Blackberry_Raspberry_Hayati_Pro_Max_Pods_grande.png?v=1752238216",
    description:
      "Explore the Hayati Pro Max+ Pods product range.",

    variants: [
      {
        id: "strawberry-kiwi",
        name: "Strawberry Kiwi",
        flavour: "Strawberry Kiwi",
        image: "/products/strawberry-kiwi.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "blue-razz-ice",
        name: "Blue Razz Ice",
        flavour: "Blue Razz Ice",
        image: "/products/blue-razz-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "watermelon-ice",
        name: "Watermelon Ice",
        flavour: "Watermelon Ice",
        image: "/products/watermelon-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
    ],
  },
  {
    id: "hayati-pro-max-pods",
    name: "Hayati Pro Max+ Pods",
    brand: "Hayati",
    category: "Prefilled Pods",
    image: "https://vaporizerhut.co.uk/cdn/shop/files/Blackberry_Raspberry_Hayati_Pro_Max_Pods_grande.png?v=1752238216",
    description:
      "Explore the Hayati Pro Max+ Pods product range.",

    variants: [
      {
        id: "strawberry-kiwi",
        name: "Strawberry Kiwi",
        flavour: "Strawberry Kiwi",
        image: "/products/strawberry-kiwi.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "blue-razz-ice",
        name: "Blue Razz Ice",
        flavour: "Blue Razz Ice",
        image: "/products/blue-razz-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "watermelon-ice",
        name: "Watermelon Ice",
        flavour: "Watermelon Ice",
        image: "/products/watermelon-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
    ],
  },
  {
    id: "hayati-pro-max-pods",
    name: "Hayati Pro Max+ Pods",
    brand: "Hayati",
    category: "Prefilled Pods",
    image: "https://vaporizerhut.co.uk/cdn/shop/files/Blackberry_Raspberry_Hayati_Pro_Max_Pods_grande.png?v=1752238216",
    description:
      "Explore the Hayati Pro Max+ Pods product range.",

    variants: [
      {
        id: "strawberry-kiwi",
        name: "Strawberry Kiwi",
        flavour: "Strawberry Kiwi",
        image: "/products/strawberry-kiwi.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "blue-razz-ice",
        name: "Blue Razz Ice",
        flavour: "Blue Razz Ice",
        image: "/products/blue-razz-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "watermelon-ice",
        name: "Watermelon Ice",
        flavour: "Watermelon Ice",
        image: "/products/watermelon-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
    ],
  },
  {
    id: "hayati-pro-max-pods",
    name: "Hayati Pro Max+ Pods",
    brand: "Hayati",
    category: "Prefilled Pods",
    image: "https://vaporizerhut.co.uk/cdn/shop/files/Blackberry_Raspberry_Hayati_Pro_Max_Pods_grande.png?v=1752238216",
    description:
      "Explore the Hayati Pro Max+ Pods product range.",

    variants: [
      {
        id: "strawberry-kiwi",
        name: "Strawberry Kiwi",
        flavour: "Strawberry Kiwi",
        image: "/products/strawberry-kiwi.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "blue-razz-ice",
        name: "Blue Razz Ice",
        flavour: "Blue Razz Ice",
        image: "/products/blue-razz-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "watermelon-ice",
        name: "Watermelon Ice",
        flavour: "Watermelon Ice",
        image: "/products/watermelon-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
    ],
  },
  {
    id: "hayati-pro-max-pods",
    name: "Hayati Pro Max+ Pods",
    brand: "Hayati",
    category: "Prefilled Pods",
    image: "https://vaporizerhut.co.uk/cdn/shop/files/Blackberry_Raspberry_Hayati_Pro_Max_Pods_grande.png?v=1752238216",
    description:
      "Explore the Hayati Pro Max+ Pods product range.",

    variants: [
      {
        id: "strawberry-kiwi",
        name: "Strawberry Kiwi",
        flavour: "Strawberry Kiwi",
        image: "/products/strawberry-kiwi.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "blue-razz-ice",
        name: "Blue Razz Ice",
        flavour: "Blue Razz Ice",
        image: "/products/blue-razz-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
      {
        id: "watermelon-ice",
        name: "Watermelon Ice",
        flavour: "Watermelon Ice",
        image: "/products/watermelon-ice.webp",
        strength: "20mg",
        pack: "Pack of 5",
      },
    ],
  },
];



export const categories = ["Refillable Pod Kits"];
export const brands = ["Vaporesso", "Geekvape", "Hayati"];
export const money = (n: number) => `£${n.toFixed(2)}`;

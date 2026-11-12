
import {
  Truck,
  ShieldCheck,
  PackageCheck,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export interface HomeProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  pack: string;
  strength?: string;
  battery?: string;
  puffs?: string;
  capacity?: string;
  vgpg?: string;
  flavours?: string;
  description?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
}

export interface HomeCategory {
  name: string;
  slug: string;
  image: string;
  href: string;
}

export const homeBenefits: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: ShieldCheck,
    title: "Verified Trade Accounts",
    description: "Wholesale access for approved UK retailers",
  },
  {
    icon: Truck,
    title: "Fast UK Distribution",
    description: "Reliable retailer ordering and fulfilment",
  },
  {
    icon: PackageCheck,
    title: "Curated Catalogue",
    description: "A structured range of compliant products",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Business and trade account assistance",
  },
];

export const homeBrands = [
  "Hayati",
  "Elf Bar",
  "Lost Mary",
  "Geekvape",
  "SKE",
  "VOOPOO",
];

export const homeCategories: HomeCategory[] = [
  {
    name: "Pod Kits",
    slug: "pod-kits",
    image: "/pod-kits.webp",
    href: "/category/pod-kits",
  },
  {
    name: "Replacement Pods",
    slug: "replacement-pods",
    image: "/replacement-pods.webp",
    href: "/category/replacement-pods",
  },
  {
    name: "E-Liquids",
    slug: "e-liquids",
    image: "/e-liquids.webp",
    href: "/category/e-liquids",
  },
  {
    name: "Nicotine Pouches",
    slug: "nicotine-pouches",
    image: "/nicotine-pouches.webp",
    href: "/category/nicotine-pouches",
  },
  {
    name: "Vape Accessories",
    slug: "vape-accessories",
    image: "/accessories.webp",
    href: "/category/vape-accessories",
  },
  {
    name: "Coils & Tanks",
    slug: "coils-tanks",
    image: "/coils-tanks.webp",
    href: "/category/coils-tanks",
  },
];

export const homeProducts: HomeProduct[] = [
  {
    id: "hayati-kiwi-cooler",
    name: "Hayati Pro Max+ Kit – Kiwi Cooler",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/KiwiCooler_HayatiProMax_Kit.webp",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "6,000",
    isNew: true,
  },
  {
    id: "hayati-double-apple",
    name: "Hayati Pro Ultra+ Shisha Pod Double Apple",
    brand: "Hayati",
    category: "Replacement Pods",
    image: "/hayati-double-apple.webp",
    pack: "Pack of 5",
    strength: "20mg",
    puffs: "30,000",
    flavours: "20",
    isNew: true,
  },
  {
    id: "hayati-finebar-peach",
    name: "Hayati Finebar Juicy Peach",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/hayati-finebar-peach.webp",
    pack: "Pack of 5",
    strength: "20mg",
    isNew: true,
  },
  {
    id: "hayati-blue-razz",
    name: "Hayati Pro Ultra+ Blue Razz Pineapple",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/hayati-blue-razz.webp",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    isNew: true,
  },
  {
    id: "hayati-mango-peach",
    name: "Hayati Pro Ultra+ Pods Mango Peach Pineapple",
    brand: "Hayati",
    category: "Replacement Pods",
    image: "/hayati-mango-peach.webp",
    pack: "Pack of 5",
    strength: "20mg",
    puffs: "25,000",
    flavours: "45",
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "hayati-banana-ice",
    name: "Hayati Pro Max E-Liquid Banana Ice",
    brand: "Hayati",
    category: "E-Liquids",
    image: "/hayati-banana-ice.webp",
    pack: "Pack of 1",
    capacity: "100ml",
    vgpg: "70VG / 30PG",
    flavours: "20",
    isNew: true,
  },
  {
    id: "hayati-souvenir",
    name: "Hayati Pro Max+ Souvenir Edition",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/hayati-souvenir.webp",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "6,000",
    isNew: true,
  },
  {
    id: "hayati-liora",
    name: "Hayati Liora Kit",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/hayati-liora.webp",
    pack: "Pack of 1",
    strength: "20mg",
    battery: "550mAh",
    flavours: "30",
    isNew: true,
  },
  {
    id: "hayati-shisha-kit",
    name: "Hayati Pro Ultra+ Shisha Kit",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/hayati-shisha-kit.webp",
    pack: "Pack of 5",
    strength: "5mg",
    battery: "990mAh",
    puffs: "30,000",
    isNew: true,
  },
  {
    id: "hayati-apple-mint",
    name: "Hayati Pro Ultra+ Shisha Pod Apple Mint Grape",
    brand: "Hayati",
    category: "Replacement Pods",
    image: "/hayati-apple-mint.webp",
    pack: "Pack of 5",
    strength: "20mg",
    puffs: "30,000",
    flavours: "20",
    isBestSeller: true,
  },
  {
    id: "hayati-ice-pop",
    name: "Hayati Finebar Ice Pop",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/hayati-ice-pop.webp",
    pack: "Pack of 5",
    strength: "20mg",
    isBestSeller: true,
  },
  {
    id: "hayati-lemon-lime",
    name: "Hayati Pro Max+ Souvenir Edition Lemon & Lime",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/hayati-lemon-lime.webp",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "6,000",
    isBestSeller: true,
  },
  {
    id: "hayati-strawberry-watermelon",
    name: "Hayati Liora Kit Strawberry Watermelon",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/hayati-strawberry-watermelon.webp",
    pack: "Pack of 1",
    strength: "20mg",
    battery: "550mAh",
    flavours: "30",
    isBestSeller: true,
  },
  {
    id: "hayati-black-mint",
    name: "Hayati Pro Max Nic Salts Black Mint",
    brand: "Hayati",
    category: "Nicotine Salts",
    image: "/hayati-black-mint.webp",
    pack: "Pack of 1",
    capacity: "10ml",
    vgpg: "50VG / 50PG",
    flavours: "40",
    isFeatured: true,
  },
  {
    id: "hayati-fresh-mint",
    name: "Hayati Pro Ultra+ Fresh Mint",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/hayati-fresh-mint.webp",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    isFeatured: true,
  },
  {
    id: "hayati-blue-razz-cherry",
    name: "Hayati Pro Ultra+ Blue Razz Cherry",
    brand: "Hayati",
    category: "Pod Kits",
    image: "/hayati-blue-razz-cherry.webp",
    pack: "Pack of 5",
    strength: "20mg",
    battery: "850mAh",
    puffs: "25,000",
    isFeatured: true,
  },
];

export const newArrivals = homeProducts.filter((p) => p.isNew);
export const bestSellers = homeProducts.filter((p) => p.isBestSeller);
export const featuredProducts = homeProducts.filter((p) => p.isFeatured);

export const featuredDevice = {
  name: "Hayati Pro Ultra+",
  description:
    "Rechargeable vape hardware with dual-flavour functionality and a smart display.",
  image: "/hayati-pro-ultra-featured.webp",
  specifications: [
    "Rechargeable USB-C hardware",
    "Dual-flavour configuration",
    "Smart display",
  ],
};

export const homeFAQs = [
  {
    question: "Who can access Global Bargain wholesale pricing?",
    answer:
      "Wholesale pricing is available to approved UK retailers, vape distributors, vape shops, convenience stores and verified trade buyers.",
  },
  {
    question: "What products are available?",
    answer:
      "The catalogue covers eligible pod kits, replacement pods, e-liquids, nicotine pouches, accessories and vape hardware.",
  },
  {
    question: "Do you support UK wholesale distribution?",
    answer:
      "The platform supports UK business ordering, retailer supply and trade fulfilment.",
  },
  {
    question: "How do I apply for a trade account?",
    answer:
      "Submit your business details through the trade registration page. Applications are reviewed before trade access is enabled.",
  },
  {
    question: "Do you show all brands on the homepage?",
    answer:
      "The homepage highlights selected brands. Visit the brands page for the full catalogue.",
  },
  {
    question: "Is the website for public retail customers?",
    answer:
      "Global Bargain is a B2B wholesale platform intended for verified trade customers.",
  },
];

export const companyInfo = {
  name: "GLOBAL BARGAIN LTD",
  address: "13 Overbridge Rd, Salford M7 1SL, United Kingdom",
  phone: "+44 7438 088313",
  email: "info@globalbargain.co.uk",
  companyNumber: "08895134",
  vatNumber: "GB 201152772",
};

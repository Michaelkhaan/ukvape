# Global Bargain — Premium Vape Wholesale Storefront

A Next.js 15 App Router storefront built with TypeScript and Tailwind CSS v4.

## Design direction

- Dedicated vape hardware and wholesale identity.
- Cinematic dark-emerald hero using `public/hero-wholesale.png` as a full-bleed background.
- Clear trade-account and business-verification calls to action.
- Brand directory, reusable-device category cards, featured catalogue and trade account section.
- Responsive navigation, catalogue search entry point, basket indicator and mobile menu.
- Consistent product-card styling and accessible interactive controls.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes before production

- Replace product image URLs in `lib/data.ts` with supplier-approved, locally hosted images for the exact listed SKUs.
- Verify all product specifications, model names, product legality and image usage rights with suppliers.
- Connect authentication, trade-account review, inventory, shipping and payment services before accepting live orders.
- Ensure UK age-verification, advertising, product, recycling and other applicable compliance requirements are reviewed by the business.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React

## Approved homepage design implementation

The homepage and storefront header have been rebuilt to closely match the approved Global Bargain vape-wholesale reference image. The implementation uses real React/Next.js elements for the navigation, hero copy and calls to action, service strip, brand links, product cards, basket actions, and responsive layouts. The approved visual reference is included at `public/design-reference-exact.png`.

Reference-matched image assets are in `public/`:
- `hero-device-stage.jpg` — cropped device stage used in the hero
- `category-*-exact.jpg` — category card artwork
- `promo-*-exact.jpg` — trade and delivery promotional panels

Run locally with `npm install` followed by `npm run dev`.

# CULTURE / 001

Modern African fashion storefront — Kente, heritage-inspired silhouettes, and
statement pieces. Built as a single-page React application with Vite.

## Stack

- React 19 + React Router
- Vite 8
- Plain CSS (per-page stylesheets in `src/components/styles`)
- `localStorage` for the shopping cart

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
npm run lint
```

Node 20+ is recommended.

## Pages and routes

| Route       | Page                                              |
| ----------- | ------------------------------------------------- |
| `/`         | Home — hero, featured products, reviews, brand CTA |
| `/about`    | Brand story, mission, vision                      |
| `/products` | Full catalogue with category filter and sorting    |
| `/cart`     | Cart, quantity controls, summary, checkout         |
| `/contact`  | Contact details and message form                   |
| `/privacy`  | Privacy policy                                     |
| `/terms`    | Terms & conditions                                 |
| `*`         | Not-found page                                     |

## Features

- Product catalogue with category filters and price/rating sorting
- Add-to-cart from the homepage and products page, with inline confirmation
- Persistent cart (shared across tabs via the `storage` event)
- Quantity controls, remove item, delete all, live totals
- Simulated checkout confirmation with an itemised order snapshot
- Review carousel that adapts from three cards to one on small screens
- Responsive navigation with an accessible mobile menu
- Per-route document titles, scroll restoration, and a custom 404

## Project structure

```
index.html                  Vite entry
public/                     Static images and icons (served from /)
src/
  main.jsx                  React root
  App.jsx                   Routes, cart provider, route effects
  context/
    cart.js                 Cart context + useCart hook
    CartProvider.jsx        Cart state, persistence, totals
  components/
    NavBar.jsx              Header, mobile menu, cart badge
    Footer.jsx              Footer with legal links
    HomePage.jsx            Home page
    ProductsPage.jsx        Catalogue with filters
    ProductCard.jsx         Shared product card (featured/catalogue)
    CartPage.jsx            Cart + checkout flow
    CheckoutModal.jsx       Order confirmation dialog
    ReviewCarousel.jsx      Reviews carousel
    AboutPage.jsx
    ContactPage.jsx
    Privacy.jsx
    TermsAndConditions.jsx
    NotFoundPage.jsx
    data/                   Product and review content
    styles/                 CSS
  utils/format.js           Currency formatting (GH₵)
```

## Notes

- The cart key is `culture-cart`; totals use a flat GH₵ 25 delivery fee and 5%
  tax, both configured in `src/context/CartProvider.jsx`.
- Checkout and the contact form are front-end simulations — connect them to a
  payment provider and an email/API endpoint for production use.
- Product and review imagery is loaded from external URLs, with local fallbacks
  for product cards and initials for reviewer avatars.

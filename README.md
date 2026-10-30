# CULTURE / 001

CULTURE / 001 is a modern e-commerce storefront focused on Kente and African-inspired fashion. The website celebrates heritage, identity, and self-expression through thoughtfully designed clothing, accessories, and statement pieces rooted in African culture and craftsmanship.

## About the website

The brand presents a curated collection of fashion items inspired by African traditions, especially Kente-inspired textiles, ceremonial wear, and contemporary styling. The goal is to merge cultural pride with modern design so customers can wear pieces that feel meaningful, confident, and fashionable.

The site includes:

- a welcoming landing page with brand messaging and featured products
- an About page explaining the brand story and philosophy
- a Product page showcasing the collection in a storefront layout
- a shopping cart experience for adding and managing products
- contact and policy pages to support a complete ecommerce experience

## Project purpose

This project is designed to showcase a boutique-style African fashion brand and demonstrate frontend development skills in HTML, CSS, and JavaScript. It focuses on a clean shopping experience, strong brand storytelling, and visually rich product presentation.

## Tech stack

- HTML
- CSS
- JavaScript
- JSON for product data

## Project structure

- `index.html` – homepage
- `html/` – page templates such as About, Products, Contact, Cart, and legal pages
- `css/` – styling for the site
- `js/` – JavaScript behavior, including navigation, featured products, and cart logic
- `img/` – brand and visual assets

## How it works

- The homepage displays featured products from the product data source.
- The Products page loads product listings dynamically from a JSON file.
- Users can add items to the cart, which is stored in the browser’s local storage.
- The cart page reads the saved cart state and shows selected items.

## Running the project locally

From the project root, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

This is recommended because the site loads data via browser fetch requests.

## Brand vision

CULTURE / 001 is more than a clothing store; it is a celebration of African heritage through modern fashion. Every product is presented as a statement of culture, confidence, and personal identity.

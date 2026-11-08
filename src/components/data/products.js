/**
 * CULTURE / 001 product catalogue.
 *
 * Prices are in Ghana Cedis (GHS). `discountPercent` is optional — when it is
 * greater than 0 the storefront shows the original price struck through and a
 * "Sale" badge.
 */
const products = [
  {
    id: 1,
    slug: "kente-cloth-wrap-stole-set",
    name: "Kente Cloth Wrap & Stole Set",
    category: "Kente Wear",
    gender: "Unisex",
    price: 85,
    discountPercent: 15,
    description:
      "Handwoven Kente-inspired wrap set made for elegant layering and heritage styling.",
    material: "100% cotton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gold", "Black", "Green"],
    stock: 42,
    rating: 4.6,
    tags: ["basic", "casual", "summer"],
    coverImage:
      "https://i.pinimg.com/1200x/16/55/f1/1655f1945c28db1e5648bcff00dfc7b5.jpg",
  },
  {
    id: 2,
    slug: "royal-kente-couples-attire",
    name: "Royal Kente Couple's Attire",
    category: "African Fashion",
    gender: "Unisex",
    price: 220,
    discountPercent: 0,
    description:
      "A statement Kente outfit designed for celebrations, culture, and refined African elegance.",
    material: "80% cotton, 20% polyester",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gold", "Black", "Navy"],
    stock: 25,
    rating: 4.8,
    tags: ["streetwear", "cozy", "bestseller"],
    coverImage:
      "https://i.pinimg.com/1200x/d5/5c/12/d55c124748a115429b90b9f4b6a17cb9.jpg",
  },
  {
    id: 3,
    slug: "traditional-kente-couples-outfit",
    name: "Traditional Kente Couple's Outfit",
    category: "Traditional Wear",
    gender: "Unisex",
    price: 260,
    discountPercent: 10,
    description:
      "A regal African look with rich Kente tones and traditional craftsmanship for special occasions.",
    material: "98% cotton, 2% elastane",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Royal Blue", "Gold"],
    stock: 30,
    rating: 4.5,
    tags: ["ceremony", "everyday"],
    coverImage:
      "https://i.pinimg.com/736x/dd/eb/d8/ddebd8fea58f03bce6b2943688289fb4.jpg",
  },
  {
    id: 4,
    slug: "royal-kente-traditional-apparel",
    name: "Royal Kente Traditional Apparel",
    category: "African Luxury",
    gender: "Men",
    price: 650,
    discountPercent: 0,
    description:
      "Luxury Kente-inspired attire made to honour heritage while making a modern fashion statement.",
    material: "Handwoven cotton blend",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Gold", "Burgundy"],
    stock: 12,
    rating: 4.7,
    tags: ["outerwear", "premium", "occasion"],
    coverImage:
      "https://i.pinimg.com/736x/10/ff/5b/10ff5b5ac7cf7727ab369d73bfe15933.jpg",
  },
  {
    id: 5,
    slug: "mens-traditional-kente-cloth-wrap",
    name: "Men's Traditional Kente Cloth Wrap",
    category: "Kente Wraps",
    gender: "Men",
    price: 210,
    discountPercent: 0,
    description:
      "A bold African waist wrap with rich pattern detail for daily wear and cultural styling.",
    material: "100% combed cotton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Assorted"],
    stock: 60,
    rating: 4.4,
    tags: ["bundle", "value", "basic"],
    coverImage:
      "https://i.pinimg.com/736x/17/f3/56/17f356b46b2b30070e0867b568e6c456.jpg",
  },
  {
    id: 6,
    slug: "kente-cloth-stole-sash",
    name: "Kente Cloth Stole & Sash",
    category: "African Accessories",
    gender: "Unisex",
    price: 180,
    discountPercent: 20,
    description:
      "A heritage-inspired sash and stole that brings elegance to every African-inspired look.",
    material: "Cotton blend",
    sizes: ["One Size"],
    colors: ["Gold", "Sky Blue", "Olive"],
    stock: 35,
    rating: 4.3,
    tags: ["smart-casual", "accessory"],
    coverImage:
      "https://i.pinimg.com/736x/48/d4/7c/48d47c800a9b31e6520f8fd4874df632.jpg",
  },
  {
    id: 7,
    slug: "handmade-kente-sandals",
    name: "Handmade Kente Sandals",
    category: "African Accessories",
    gender: "Women",
    price: 310,
    discountPercent: 0,
    description:
      "Crafted to complement your Kente look with heritage-inspired detailing and everyday luxury.",
    material: "Woven cotton upper, leather sole",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Gold", "Cream", "Terracotta"],
    stock: 18,
    rating: 4.6,
    tags: ["women", "summer", "new-arrival"],
    coverImage:
      "https://i.pinimg.com/1200x/15/04/86/1504864702ab15f98039c8c00238b32d.jpg",
  },
  {
    id: 8,
    slug: "royal-kente-chief-regalia-set",
    name: "Royal Kente Chief Regalia Set",
    category: "Luxury African Wear",
    gender: "Unisex",
    price: 480,
    discountPercent: 10,
    description:
      "A ceremonial Kente ensemble crafted for pride, occasion, and a bold African identity.",
    material: "Handwoven Kente, cotton lining",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Gold", "Black"],
    stock: 22,
    rating: 4.9,
    tags: ["regalia", "ceremony", "bestseller"],
    coverImage:
      "https://i.pinimg.com/1200x/a0/b9/a4/a0b9a488cc284b7957e40e244de2068a.jpg",
  },
];

export const getFinalPrice = (product) => {
  const discount = Number(product.discountPercent) || 0;
  return Number(product.price) * (1 - discount / 100);
};

export const getCategories = () => [
  "All",
  ...Array.from(new Set(products.map((product) => product.category))),
];

export default products;

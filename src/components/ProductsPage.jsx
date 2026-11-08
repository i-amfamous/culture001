import { useMemo, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import products, { getCategories, getFinalPrice } from "./data/products";
import "./styles/products.css";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

const ProductsPage = () => {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const categories = useMemo(() => getCategories(), []);

  const visibleProducts = useMemo(() => {
    const filtered =
      category === "All"
        ? products
        : products.filter((product) => product.category === category);

    const sorted = [...filtered];

    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
        break;
      case "price-desc":
        sorted.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return sorted;
  }, [category, sortBy]);

  return (
    <>
      <NavBar />
      <main className="page-products">
        <div className="hero">
          <h1>Shop Kente &amp; African Wear</h1>
        </div>

        <div className="products">
          <h2>Shop the Collection</h2>

          <div className="productToolbar">
            <div className="filterChips" role="group" aria-label="Filter by category">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={item === category ? "filterChip is-active" : "filterChip"}
                  aria-pressed={item === category}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="sortControl">
              <span>Sort by</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="resultCount" aria-live="polite">
            {visibleProducts.length}{" "}
            {visibleProducts.length === 1 ? "piece" : "pieces"}
          </p>

          {visibleProducts.length > 0 ? (
            <div className="productsContainer">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="catalogEmpty">
              No pieces in this category yet. Try another filter.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;

import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/cart";
import { getFinalPrice } from "./data/products";
import { formatPrice } from "../utils/format";

/**
 * Product card with an add-to-cart action.
 *
 * variant="featured" is used on the homepage (`.product-card` styling),
 * variant="catalog" is used on the products page (`.productCard` styling).
 */
const ProductCard = ({ product, variant = "catalog" }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const timerRef = useRef(null);

  const discount = Number(product.discountPercent) || 0;
  const finalPrice = getFinalPrice(product);
  const hasDiscount = discount > 0;

  useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);

    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setAdded(false), 1600);
  };

  const handleImageError = (event) => {
    const image = event.currentTarget;
    if (image.dataset.fallback) return;
    image.dataset.fallback = "true";
    image.src = "/kente.jpg";
  };

  const addButton = (
    <button
      type="button"
      className={added ? "addToCart is-added" : "addToCart"}
      onClick={handleAdd}
    >
      {added ? "Added to cart ✓" : "Add to cart"}
    </button>
  );

  if (variant === "featured") {
    return (
      <article className="product-card">
        <img
          src={product.coverImage}
          alt={product.name}
          loading="lazy"
          onError={handleImageError}
        />
        <h3>{product.name}</h3>
        <div className="price-container">
          {hasDiscount && (
            <span className="original-price">
              {formatPrice(product.price)}
            </span>
          )}
          <span className="product-price">{formatPrice(finalPrice)}</span>
        </div>
        {addButton}
      </article>
    );
  }

  return (
    <article className="productCard">
      {hasDiscount && (
        <span className="productBadge">Save {discount}%</span>
      )}
      <img
        className="productImage"
        src={product.coverImage}
        alt={product.name}
        loading="lazy"
        onError={handleImageError}
      />
      <p className="productMeta">
        {product.category}
        <span aria-hidden="true"> · </span>
        <span aria-label={`Rated ${product.rating} out of 5`}>
          ★ {product.rating}
        </span>
      </p>
      <h3 className="productName">{product.name}</h3>
      <p className="price">
        {formatPrice(finalPrice)}
        {hasDiscount && (
          <span className="priceOriginal">{formatPrice(product.price)}</span>
        )}
      </p>
      <p className="descr">{product.description}</p>
      {addButton}
    </article>
  );
};

export default ProductCard;

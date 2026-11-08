import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CheckoutModal from "./CheckoutModal";
import { useCart } from "../context/cart";
import { formatPrice } from "../utils/format";
import "./styles/cart.css";

const CartPage = () => {
  const { items, totals, increment, decrement, removeItem, clearCart } =
    useCart();
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const navigate = useNavigate();

  const closeModal = useCallback(() => setConfirmedOrder(null), []);

  const handleCheckout = () => {
    if (items.length === 0) return;

    // Snapshot the order before emptying the cart so the confirmation still
    // shows what was purchased.
    setConfirmedOrder({
      items: items.map((item) => ({ ...item })),
      totals: { ...totals },
    });
    clearCart();
  };

  const handleContinueShopping = () => {
    setConfirmedOrder(null);
    navigate("/products");
  };

  return (
    <>
      <NavBar />
      <main className="page-cart">
        <div className="left">
          <div className="cartHeader">
            <h1>CART</h1>
            <button
              type="button"
              className="deleteBtn"
              onClick={clearCart}
              disabled={items.length === 0}
            >
              Delete All
            </button>
          </div>

          {items.length === 0 ? (
            <div className="cartEmpty">
              <i
                className="fa-solid fa-bag-shopping"
                aria-hidden="true"
              ></i>
              <h2>Your cart is empty</h2>
              <p>
                Explore the collection and add a piece that tells your story.
              </p>
              <Link to="/products" className="btn">
                Shop the collection
              </Link>
            </div>
          ) : (
            <div className="cartItems">
              {items.map((item) => (
                <article className="productCard" key={item.id}>
                  <img
                    className="productImage"
                    src={item.coverImage}
                    alt={item.name}
                  />

                  <div className="cartProductDetails">
                    <h3 className="productName">{item.name}</h3>
                    <p className="price">{formatPrice(item.price)}</p>
                    <p className="cartLineTotal">
                      Line total {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  <div className="cartItemActions">
                    <div className="cartQuantity" aria-label="Item quantity">
                      <button
                        type="button"
                        onClick={() => decrement(item.id)}
                        disabled={item.quantity <= 1}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => increment(item.id)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="removeCartItem"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="right">
          <h2>Summary</h2>
          <div className="cartSummary">
            <p className="totalItems">
              Total items
              <span className="totalno">
                {totals.count} {totals.count === 1 ? "item" : "items"}
              </span>
            </p>
            <p className="subTotal">
              Sub Total <span className="subTotalPrice">{formatPrice(totals.subtotal)}</span>
            </p>
            <p className="ddelivery">
              Est. Delivery <span className="delivery">{formatPrice(totals.delivery)}</span>
            </p>
            <hr />
            <p className="tax">
              Taxes (5%) <span className="taxAmount">{formatPrice(totals.tax)}</span>
            </p>
            <hr />
            <h3>
              Final Payment
              <span className="totalPayment">{formatPrice(totals.total)}</span>
            </h3>
            <button
              type="button"
              className="checkout"
              onClick={handleCheckout}
              disabled={items.length === 0}
            >
              Checkout
            </button>
            <p className="cartNote">
              Free returns within 14 days. Delivery is calculated at checkout.
            </p>
          </div>
        </div>
      </main>
      <Footer />

      {confirmedOrder && (
        <CheckoutModal
          order={confirmedOrder.items}
          totals={confirmedOrder.totals}
          onClose={closeModal}
          onContinueShopping={handleContinueShopping}
        />
      )}
    </>
  );
};

export default CartPage;

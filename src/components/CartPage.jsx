import "./styles/cart.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const CartPage = () => {
  return (
    <>
      <NavBar />
      <main className="page-cart">
        <div className="left">
          <div className="cartHeader">
            <h1>CART</h1>
            <button className="deleteBtn">Delete All</button>
          </div>

          <div className="cartItems">
            {/* Cart items are rendered from localStorage by ../js/cart.js */}
          </div>
        </div>

        <div className="right">
          <h2>Summary</h2>
          <div className="cartSummary">
            <p className="totalItems">
              Total items <span className="totalno">0 items</span>
            </p>
            <p className="subTotal">
              Sub Total: <span className="subTotalPrice">0</span>
            </p>
            <p className="ddelivery">
              Est. Delivery <span className="delivery"></span>
            </p>
            <hr />
            <p className="tax">
              Taxes: <span className="taxAmount"></span>
            </p>
            <p className="discount">
              Discount: <span>0.00</span>
            </p>
            <hr />
            <h3>
              Final Payment <span className="totalPayment"></span>
            </h3>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage
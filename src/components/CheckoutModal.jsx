import { useEffect, useRef } from "react";
import { formatPrice } from "../utils/format";

const CheckoutModal = ({ order, totals, onClose, onContinueShopping }) => {
  const primaryButtonRef = useRef(null);

  useEffect(() => {
    primaryButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="checkOutModalOverlay"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="checkOutModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
      >
        <img className="checkImg" src="/right.png" alt="" />
        <p className="success" id="checkout-title">
          Order Successful
        </p>
        <p className="orderMessage">
          Thank you for your purchase. Your order has been successfully placed
          and is now being processed.
        </p>

        <div className="orderDetails">
          <p className="orderListTitle">Your order</p>
          <ul className="checkoutOrderList">
            {order.map((item) => (
              <li className="checkoutOrderItem" key={item.id}>
                <span className="checkoutOrderName">
                  {item.name} × {item.quantity}
                </span>
                <span className="checkoutOrderPrice">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>

          <dl className="checkoutTotals">
            <div>
              <dt>Subtotal</dt>
              <dd>{formatPrice(totals.subtotal)}</dd>
            </div>
            <div>
              <dt>Delivery</dt>
              <dd>{formatPrice(totals.delivery)}</dd>
            </div>
            <div>
              <dt>Taxes</dt>
              <dd>{formatPrice(totals.tax)}</dd>
            </div>
            <div className="checkoutTotalRow">
              <dt>Total</dt>
              <dd>{formatPrice(totals.total)}</dd>
            </div>
          </dl>
        </div>

        <div className="checkoutActions">
          <button
            type="button"
            className="checkoutButton checkoutPrimaryButton"
            ref={primaryButtonRef}
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
          <button
            type="button"
            className="checkoutButton checkoutSecondaryButton"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;

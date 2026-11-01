const CART_STORAGE_KEY = "culture-cart";
let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
const cartItemsContainer = document.querySelector(".cartItems");
const totalItemsNumber = document.querySelector(".totalno");
const taxAmount = document.querySelector(".taxAmount");
const deliveryDate = document.querySelector(".delivery");
const subTotalPrice = document.querySelector(".subTotalPrice");
const totalPayment = document.querySelector(".totalPayment");
const deleteAllButton = document.querySelector(".deteBtn");

/*------------------------------------------------
                    SUMMARY
     ------------------------------------------------*/
function updateSummary() {
  const tax = cart.length > 0 ? 5 : 0;
  const deliveryAmount = cart.length > 0 ? 5 : 0;
  const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  const subTotal = cart.reduce((total, item) => {
    return total + Number(item.price || 0) * Number(item.quantity || 1);
  }, 0);
  const finalPayment = subTotal + deliveryAmount + tax;

  if (totalItemsNumber) {
    totalItemsNumber.textContent = `${totalQuantity} ${totalQuantity === 1 ? "item" : "items"}`;
  }

  if (taxAmount) {
    taxAmount.textContent = `$${tax.toFixed(2)}`;
  }

  if (deliveryDate) {
    deliveryDate.textContent = `$${deliveryAmount.toFixed(2)}`;
  }

  if (subTotalPrice) {
    subTotalPrice.textContent = `$ ${subTotal.toFixed(2)}`;
  }

  if (totalPayment) {
    totalPayment.textContent = `$ ${finalPayment.toFixed(2)}`;
  }
}

/*------------------------------------------------
                PRODUCT CARD GENERATION 
    ------------------------------------------------*/
function renderCart() {
  cartItemsContainer.replaceChildren();

  if (cart.length === 0) {
    cartItemsContainer.textContent = "Your cart is empty.";
    updateSummary();
    return;
  }

  /*------------------------------------------------
                PRODUCT CARD GENERATION 
    ------------------------------------------------*/
  cart.forEach((item) => {
    const productCard = document.createElement("article");
    productCard.classList.add("productCard");

    const image = document.createElement("img");
    image.classList.add("productImage");
    image.src = item.coverImage;
    image.alt = item.name;

    const name = document.createElement("h3");
    name.classList.add("productName");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `Price: $${Number(item.price || 0).toFixed(2)}`;

    const details = document.createElement("div");
    details.classList.add("cartProductDetails");
    details.append(name, price);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("removeCartItem");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      cart = cart.filter((cartItem) => cartItem.id !== item.id);
      saveCart();
      renderCart();
    });

    const quantityControls = document.createElement("div");
    quantityControls.classList.add("cartQuantity");

    const decreaseButton = document.createElement("button");
    decreaseButton.type = "button";
    decreaseButton.textContent = "-";
    decreaseButton.setAttribute("aria-label", `Decrease ${item.name} quantity`);
    decreaseButton.disabled = item.quantity <= 1;
    decreaseButton.addEventListener("click", () => {
      item.quantity -= 1;
      saveCart();
      renderCart();
    });

    const quantityNumber = document.createElement("p");
    quantityNumber.textContent = item.quantity;

    const increaseButton = document.createElement("button");
    increaseButton.type = "button";
    increaseButton.textContent = "+";
    increaseButton.setAttribute("aria-label", `Increase ${item.name} quantity`);
    increaseButton.addEventListener("click", () => {
      item.quantity += 1;
      saveCart();
      renderCart();
    });

    quantityControls.append(
      decreaseButton,
      quantityNumber,
      increaseButton,
      removeButton
    );
    productCard.append(image, details, quantityControls);
    cartItemsContainer.append(productCard);
  });

  updateSummary();
}

/*------------------------------------------------
                      SAVE CART
     ------------------------------------------------*/
function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
}

/*------------------------------------------------
                  DELETE ALL CART ITEMS
     ------------------------------------------------*/
if (deleteAllButton) {
  deleteAllButton.addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
  });
}

renderCart();

const checkOut = document.querySelector(".checkout");

if (checkOut) {
  checkOut.addEventListener("click", () => {
    const orderSnapshot = [...cart];

    cart = [];
    saveCart();
    renderCart();

    const overlay = document.createElement("div");
    overlay.classList.add("checkOutModalOverlay");
    overlay.setAttribute("aria-hidden", "false");

    const modal = document.createElement("div");
    modal.classList.add("checkOutModal");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    const checkOutImage = document.createElement("img");
    checkOutImage.classList.add("checkImg");
    checkOutImage.src = "../img/right.png";
    checkOutImage.alt = "Order successful";

    const paymentSucess = document.createElement("p");
    paymentSucess.classList.add("success");
    paymentSucess.textContent = "Order Successful";

    const orderMessage = document.createElement("p");
    orderMessage.classList.add("orderMessage");
    orderMessage.textContent = "Thank you for your purchase. Your order has been successfully placed and is now being processed.";

    const orderDetails = document.createElement("div");
    orderDetails.classList.add("orderDetails");

    const orderListTitle = document.createElement("p");
    orderListTitle.classList.add("orderListTitle");
    orderListTitle.textContent = "Your order:";

    const orderList = document.createElement("ul");
    orderList.classList.add("checkoutOrderList");

    if (orderSnapshot.length > 0) {
      orderSnapshot.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("checkoutOrderItem");

        const itemName = document.createElement("span");
        itemName.classList.add("checkoutOrderName");
        itemName.textContent = `${item.name} x ${item.quantity}`;

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("checkoutOrderPrice");
        itemPrice.textContent = `$${(Number(item.price || 0) * Number(item.quantity || 1)).toFixed(2)}`;

        listItem.append(itemName, itemPrice);
        orderList.appendChild(listItem);
      });
    } else {
      const emptyItem = document.createElement("li");
      emptyItem.classList.add("checkoutOrderItem");
      emptyItem.textContent = "No items in this order.";
      orderList.appendChild(emptyItem);
    }

    const totalRow = document.createElement("p");
    totalRow.classList.add("checkoutTotalRow");

    const subtotalValue = orderSnapshot.reduce((total, item) => {
      return total + Number(item.price || 0) * Number(item.quantity || 1);
    }, 0);

    totalRow.innerHTML = `<span>Total</span><strong>$${subtotalValue.toFixed(2)}</strong>`;

    orderDetails.append(orderListTitle, orderList, totalRow);

    const actions = document.createElement("div");
    actions.classList.add("checkoutActions");

    const primaryButton = document.createElement("button");
    primaryButton.type = "button";
    primaryButton.classList.add("checkoutButton", "checkoutPrimaryButton");
    primaryButton.textContent = "Continue Shopping";

    const secondaryButton = document.createElement("button");
    secondaryButton.type = "button";
    secondaryButton.classList.add("checkoutButton", "checkoutSecondaryButton");
    secondaryButton.textContent = "Close";

    const closeModal = () => overlay.remove();

    primaryButton.addEventListener("click", () => {
      closeModal();
      window.location.href = "../index.html";
    });

    secondaryButton.addEventListener("click", closeModal);

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    }, { once: true });

    actions.append(primaryButton, secondaryButton);
    modal.append(checkOutImage, paymentSucess, orderMessage, orderDetails, actions);
    overlay.append(modal);
    document.body.append(overlay);
  });
}
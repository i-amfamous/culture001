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
const CART_STORAGE_KEY = "culture-cart";
let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
const cartItemsContainer = document.querySelector(".cartItems");

function renderCart() {
  cartItemsContainer.replaceChildren();

  if (cart.length === 0) {
    cartItemsContainer.textContent = "Your cart is empty.";
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
    price.textContent = `Price: $${item.price.toFixed(2)}`;

    const details = document.createElement("div");
    details.classList.add("cartProductDetails");
    details.append(name, price);

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

    /*------------------------------------------------
                      SUMMARY
     ------------------------------------------------*/
    const totalItemsNumber = document.querySelector('.totalno')
    totalItemsNumber.textContent = `${cart.length} items`

    const taxAmount = document.querySelector('.taxAmount')
    const tax = 5;
    taxAmount.textContent = `$${tax.toFixed(2)}`;

    /*------------------------------------------------
                    DELIVERY AMOUNT
     ------------------------------------------------*/
    const deliveryDate = document.querySelector('.delivery')
    const deliveryAmount = 5;
    deliveryDate.textContent = `$${deliveryAmount.toFixed(2)}`

    /*------------------------------------------------
                     SUB TOTAL PAYMENT
     ------------------------------------------------*/
    const subTotalPrice = document.querySelector('.subTotalPrice')
    const subTotal = cart.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);

    subTotalPrice.textContent = `$ ${subTotal.toFixed(2)}`;

    /*------------------------------------------------
                      DUE PAYMENT
     ------------------------------------------------*/
    const totalPayment = document.querySelector('.totalPayment');
    const finalPayment = cart.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0) + deliveryAmount + tax;

    if (cart.length === 0) {
      totalPayment.textContent = `$ 0.00`;
    } else {
      totalPayment.textContent = `$ ${finalPayment.toFixed(2)}`;
    }

    /*------------------------------------------------
                      REMOVE ITEM BTN
     ------------------------------------------------*/
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("removeCartItem");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      cart = cart.filter((cartItem) => cartItem.id !== item.id);
      
      saveCart();
      renderCart();
    });
  const deleteAll = document.querySelector('.deteBtn');

  deleteAll.addEventListener('click', () => {
  cart = [];
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
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
}

renderCart();
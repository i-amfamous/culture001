//Main Product Parent container
const productsContainer = document.querySelector(".productsContainer");

if (!productsContainer) {
  console.warn("Products page container not found.");
}

//Cart
const CART_STORAGE_KEY = "culture-cart"
let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]")

async function showProducts() {
  if (!productsContainer) return;

  try {
    const response = await fetch(new URL("../js/productsItems.json", window.location.href).href);
    if (!response.ok) {
      throw new Error(`Could not load products: ${response.status}`);
    }
    const products = await response.json();
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("productCard");

      const productImage = document.createElement("img");
      productImage.classList.add("productImage");
      productImage.src = product.coverImage;

      const productName = document.createElement("h3");
      productName.classList.add("productName");
      productName.textContent = product.name;

      const price = document.createElement("p");
      price.classList.add("price");
      price.textContent = `Price: $${product.price}`;
      const descr = document.createElement("p");
      descr.classList.add("descr");
      descr.textContent = product.description;

      const btn = document.createElement("button");
      btn.classList.add("btn");
      btn.textContent = "Add to Cart";

      btn.addEventListener("click", () => {
        const existing = cart.find((item) => item.id === product.id);

        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        window.dispatchEvent(new Event("cart-updated"));
      });
      
      productCard.append(productImage, productName, price, descr, btn);
      productsContainer.append(productCard);
      
    });
  } catch (error) {
    console.error("Could not load products:", error);
  }
}

showProducts();

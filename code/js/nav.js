const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
  siteNavigation.classList.toggle("is-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

window.matchMedia("(min-width: 641px)").addEventListener("change", () => {
  setMenuOpen(false);
});

(() => {
  const CART_STORAGE_KEY = "culture-cart";

  function updateCartCount() {
    const badge = document.querySelector(".cartCount");
    if (!badge) return;

    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    const count = cart.reduce((total, item) => total + item.quantity, 0);

    badge.textContent = count;
  }

  updateCartCount();

  // Refresh if another browser tab changes the saved cart.
  window.addEventListener("storage", updateCartCount);

  // Refresh when this page changes the cart.
  window.addEventListener("cart-updated", updateCartCount);
})();
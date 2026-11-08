import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProductsPage from "./components/ProductsPage";
import ContactPage from "./components/ContactPage";
import CartPage from "./components/CartPage";
import Privacy from "./components/Privacy";
import TermsAndConditions from "./components/TermsAndConditions";
import NotFoundPage from "./components/NotFoundPage";

const pageTitles = {
  "/": "CULTURE / 001 | Wear Your Heritage",
  "/about": "About | CULTURE / 001",
  "/products": "Shop Kente & African Wear | CULTURE / 001",
  "/contact": "Contact | CULTURE / 001",
  "/cart": "Your Cart | CULTURE / 001",
  "/privacy": "Privacy Policy | CULTURE / 001",
  "/terms": "Terms & Conditions | CULTURE / 001",
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = pageTitles[pathname] ?? "CULTURE / 001";
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <RouteEffects />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;

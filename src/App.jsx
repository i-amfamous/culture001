import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProductsPage from "./components/ProductsPage";
import ContactPage from "./components/ContactPage";
import CartPage from "./components/CartPage";
import Privacy from "./components/Privacy"
import TermsAndConditions from "./components/TermsAndConditions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/terms" element= {<TermsAndConditions />} />
        <Route path="/privacy" element={<Privacy />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
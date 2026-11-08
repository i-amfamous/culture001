import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/cart";
import "./styles/base.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

const NavBar = () => {
  const { totals } = useCart();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  // Close the mobile menu whenever the route changes. Adjusting state during
  // render (rather than in an effect) avoids a cascading re-render.
  if (currentPath !== location.pathname) {
    setCurrentPath(location.pathname);
    setMenuOpen(false);
  }

  // Escape closes the menu, and desktop widths never show it.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const desktopQuery = window.matchMedia("(min-width: 641px)");
    const handleBreakpoint = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleBreakpoint);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleBreakpoint);
    };
  }, [menuOpen]);

  const count = totals.count;

  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src="/logo.png" alt="" />
            CULTURE / 001
          </Link>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`header-nav${menuOpen ? " is-open" : ""}`}
          id="site-navigation"
        >
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cart">
          <Link to="/cart" aria-label={`Cart, ${count} items`}>
            <img src="/cart.svg" alt="Cart" height="30" width="30" />
          </Link>
          <p className="cartCount" aria-hidden="true">
            {count > 99 ? "99+" : count}
          </p>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

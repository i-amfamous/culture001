import "./styles/base.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <header>
        <div className="header-container">
            <div className="header-logo">
                <Link to="/"><img src="/logo.png" alt="Logo" />CULTURE / 001</Link>
            </div>
            <button className="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className="header-nav" id="site-navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        <div className="header-cart">
            <Link to="/cart"><img src="/cart.svg" alt="Cart" height="30" /></Link>
            <p className="cartCount">0</p>
        </div>
        </div>
    </header>
    </>
  )
}

export default NavBar
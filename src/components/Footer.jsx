import { Link } from "react-router-dom";
import "./styles/base.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-cta">
          <div className="footer-cta-copy">
            <p className="footer-kicker">CULTURE / 001</p>
            <h2>Wear your heritage. Live with intention.</h2>
          </div>
          <div className="footer-cta-actions">
            <Link to="/products">Shop the collection</Link>
            <Link to="/contact">Connect with us</Link>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <Link to="/">
                <img src="/logo.png" alt="" />
                CULTURE / 001
              </Link>
            </div>
            <p>
              Modern African fashion for culture, confidence, and everyday
              elegance.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <h2>Explore</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="footer-social-section">
            <h2>Follow along</h2>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} CULTURE / 001. All rights reserved | Built by Famous
            Tech
          </p>
          <nav className="footer-legal" aria-label="Legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

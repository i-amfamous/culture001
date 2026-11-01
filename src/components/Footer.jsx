import { Link } from "react-router-dom";
import "./styles/base.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
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
                <Link to="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                </Link>
                <Link to="#" aria-label="X">
                  <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; <span className="footerDate"></span> CULTURE / 001. All
              rights reserved | Built by Famous Tech
            </p>
            <nav className="footer-legal" aria-label="Legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

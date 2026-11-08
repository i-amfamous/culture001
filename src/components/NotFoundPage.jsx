import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./styles/pages.css";

const NotFoundPage = () => {
  return (
    <>
      <NavBar />
      <main className="page-contact">
        <section className="page-hero">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>
            The page you are looking for may have moved or no longer exists.
          </p>
        </section>
        <section className="page-content not-found">
          <h2>Let&apos;s get you back to the collection.</h2>
          <div className="not-found-actions">
            <Link to="/" className="btn">
              Back home
            </Link>
            <Link to="/products" className="btn">
              Shop the collection
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;

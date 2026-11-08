import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import ReviewCarousel from "./ReviewCarousel";
import products from "./data/products";
import "./styles/style.css";

const featured = products.slice(0, 4);

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="page-home">
        <section className="hero">
          <h1>WEAR YOUR HERITAGE</h1>
          <p>
            Discover Kente, African-inspired fashion, and statement pieces
            rooted in culture, identity, and confidence. Our collections
            celebrate heritage while bringing a bold, modern edge to everyday
            style.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn">
              SHOP KENTE
            </Link>
            <Link to="/about" className="btn">
              OUR STORY
            </Link>
          </div>
        </section>

        <div className="featuredProducts">
          <h2>Featured Kente &amp; African Wear</h2>
          <section className="products">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="featured"
              />
            ))}
          </section>
          <div className="featuredAction">
            <Link to="/products" className="btn">
              View the full collection
            </Link>
          </div>
        </div>

        <section className="philosophy" aria-labelledby="philosophy-heading">
          <div className="philosophy-intro">
            <h2 id="philosophy-heading">
              Culture
              <span>crafted for now.</span>
            </h2>
            <div className="philosophy-copy">
              <p>
                CULTURE / 001 brings elevated African fashion to everyday life,
                blending rich heritage with a clean, contemporary point of view.
                Each piece is designed to honor tradition while feeling polished,
                wearable, and unmistakably modern.
              </p>
              <p>
                From expressive Kente-inspired silhouettes to refined staples,
                our collections are built for people who want to dress with
                intention, confidence, and a strong sense of identity.
              </p>
            </div>
          </div>

          <div className="philosophy-grid">
            <article className="philosophy-card">
              <span className="philosophy-index" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3.5 14.2 8l4.8.7-3.5 3.4 0.8 4.8-4.3-2.3-4.3 2.3 0.8-4.8L5 8.7l4.8-.7L12 3.5Z" />
                </svg>
              </span>
              <h3>Heritage, refined.</h3>
              <p>
                We reinterpret African artistry through a luxury lens balancing
                craftsmanship, texture, and storytelling so every garment feels
                both rooted and elevated.
              </p>
            </article>

            <article className="philosophy-card">
              <span className="philosophy-index" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 17.5V8.2L12 4l6 4.2v9.3M9 11.5h6M9 15h6" />
                </svg>
              </span>
              <h3>Modern confidence.</h3>
              <p>
                Our designs are created for the moments that matter: celebrations,
                daily expression, and the confidence of wearing something that
                feels true to who you are.
              </p>
            </article>

            <article className="philosophy-card">
              <span className="philosophy-index" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.5 10.5h9M7.5 13.5h6M8 18.5h8a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z" />
                </svg>
              </span>
              <h3>Quality in every detail.</h3>
              <p>
                From pattern and proportion to finish and fit, we approach every
                piece with precision so it feels elevated, effortless, and lasting.
              </p>
            </article>

            <article className="philosophy-card">
              <span className="philosophy-index" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3.5v4M12 16.5v4M3.5 12h4M16.5 12h4M6.5 6.5l2.8 2.8M14.7 14.7l2.8 2.8M17.5 6.5l-2.8 2.8M9.3 14.7l-2.8 2.8" />
                </svg>
              </span>
              <h3>Made to stand out.</h3>
              <p>
                We create fashion that speaks before you do clear, confident,
                and unapologetically expressive without losing its elegance.
              </p>
            </article>
          </div>

          <div className="philosophy-close">
            <div>
              <h3>Wear your story with presence.</h3>
              <p>
                Discover pieces designed for modern living, cultural pride, and a
                wardrobe that feels elevated in every moment.
              </p>
            </div>
            <Link to="/products" className="philosophy-link">
              Shop the collection
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        <ReviewCarousel />

        <section className="cta" aria-labelledby="cta-heading">
          <div className="cta-inner">
            <h2 id="cta-heading">
              Style with roots.
              <span>Impact with presence.</span>
            </h2>
            <div className="cta-footer">
              <p>
                Celebrate your tradition with a modern look that feels
                elevated, expressive, and confidently you.
              </p>
              <Link to="/products" className="btn">
                Shop Kente
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

import {Link} from "react-router-dom"
import "./styles/about.css";
import NavBar from "./NavBar"
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <>
    <NavBar />
      <main className="page-about">
      <div className="hero">
        <div className="hero-slide" aria-hidden="true"></div>
        <div className="hero-slide" aria-hidden="true"></div>
        <div className="hero-slide" aria-hidden="true"></div>
        <div className="hero-slide" aria-hidden="true"></div>
        <div className="hero-glow" aria-hidden="true"></div>
        <h1>Kente, Culture, and Modern African Style.</h1>
        <p>
          At CULTURE / 001, we celebrate African identity through Kente, heritage-inspired silhouettes, and modern fashion that feels both rooted and fresh. We design for people who wear culture proudly and want their style to tell a story of confidence, tradition, and individuality.
        </p>
      </div>

      <div className="story">
        <h2>Our Story</h2>
        <p>
          CULTURE / 001 was created for the people who want their wardrobe to carry meaning. Inspired by Ghanaian Kente weaving, African craftsmanship, and contemporary fashion, we bring together heritage and modern expression to create pieces that speak with pride. Every garment is designed to reflect individuality, creativity, and the beauty of African culture in everyday life.
        </p>

        <div className="storyContainer">
          <div className="card">
            <h1>Our Mission</h1>
            <p>
              Our mission is to make African fashion accessible, stylish, and deeply meaningful. We curate Kente-inspired pieces and modern African essentials that help people celebrate identity, confidence, and heritage in the way they dress every day.
            </p>
          </div>
          <div className="card">
            <h1>The Experience</h1>
            <p>
              From bold Kente wraps to elegant traditional silhouettes, we create an experience that helps you discover pieces that feel personal, expressive, and built for confidence. Shopping with CULTURE / 001 is about finding your rhythm in culture and style.
            </p>
          </div>
          <div className="card">
            <h1>Our Vision</h1>
            <p>
              To build a brand that elevates African fashion with confidence and elegance. A space where heritage meets modern expression, and where every outfit tells a story of identity, pride, and creative power.
            </p>
          </div>
        </div>
      </div>

      <div className="cta">
        <h3>Wear Your Story. Own Your Heritage.</h3>
        <p>
          Fashion is always evolving, but heritage never goes out of style. Welcome to CULTURE / 001 where Kente, African fashion, and modern expression come together in one bold identity.
        </p>
        <Link to="/products">Discover the Collection →</Link>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default AboutPage
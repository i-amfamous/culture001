import { Link } from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer";
import "./styles/style.css"

const HomePage = () => {
  return (
    <>
    <NavBar />
    <main className="page-home">
         <section className="hero">
            <h1>WEAR YOUR HERITAGE</h1>
            <p>Discover Kente, African-inspired fashion, and statement pieces rooted in culture, identity, and confidence. Our collections celebrate heritage while bringing a bold, modern edge to everyday style.</p>
            <div className="hero-buttons">
                <Link to="/products" className="btn">SHOP KENTE</Link>
                <Link to="/about" className="btn">OUR STORY</Link>
            </div>
        </section>

        <div className="featuredProducts">
            <h2>Featured Kente & African Wear</h2>
            <section className="products">
            </section>
        </div>

        <div className="goals">
            <div className="left-goal">
                <p>OUR PHILOSOPHY</p>
                <h2>HERITAGE IS STYLE.</h2>
                <p>At CULTURE / 001, we design for people who want to carry history, identity, and confidence in every outfit. Kente and African-inspired fashion are more than clothing — they are a way of expressing pride and personal story.</p>
                <p>Every piece in our collection reflects craftsmanship, culture, and the belief that style can be both timeless and bold. We create modern looks rooted in tradition so you can stand out with purpose.</p>
            </div>
            <div className="right-goal">
                <h3>BUILT ON CULTURE. DRIVEN BY IDENTITY.</h3>
                <p>Our vision is to bring African fashion to the forefront with pieces that feel elevated, meaningful, and wearable. We celebrate craftsmanship, heritage, and the confidence that comes from dressing in a way that reflects who you are.</p>
                <p>We are not here to copy trends. We are here to honor culture and create looks that feel powerful, authentic, and unforgettable.</p>
            </div>
            <div className="left-goal">
                <h3>BEYOND CLOTHING. A STATEMENT.</h3>
                <p>Every collection tells a story through rich color, texture, and pattern. We believe fashion should carry significance and help you express your roots with pride.</p>
                <p>Our Kente and African pieces are designed for celebrations, everyday confidence, and the moments when you want your outfit to speak for you before you say a word.</p>
            </div>
            <div className="right-goal">
                <h3>DETAILS MATTER. HERITAGE SPEAKS.</h3>
                <p>We believe greatness begins with intention. From the pattern to the fit and finish, every detail matters in a piece that reflects culture and style.</p>
                <p>Our goal is to offer a fashion experience that feels elevated, meaningful, and full of identity, with quality you can wear with pride.</p>
            </div>
            <div className="left-goal">
                <h3>FOR THOSE WHO MOVE WITH PURPOSE.</h3>
                <p>For the dreamers, the culture-lovers, and the confident ones who dress with meaning. We create for people who want to feel rooted, refined, and visible.</p>
                <p>This is fashion for those who know that style is not just appearance — it is expression, confidence, and pride.</p>
            </div>
            <div className="right-goal">
                <h3>YOUR STYLE. YOUR STORY. YOUR ROOTS.</h3>
                <p>Wear your identity with confidence. Celebrate heritage with elegance. Make every look a reflection of who you are.</p>
                <Link to="/products" className="btn">SHOP THE COLLECTION</Link>
            </div>
        </div>

        <section className="review" aria-labelledby="reviews-title">
            <div className="review-heading">
                <div>
                    <h2 id="reviews-title">Loved for their meaning and style.</h2>
                </div>
                <div className="review-controls" aria-label="Review carousel controls">
                    <button className="review-control" type="button" data-review-direction="previous" aria-label="Previous review">
                        <span aria-hidden="true">&larr;</span>
                    </button>
                    <button className="review-control" type="button" data-review-direction="next" aria-label="Next review">
                        <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
            </div>
            <div className="review-viewport">
                <div className="userReview" aria-live="polite"></div>
            </div>
        </section>
        <div className="cta">
            <h2>STYLE WITH ROOTS. IMPACT WITH PRESENCE.</h2>
            <p>Celebrate your tradition with a modern look that feels elevated, expressive, and confidently you.</p>
            <Link to="/products" className="btn">SHOP KENTE</Link>
        </div>
    </main>
    <Footer />
    </>
  )
}

export default HomePage
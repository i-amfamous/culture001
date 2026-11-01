import NavBar from "./NavBar"
import Footer from "./Footer"
import "./styles/base.css"
import "./styles/pages.css"

const TermsAndConditions = () => {
  return (
    
    <>
    <NavBar />
    <main>
      <section className="page-hero">
        <p className="eyebrow">Legal</p>
        <h1>Terms &amp; Conditions</h1>
        <p>The terms that apply when you shop with CULTURE / 001.</p>
      </section>

      <section className="page-content legal-content">
        <p className="updated">Last updated: October 2026</p>

        <h2>Using our website</h2>
        <p>
          By browsing or shopping on this website, you agree to these terms. If
          you do not agree, please do not use the site. We may update these
          terms from time to time, and the latest version will always be
          published on this page.
        </p>

        <h2>Products and pricing</h2>
        <p>
          We work hard to describe our products and colours accurately, but
          small variations in fabric, pattern, and finish are part of
          handcrafted pieces. Prices and availability may change without
          notice, and we reserve the right to correct any errors.
        </p>

        <h2>Orders</h2>
        <ul>
          <li>All orders are subject to availability and confirmation.</li>
          <li>We may cancel an order if an item is out of stock or mispriced.</li>
          <li>
            You are responsible for providing accurate delivery and contact
            details.
          </li>
        </ul>

        <h2>Payment</h2>
        <p>
          Payment is taken at checkout through our supported payment methods.
          Your order is only confirmed once payment has been successfully
          processed.
        </p>

        <h2>Shipping and delivery</h2>
        <p>
          Delivery times are estimates and may vary depending on your location.
          Any delivery charges are shown at checkout before you confirm your
          order.
        </p>

        <h2>Returns and exchanges</h2>
        <p>
          If something is not right with your order, please contact us within 14
          days of delivery. Items should be unworn, in their original condition,
          and with any tags attached. Certain items, such as custom or
          personalised pieces, may not be eligible for return.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All content on this site, including text, images, and branding, belongs
          to CULTURE / 001 and may not be used without our permission.
        </p>

        <h2>Contact us</h2>
        <p>
          For any questions about these terms, please reach out through our
          <a href="contact.html">contact page</a> or email
          <a href="mailto:hello@culture001.com">hello@culture001.com</a>.
        </p>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default TermsAndConditions
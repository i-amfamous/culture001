import "./styles/base.css"
import "./styles/pages.css"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Privacy = () => {
  return (
    <>
      <main>
        <NavBar />
      <section className="page-hero">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p>How CULTURE / 001 collects, uses, and protects your information.</p>
      </section>

      <section className="page-content legal-content">
        <p className="updated">Last updated: October 2026</p>

        <h2>Information we collect</h2>
        <p>
          When you browse our store, place an order, or contact us, we may
          collect information you provide directly, such as your name, email
          address, delivery address, and order details. We may also collect
          basic usage information, such as the pages you visit and the device
          you use, to keep the site working well.
        </p>

        <h2>How we use your information</h2>
        <ul>
          <li>To process and deliver your orders.</li>
          <li>To respond to questions, requests, and support messages.</li>
          <li>To improve our products, website, and shopping experience.</li>
          <li>To send updates or offers, only where you have opted in.</li>
        </ul>

        <h2>Cookies and local storage</h2>
        <p>
          Our site uses browser storage to keep track of the items in your cart
          between visits. This information stays on your device and is not used
          to identify you personally. You can clear it at any time through your
          browser settings.
        </p>

        <h2>Sharing your information</h2>
        <p>
          We do not sell your personal information. We only share it with
          trusted partners who help us run the store, such as payment
          processors and delivery services, and only to the extent needed to
          complete your order or meet a legal obligation.
        </p>

        <h2>Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of the personal
          information we hold about you. To make a request, contact us at
          <a href="mailto:hello@culture001.com">hello@culture001.com</a>.
        </p>

        <h2>Contact us</h2>
        <p>
          If you have any questions about this policy, please reach out through
          our <a href="contact.html">contact page</a> or email
          <a href="mailto:hello@culture001.com">hello@culture001.com</a>.
        </p>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default Privacy;
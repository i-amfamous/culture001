import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./styles/pages.css";

const emptyForm = { name: "", email: "", subject: "", message: "" };

const ContactPage = () => {
  const [form, setForm] = useState(emptyForm);
  const [sentTo, setSentTo] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSentTo(form.name.trim() || "friend");
    setForm(emptyForm);
  };

  return (
    <>
      <NavBar />
      <main className="page-contact">
        <section className="page-hero">
          <h1>Contact CULTURE / 001</h1>
          <p>
            Questions about a piece, sizing, or your order? Send us a message
            and our team will get back to you within one business day.
          </p>
        </section>

        <section className="page-content">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>We would love to hear from you.</h2>
              <p>
                Whether you are shopping for a celebration or building your
                everyday wardrobe, we are here to help you find something rooted
                in culture and made to last.
              </p>
              <ul className="contact-list">
                <li>
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:hello@culture001.com">
                      hello@culture001.com
                    </a>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+233200000000">+233 20 000 0000</a>
                  </div>
                </li>
                <li>
                  <i
                    className="fa-solid fa-location-dot"
                    aria-hidden="true"
                  ></i>
                  <div>
                    <h3>Studio</h3>
                    <span>Accra, Ghana</span>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-clock" aria-hidden="true"></i>
                  <div>
                    <h3>Hours</h3>
                    <span>Monday to Friday, 9:00 - 17:00 GMT</span>
                  </div>
                </li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
              <button type="submit">Send message</button>

              {sentTo && (
                <p className="formSuccess" role="status">
                  Thank you, {sentTo}. Your message has been received, we will
                  reply within one business day.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

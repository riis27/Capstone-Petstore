// Contact.jsx
import React, { useState } from 'react';
import '../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form submitted:', formData);
      // Optionally connect this to your backend (MERN/JWT)
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main className="contact-wrapper">
      <section className="contact-hero">
        <div className="overlay">
          <div className="content">
            <h2 className="title">Contact Us</h2>
            <p className="subtitle">
              We’d love to hear from you! Reach out for questions, comments, or collaboration ideas.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-dark">Send</button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-details container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5>About Us</h5>
            <p>
              We help furry friends find their forever homes while creating lifelong memories. 
              Feel free to reach out and ask us anything!
            </p>
          </div>
          <div className="col-md-6">
            <div className="info-block">
              <h6>Address:</h6>
              <p>Via Cesare Rosaroll st. 118, 80139 Sofia</p>
            </div>
            <div className="info-block">
              <h6>Phone:</h6>
              <a href="tel:+7599334345">+759 933 43 45</a>
            </div>
            <div className="info-block">
              <h6>Email:</h6>
              <a href="mailto:wiso@info.com">wiso@info.com</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

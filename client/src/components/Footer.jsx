// Footer.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Footer.css";
import BACKEND_URL from "../config";

const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(BACKEND_URL + "api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      if (res.ok) {
        navigate("/subscribed");
      } else {
        const data = await res.json();
        alert(data.message || "Failed to subscribe. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column brand">
          <h2 className="footer-title">Pawsh</h2>
          <p>123 Pet Lane, Animalia City, PA 19202</p>
          <p>Email: info@pawsh.com</p>
          <p>Phone: +1 (800) 555-PAWS</p>
        </div>

        <div className="footer-column subscribe">

          <h2 className="subscribe-title">Subscribe to our Pawsh Press</h2>
          <p className="subscribe-text">New subscribers receive 10% off oue services!</p>

          <form onSubmit={handleNewsletterSubmit} className="footer-form">
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="footer-input"
            />
            <button type="submit" className="footer-button">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Pawsh Inc. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

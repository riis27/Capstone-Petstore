// Registered.jsx
import React from "react";
import "../styles/Registered.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Registered = () => {
  return (
    <>
      <Navbar />
      <div className="registered-page">
        <h2>Thank you for your message!</h2>
        <p>We'll get back to you as soon as possible. 🐾</p>
      </div>
      <Footer />
    </>
  );
};

export default Registered;

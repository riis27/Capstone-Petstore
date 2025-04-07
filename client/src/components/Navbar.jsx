import React from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light benne-font">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/logo.jpeg" alt="Pawsh Logo" className="navbar-image" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav libre-font">
            <li className="nav-item">
              <a className="nav-link" href="/about">Our Mission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/adoption">Adoption</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faqs">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/booking">Booking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

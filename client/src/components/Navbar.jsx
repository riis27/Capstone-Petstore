import React, { useEffect, useState } from 'react';
import { decodeToken } from '../utils/decodeToken'; // Adjust path if needed
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const decoded = decodeToken();
    if (decoded) {
      setUser(decoded);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    navigate('/'); // optional: redirect to home
  };

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
            {user ? (
              <>
                <li className="nav-item nav-link text-muted">
                  👋 Welcome, {user.email}
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

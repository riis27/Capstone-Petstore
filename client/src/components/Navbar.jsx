import React, { useEffect, useState } from 'react';
import { decodeToken } from '../utils/decodeToken';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

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
    localStorage.removeItem('userInfo');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light benne-font custom-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/assets/pawsh-logo.png" alt="Pawsh Logo" className="navbar-image" />
        </Link>

        {/* Hamburger for small screens */}
        <button
          className="navbar-toggler d-md-none ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse justify-content-end dropdown-nav-wrapper" id="navbarLinks">
          <ul className="navbar-nav text-end">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Our Mission</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adoption">Adoption</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faqs">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booking">Booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            {user?.isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/add-pet">Add Pet</Link>
              </li>
            )}

            {user?.isAdmin ? (
              <>
                <li className="nav-item nav-link text-muted benne-font">
                  {user.email.split('@')[0]}
                </li>
                <li className="nav-item">
                  <button
                    className="logout-button"
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

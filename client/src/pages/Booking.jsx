// Booking.jsx
import React from "react";
import "../styles/Booking.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Booking = () => {
  return (
    <>
 
      <div className="booking-wrapper">
        <section className="banner-section">
          <img
            src="https://images.unsplash.com/photo-1544717302-de2939b7ef71"
            alt="Booking Banner"
            className="banner-img"
          />
          <div className="banner-overlay" />
          <div className="banner-content">
            <h3 className="banner-title">Booking</h3>
            <svg className="scroll-arrow">
              <path d="M0 0 L15 16 L30 0"></path>
              <path d="M0 10 L15 26 L30 10"></path>
              <path d="M0 20 L15 36 L30 20"></path>
            </svg>
          </div>
        </section>

        <section className="reservation-info container">
          <div className="row">
            <div className="col-lg-5 col-md-5 mb-4">
              <h3>Reservation</h3>
              <p>
                Aenean diam lectus, porta ut quam ut, ultricies venenatis quam. Ut
                consectetur, dolor a imperdiet varius, purus nunc convallis nisl,
                eget pretium est tortor vel urna.
              </p>
              <p>
                Sed metus ac nisi maximus lacinia quis non augue. Phasellus
                condimentum hendrerit nibh, et placerat lacus suscipit quis.
              </p>
              <a href="/contact" className="btn btn-outline-dark">
                Contact Us
              </a>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="calendar-placeholder">
                {/* This is where your calendar component will go */}
                <p>Calendar coming soon...</p>
              </div>
            </div>
          </div>
        </section>

        <section className="photo-project-section">
          <div className="container text-center py-5">
            <h3>Start a new photo project with Pawsh?</h3>
            <a href="/contact" className="btn btn-dark mt-3">
              Contact Us
            </a>
          </div>
        </section>

        <section className="services-section container my-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="service-box">
                <img
                  src="https://images.unsplash.com/photo-1490823376780-1bfdc088b3f1"
                  alt="Photosession"
                />
                <h5>Booking Photosession</h5>
                <p>Phasellus faucibus venenatis dolor. In elit ligula.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box">
                <img
                  src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d"
                  alt="Our Commitment"
                />
                <h5>Our Commitment</h5>
                <p>Ut justo nisl, molestie quis semper at, imperdiet ultricies mi.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Booking;

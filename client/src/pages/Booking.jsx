// Booking.jsx
import React, { useState, useEffect } from "react";
import "../styles/Booking.css";
import Calendar from "../components/Calendar";



const Booking = () => {
  const images = [
    "https://images.unsplash.com/photo-1551779891-b83901e1f8b3?q=80&w=1470&auto=format",
    "https://images.unsplash.com/photo-1633537266841-1efbef449625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGQlMjB3aXRoJTIwcGV0fGVufDB8MXwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1657460899550-236957618309?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBob3RvZ3JhcGhlciUyMHdpdGglMjBwZXR8ZW58MHwxfDB8fHwy"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <>
      <div className="booking-wrapper">
        <section className="banner-section">
          <img
            src={images[currentImage]}
            alt="Booking Banner"
            className="banner-img"
          />
          <div className="banner-overlay" />
          <div className="banner-content">
            <h3 className="banner-title">Memories in the Making</h3>
          </div>
        </section>

        <section className="reservation-info container">
          <div className="row">
            <div className="col-lg-5 col-md-5 mb-4">
            <br></br>
              <h3>Our Schedule</h3>
              <p>
              Our in-studio photographers are hand-selected with our aesthetic in mind, but we are also in contact with freelance photographers who may align with your personality and character better!
              </p>
              <p>
              Due to high volume, we suggest placing a reservation with our talented photographers as they book quickly. A one-time fee allows you to choose from a range of dates, should you need to cancel for any unforeseen reason.
              </p>
              <br />
              <a href="/contact" className="booking-button">Book Now</a>
            </div>
            <div className="col-lg-7 col-md-7">
              <Calendar />
            </div>
          </div>
        </section>

        <section className="photo-project-section">
          <div className="container text-center py-5">
            <h2 className="ready-title">Ready to start a new photo project with Us?</h2>
            <a href="/contact" className="ready-button">
              I'm ready!
            </a>
          </div>
        </section>

        <section className="services-section container my-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="service-box">
                <img
                  src="https://images.unsplash.com/photo-1610414920179-540e7fd5e2e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Photosession"
                />
                <h5>Booking Photosession</h5>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, aliquid?                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box">
                <img
                  src="https://images.unsplash.com/photo-1555100679-e1484f62974e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbWl0bWVudCUyMGFuaW1hbHxlbnwwfDB8MHx8fDI%3D"
                  alt="Our Commitment"
                />
                <h5>Our Commitment</h5>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, aliquid?
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Booking;
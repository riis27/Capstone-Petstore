// Contact.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1609847214764-eb745f0178a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxGYW1pbHklMjBwaG90byUyMHdpdGglMjBwZXR8ZW58MHwxfDB8fHwy',
    'https://images.unsplash.com/photo-1616639791792-85f92d79b193?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1729874585575-2e0b3edd3784?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        navigate('/registered');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  return (
    <>
      <div className="contact-page">
        <div className="carousel-container">
          <img
            src={images[currentImage]}
            alt="pet-carousel"
            className="carousel-image"
          />
        </div>

        <div className="form-container">
          <h1>Contact Us</h1>
          <h2>
            Here at Pawsh, we strive for high quality and connection. Whether it's a question about our adoption process, our partners or something else, we are here to help.
            <br />
            <br />
            We'd love to hear from you!
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

// Landing.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
  const [showText, setShowText] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const navigate = useNavigate();
  const puppyBoxRef = useRef(null);
  const startButtonRef = useRef(null);

  useEffect(() => {
    const timerText = setTimeout(() => setShowText(true), 1500);
    const timerLogo = setTimeout(() => setShowLogo(true), 5000); 
    return () => {
      clearTimeout(timerText);
      clearTimeout(timerLogo);
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');

    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';

    return () => {
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  const handleStart = () => {
    navigate('/home');
  };

  return (
    <div className="landing-container">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/landing.mp4"
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>

      <div className="landing-overlay" />


      <div className="center-frame">
        {showText && (
          <>
            <div className="top-text">The journey to meet</div>

            <div className="puppy-box-container">
              <div className="puppy-box" ref={puppyBoxRef}>
                <div className="puppy-box-inner">
                  <button className="start-button" onClick={handleStart} ref={startButtonRef}>
                    Begins Here.
                  </button>
                  {showLogo && <div className="pawsh-logo">Pawsh</div>}
                </div>
              </div>
            </div>

            <div className="bottom-text">your new best friend</div>
          </>
        )}
      </div>
      
    </div>
    
  );
};

export default Landing;
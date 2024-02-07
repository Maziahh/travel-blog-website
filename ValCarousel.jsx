"use client";
import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling

// Sample data (replace with your own data)
const carouselData = [
  { id: 1, image: 'val.jpeg', description: 'Picture with my digital camera!' },
  { id: 2, image: 'friends1.jpeg', description: 'With my secondary school friends.' },
  { id: 3, image: 'friends2.jpeg', description: 'With my pfp friends.' },
  { id: 4, image: 'val2.jpeg', description: 'At Mars:The Red Mirror museum.' },
  { id: 5, image: 'friends3.jpeg', description: 'With my secondary school friends.' },
];

// Carousel component
function ValCarousel() {

  const handleLearnMoreClick = () => {
    // Use window.location.href to navigate to another page
    window.location.href = '/learn-more';
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);


  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 500); // Adjust the timeout value to match the transition duration
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
      );
    }, 500); // Adjust the timeout value to match the transition duration
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel" style={{ marginTop: '50px', maxWidth: '400px', marginLeft: '20px' }}>
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            &lt;
          </button>
          <div className="carousel-content">
            <p className="photo-count">{`${currentImageIndex + 1} of ${carouselData.length}`}</p>
            <img
              src={carouselData[currentImageIndex].image}
              alt={`Slide ${currentImageIndex + 1}`}
              className={`carousel-image ${fade ? 'fade' : ''}`}
            />
            <p className="photo-description">{carouselData[currentImageIndex].description}</p>
          </div>
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        <div className="text-container">
          <h2><strong>Hi! I am Valery!</strong></h2>
          <p>I study in Ngee Ann Polytechnic under the CyberSecurity and Digital Forensics Diploma. I own a pet hamster named, Charlie Jason Tan Jun Jie and he is about to turn 1 years old in March 2024. I love to design and is also pursuing for a UX Design PLP. Other than my passion for design, I love to travel as well! I hope one day I will be able to travel around the world and explore the many different places I have yet to discover. I hope you have a wonderful time on our page to learn more about our travel tips and adventures.</p>
          <br></br>
          <p>To more travels endeavours ~</p>
          {/* Social Media Links */}
          <div className="social-media-links">
            <a href="https://www.instagram.com/valerytyj/" target="_blank" rel="noopener noreferrer">
              <img src="instagram icon.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/tan-yi-jing-valery-596968272/" target="_blank" rel="noopener noreferrer">
              <img src="linkedin icon.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/valerytyj" target="_blank" rel="noopener noreferrer">
              <img src="github icon.png" alt="GitHub" className="social-icon" />
            </a>
            {/* Add more social media platforms as needed */}
          </div>
          {/* Learn More Button */}
          <button id="vallearn-more-btn" onClick={handleLearnMoreClick}>
            Click me to learn more on my travels!
          </button>
        </div>
      </div>
    </div>
  );
}

export default ValCarousel;
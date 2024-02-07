"use client";
import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling

// Sample data (replace with your own data)
const carouselData = [
  { id: 1, image: 'yl1.png', description: 'Picture with the bird!' },
  { id: 2, image: 'yl2.png', description: 'Younger me.' },
  { id: 3, image: 'yl3.png', description: 'Selfie 📷' },
];

// Carousel component
function YuetlinCarousel() {

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
          <button className="carousel-btn ylprev-btn" onClick={prevSlide}>
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
          <button className="carousel-btn ylnext-btn" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        <div className="text-container">
          <h2 style={{ color: 'goldenrod' }}><strong>Hi! I am Yuet Lin!</strong></h2>
          <p>Hi! I'm Yuet Lin, a year 1 cybersecurity and digital forensics student. Beyond the digital world, I like to admire the outside world too. I love all sorts of animals, particularly cats and birds. You can often see me gawking at birds and taking pictures of them, especially the chubbier or sillier ones. That aside, I also like attending concerts and, of course, travelling!</p>
          <br></br>
          <p>Follow me on my travelling journey!</p>
          {/* Social Media Links */}
          <div className="social-media-links">
            <a href="https://www.instagram.com/hs22j3/" target="_blank" rel="noopener noreferrer">
              <img src="instagram icon.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/yuet-lin-peh-0b8967272/" target="_blank" rel="noopener noreferrer">
              <img src="linkedin icon.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/123456789pyl" target="_blank" rel="noopener noreferrer">
              <img src="github icon.png" alt="GitHub" className="social-icon" />
            </a>
            {/* Add more social media platforms as needed */}
          </div>
          {/* Learn More Button */}
          <button id="yllearn-more-btn" onClick={handleLearnMoreClick}>
            Click me to learn more on my travels!
          </button>
        </div>
      </div>
    </div>
  );
}

export default YuetlinCarousel;
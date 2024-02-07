"use client";
import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling

// Sample data (replace with your own data)
const carouselData = [
  { id: 1, image: 'maziah1.png', description: 'With the ICT mascot!' },
  { id: 2, image: 'maziah2.png', description: 'Hehehehe' },
  { id: 3, image: 'maziah3.png', description: 'I am angry.' },
  { id: 4, image: 'maziah4.png', description: 'With my sister.' },
  { id: 5, image: 'maziah5.png', description: 'With a friend heheheheh' },
];

// Carousel component
function MaziahCarousel() {

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
          <button className="carousel-btn mazprev-btn" onClick={prevSlide}>
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
          <button className="carousel-btn maznext-btn" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        <div className="text-container">
          <h2 style={{ color: 'lightblue' }}><strong>Hi! I am Maziah!</strong></h2>
          <p>Hey everyone! 🌍✈️ I'm thrilled to welcome you to my travel blog. As an 18-year-old ICT student with a passion for exploring the world, I've decided to combine my love for technology with my wanderlust adventures. Join me as I navigate the globe, sharing insights from both my travels and my experiences as a student in the world of Information and Communication Technology. From coding sessions to capturing breathtaking landscapes, I'll be documenting it all right here. So, buckle up and let's embark on this exciting journey together! 🚀📸</p>
          <br></br>
          <p>To more adventures in the future!</p>
          {/* Social Media Links */}
          <div className="social-media-links">
            <a href="https://www.instagram.com/maz_ffffff/" target="_blank" rel="noopener noreferrer">
              <img src="instagram icon.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/maziah-hamdan-300bb5272/" target="_blank" rel="noopener noreferrer">
              <img src="linkedin icon.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/Maziahh" target="_blank" rel="noopener noreferrer">
              <img src="github icon.png" alt="GitHub" className="social-icon" />
            </a>
            {/* Add more social media platforms as needed */}
          </div>
           {/* Learn More Button */}
           <button id="mazlearn-more-btn" onClick={handleLearnMoreClick}>
            Click me to learn more on my travels!
          </button>
        </div>
      </div>
    </div>
  );
}

export default MaziahCarousel;
//MaziahCarousel.jsx
//valery
"use client";
import React, { useState } from 'react';
import './Carousel.css';

const carouselData = [
    { id: 1, image: 'maziah1.png', description: 'With the ICT mascot!' },
    { id: 2, image: 'maziah2.png', description: 'Hehehehe' },
    { id: 3, image: 'maziah3.png', description: 'I am angry.' },
    { id: 4, image: 'maziah4.png', description: 'With my sister.' },
    { id: 5, image: 'maziah5.png', description: 'With a friend heheheheh' },
];

function MaziahCarousel() {

    const handleLearnMoreClick = () => {
        window.location.href = '/indonesia'; //change page when user click 
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const [fade, setFade] = useState(false); 


    const nextSlide = () => {
        setFade(true); //set to true when user press to the next image, triggering the fade effect
        setTimeout(() => {
            setFade(false);  //after timeout, set it back to false to stop the trigger 
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 500); //500 milliseconds of fade when moving to the next image 
    };

    const prevSlide = () => {
        setFade(true);
        setTimeout(() => {
            setFade(false);
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
            );
        }, 500);
    };

    return (
         //carousel component 
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel" style={{ marginTop: '50px', maxWidth: '400px', marginLeft: '20px' }}>
                     {/* goes to the previous image when user clicks on the left arrow  */}
                    <button className="carousel-btn mazprev-btn" onClick={prevSlide}>
                        &lt;
                    </button>
                    <div className="carousel-content">
                        {/* increment the photo counter by 1 out of the total images  */}
                        <p className="photo-count">{`${currentImageIndex + 1} of ${carouselData.length}`}</p>
                        <img
                            src={carouselData[currentImageIndex].image}
                            alt={`Slide ${currentImageIndex + 1}`}
                            className={`carousel-image ${fade ? 'fade' : ''}`}  //when fade is true, display fade with the image, if false, no fade with the image 
                        />
                         {/* set the caption according to the image  */}
                        <p className="photo-description">{carouselData[currentImageIndex].description}</p>
                    </div>
                    {/* goes to the next image when user clicks on the right arrow  */}
                    <button className="carousel-btn maznext-btn" onClick={nextSlide}>
                        &gt;
                    </button>
                </div>

                  {/* additional component beside the carousel  */}
                <div className="text-container">
                    <h2 style={{ color: 'lightblue' }}><strong>Hi! I am Maziah!</strong></h2>
                    <p>Hey everyone! 🌍✈️ I'm thrilled to welcome you to my travel blog. As an 18-year-old ICT student with a passion for exploring the world, I've decided to combine my love for technology with my wanderlust adventures. Join me as I navigate the globe, sharing insights from both my travels and my experiences as a student in the world of Information and Communication Technology. From coding sessions to capturing breathtaking landscapes, I'll be documenting it all right here. So, buckle up and let's embark on this exciting journey together! 🚀📸</p>
                    <br></br>
                    <p>To more adventures in the future!</p>
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
                    </div>
                     {/* takes user to the specific page after clicking the button  */}
                    <button id="mazlearn-more-btn" onClick={handleLearnMoreClick}>
                        Click me to learn more on my travels!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MaziahCarousel;

//ValCarousel.jsx
//valery
"use client";
import React, { useState } from 'react';
import './Carousel.css';

const carouselData = [
    { id: 1, image: 'val.jpeg', description: 'Picture with my digital camera!' },
    { id: 2, image: 'friends1.jpeg', description: 'With my secondary school friends.' },
    { id: 3, image: 'friends2.jpeg', description: 'With my pfp friends.' },
    { id: 4, image: 'val2.jpeg', description: 'At Mars:The Red Mirror museum.' },
    { id: 5, image: 'friends3.jpeg', description: 'With my secondary school friends.' },
];

function ValCarousel() {

    const handleLearnMoreClick = () => {
        window.location.href = '/china'; //change page when user click 
    }; 

    const [currentImageIndex, setCurrentImageIndex] = useState(0); 

    const [fade, setFade] = useState(false);


    const nextSlide = () => {
        setFade(true); //set to true when user press to the next image, triggering the fade effect
        setTimeout(() => {
            setFade(false); //after timeout, set it back to false to stop the trigger 
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
                    <button className="carousel-btn prev-btn" onClick={prevSlide}> 
                        &lt;
                    </button>
                    <div className="carousel-content">
                        {/* increment the photo counter by 1 out of the total images  */}
                        <p className="photo-count">{`${currentImageIndex + 1} of ${carouselData.length}`}</p>
                        <img
                            src={carouselData[currentImageIndex].image}
                            alt={`Slide ${currentImageIndex + 1}`}
                            className={`carousel-image ${fade ? 'fade' : ''}`} //when fade is true, display fade with the image, if false, no fade with the image 
                        />
                        {/* set the caption according to the image  */}
                        <p className="photo-description">{carouselData[currentImageIndex].description}</p>
                    </div>
                    {/* goes to the next image when user clicks on the right arrow  */}
                    <button className="carousel-btn next-btn" onClick={nextSlide}>
                        &gt;
                    </button>
                </div>

                {/* additional component beside the carousel  */}
                <div className="text-container">
                    <h2><strong>Hi! I am Valery!</strong></h2>
                    <p>I study in Ngee Ann Polytechnic under the CyberSecurity and Digital Forensics Diploma. I own a pet hamster named, Charlie Jason Tan Jun Jie and he is about to turn 1 years old in March 2024. I love to design and is also pursuing for a UX Design PLP. Other than my passion for design, I love to travel as well! I hope one day I will be able to travel around the world and explore the many different places I have yet to discover. I hope you have a wonderful time on our page to learn more about our travel tips and adventures.</p>
                    <br></br>
                    <p>To more travels endeavours ~</p>
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
                    </div>
                    {/* takes user to the specific page after clicking the button  */}
                    <button id="vallearn-more-btn" onClick={handleLearnMoreClick}> 
                        Click me to learn more on my travels!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ValCarousel;

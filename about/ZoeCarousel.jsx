//ZoeCarousel.jsx
//valery
"use client";
import React, { useState } from 'react';
import './Carousel.css';

const carouselData = [
    { id: 1, image: 'zoe1.png', description: 'With a dog.' },
    { id: 2, image: 'zoe2.png', description: 'With my secondary school friend.' },
    { id: 3, image: 'zoe3.png', description: 'With Play-Doh. 🌟' },
];

function ZoeCarousel() {

    const handleLearnMoreClick = () => {
        window.location.href = '/brazil'; //change page when user click 
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
                    <button className="carousel-btn zoeprev-btn" onClick={prevSlide}>
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
                    <button className="carousel-btn zoenext-btn" onClick={nextSlide}>
                        &gt;
                    </button>
                </div>

                {/* additional component beside the carousel  */}
                <div className="text-container">
                    <h2 style={{ color: 'lavender' }}><strong>Hi! I am Zoe!</strong></h2>
                    <p>
                        Hi there! I'm Zoe, a dedicated student diving headfirst into the exciting world of cybersecurity. With a passion for technology and a drive to make a positive impact, I'm constantly exploring the ever-evolving landscape of digital security.
                        When I'm not immersed in my studies, you'll often find me lending a helping hand at the local SPCA. Volunteering there brings me immense joy as I get to combine my love for animals with a sense of purpose in giving back to the community.
                        From dissecting lines of code to cuddling up with furry friends, my days are filled with a balance of technical challenges and heartfelt connections. It's a journey that keeps me motivated and eager to learn more each day.
                    </p>
                    <br></br>
                    <p>Can't wait for future travels!</p>
                    <div className="social-media-links">
                        <a href="https://www.instagram.com/skydancer391/" target="_blank" rel="noopener noreferrer">
                            <img src="instagram icon.png" alt="Instagram" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/zoe-wong-98bbb5272//" target="_blank" rel="noopener noreferrer">
                            <img src="linkedin icon.png" alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://github.com/Zoewewe" target="_blank" rel="noopener noreferrer">
                            <img src="github icon.png" alt="GitHub" className="social-icon" />
                        </a>
                    </div>
                    {/* takes user to the specific page after clicking the button  */}
                    <button id="zoelearn-more-btn" onClick={handleLearnMoreClick}>
                        Click me to learn more on my travels!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ZoeCarousel;

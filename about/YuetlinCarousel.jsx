//YuetlinCarousel.jsx 
//valery
"use client";
import React, { useState } from 'react';
import './Carousel.css';

const carouselData = [
    { id: 1, image: 'yl1.png', description: 'Picture with the bird!' },
    { id: 2, image: 'yl2.png', description: 'Younger me.' },
    { id: 3, image: 'yl3.png', description: 'Selfie 📷' },
];

function YuetlinCarousel() {

    const handleLearnMoreClick = () => {
        window.location.href = '/usa'; //change page when user click 
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
                    <button className="carousel-btn ylprev-btn" onClick={prevSlide}>
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
                    <button className="carousel-btn ylnext-btn" onClick={nextSlide}>
                        &gt;
                    </button>
                </div>

                {/* additional component beside the carousel  */}
                <div className="text-container">
                    <h2 style={{ color: 'goldenrod' }}><strong>Hi! I am Yuet Lin!</strong></h2>
                    <p>Hi! I'm Yuet Lin, a year 1 cybersecurity and digital forensics student. Beyond the digital world, I like to admire the outside world too. I love all sorts of animals, particularly cats and birds. You can often see me gawking at birds and taking pictures of them, especially the chubbier or sillier ones. That aside, I also like attending concerts and, of course, travelling!</p>
                    <br></br>
                    <p>Follow me on my travelling journey!</p>
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
                    </div>
                    {/* takes user to the specific page after clicking the button  */}
                    <button id="yllearn-more-btn" onClick={handleLearnMoreClick}>
                        Click me to learn more on my travels!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default YuetlinCarousel;

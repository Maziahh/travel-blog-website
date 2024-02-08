//page.jsx 
//valery 
import React from 'react';
import AboutTitle from './About';
import ValCarousel from './ValCarousel';
import ZoeCarousel from './ZoeCarousel';
import MaziahCarousel from './MaziahCarousel';
import YuetlinCarousel from './YuetlinCarousel';
import TimeLine from './TimeLine'; 


function App() {
  return (
    <div>
      <AboutTitle />
      <div className="carousel-container">
        <ValCarousel />
        <ZoeCarousel />
        <MaziahCarousel />
        <YuetlinCarousel />
        <TimeLine /> 
      </div>
    </div>
  );
}

export default App;

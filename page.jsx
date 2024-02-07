import React from 'react';
import About from './About';
import ValCarousel from './ValCarousel';
import ZoeCarousel from './ZoeCarousel';
import MaziahCarousel from './MaziahCarousel';
import YuetlinCarousel from './YuetlinCarousel';
import TimeLine from './TimeLine'; 

// Main component
function App() {
  return (
    <div>
      <About />
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

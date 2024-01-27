// description.jsx
import React from 'react';
import CountUp from 'react-countup';

function CountingAnimation() {
  return (
    <div style={{ marginTop: '20px', marginBottom: '100px', padding: '40px', textAlign: 'right', fontSize: '10rem' }}>
      <CountUp end={10} duration={2.5} />
    </div>
  );
}

export default function Description() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', flexDirection: 'column' }}>
      <div style={{ maxWidth: '1300px', padding: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img
          src="/logo.jpg" // replace with the actual path to your image
          alt="Description Image"
          style={{ width: '500px', marginRight: '50px' }} // Adjust the width and margin as needed
        />
        <div style={{ wordSpacing: '5px' }}> {/* Adjust the word spacing as needed */}
          <p style={{ marginBottom: '20px' }}>
            Exploring a new country never gets old – even now I still get nervous when visiting a new destination.
            What will I find there? Who will I meet? What will they think of me? Any journey is always a brand new adventure.
            I love visiting unusual destinations or places not often talked about and expanding my world view and knowledge.
          </p>
          <p>
            But revisiting old haunts has its own allure. How has the place changed since I last visited? How have I evolved since then?
            As my travel style and priorities shift, so have the way I explore and how I see places. I love seeing the star attractions
            that make a destination so popular but also detouring off those tried-and-tested paths to see new faces of familiar places.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}>
        <CountingAnimation />
        <div style={{ marginLeft: '300px' }}>
          <p style={{ wordSpacing: '5px', marginBottom: '20px',fontSize:'2rem' }}>
            HOW MANY COUNTRIES HAVE WE VISITED????
          </p>
        </div>
      </div>
    </div>
  );
}

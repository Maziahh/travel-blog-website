export default function usa() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '50px', marginBottom: '50px' }}><strong>United States of America</strong></h1>
      <div style={{ wordSpacing: '5px' , fontSize:'1rem',textAlign: 'left',maxWidth: '1200px',marginBottom:'80px'}}> 
        <p style={{marginBottom:'20px'}}>
          The United States is a treasure trove of iconic landmarks and unforgettable experiences. 
        </p>
        <p style={{marginBottom:'20px'}}>
          From the breathtaking beauty of the Grand Canyon to the majestic marvel that is the Golden Gate Bridge, and the whimsical wonderland of Disneyland, there's something for every traveler in this vast and diverse country.
        </p>
        <p>
          Join us on a journey across the vast expanse of this beautiful country as we embark on a whirlwind adventure to three of its most celebrated destinations.
        </p>
      </div>

      <h2 style={{marginBottom:"50px", textAlign:"center",fontSize:"1.5rem"}}>
        <strong>Grand Canyon: Nature's Masterpiece</strong>
      </h2>

      <div style={{ wordSpacing: '5px' , fontSize:'1rem',textAlign: 'left',maxWidth: '1200px',}}> 
        <p style={{ marginBottom: '20px' }}>
          Our journey begins in  the awe-inspiring Grand Canyon. We journey across vast desert landscapes, anticipation building with every mile traveled. 
          And then, suddenly, it appears before us in all its grandeur – a colossal chasm carved by the forces of nature over millions of years.        </p>
        <p style={{ marginBottom: '50px' }}>
        We stand at the canyon's edge, gazing out over the sheer cliffs and rugged terrain that stretch as far as the eye can see. The colors of the canyon walls shift and change with the passing clouds, creating a mesmerizing display of light and shadow. 
        The glimmering blue waters of the Horseshoe Bend had kept us in an entranced state as we admired its beauty. It's a humbling experience, reminding us of the immense power and beauty of the natural world.      </p>
      </div>

      <img src= "/grand-canyon-horseshoe.jpg" style={{width:'1200px', marginBottom:'80px'}}/> 

      <h2 style={{marginBottom:"50px", textAlign:"center",fontSize:"1.5rem"}}>
        <strong>Golden Gate Bridge: Where Engineering Meets Beauty</strong>
      </h2>

      <div style={{wordSpacing: '5px' , fontSize:'1rem',textAlign: 'left',maxWidth: '1200px',marginBottom:'50px'}}>
        <p style={{marginBottom:"20px"}}>
        Next stop on our adventure: the vibrant city of San Francisco, where the majestic Golden Gate Bridge stands as a symbol of innovation and architectural brilliance. As we approach the bridge, its crimson towers rise proudly against the backdrop of the shimmering bay waters, creating a breathtaking sight that leaves us in awe.
        </p>
        <p style={{marginBottom:"20px"}}>
        We stroll along the pedestrian walkway, feeling the gentle ocean breeze caress our faces as we marvel at the intricate details of the bridge's design. With each step, we're reminded of the ingenuity and perseverance it took to construct this marvel of modern engineering. And as the sun begins to set, casting a golden glow upon the bridge, we realize that some sights are simply timeless.
        </p>
      </div>
      <img src= "/san-francisco-golden-gate-bridge.jpg" style={{width:'1200px', marginBottom:'80px'}}></img>
      {/* marginBottom:"50px",justifyContent:"center" */}

      <h2 style={{marginBottom:"50px", textAlign:"center",fontSize:"1.5rem"}}>
        <strong>Disney Land: Where Dreams Come True</strong>
      </h2>

      <div style={{wordSpacing: '5px' , fontSize:'1rem',textAlign: 'left',maxWidth: '1200px',marginBottom:'50px'}}>
        <p style={{marginBottom:"20px"}}>
        Our final destination brings us to the magical kingdom of Disney Land, where fantasy and reality intertwine to create an enchanting experience for visitors of all ages. We wander through the bustling streets of Main Street, U.S.A., marveling at the whimsical architecture and cheerful atmosphere that surrounds us.        </p>
        <p style={{marginBottom:"20px"}}>
        From thrilling rides to beloved characters, every corner of Disney Land holds a new adventure waiting to be discovered. We soar through the skies on Space Mountain, journey to far-off lands in Pirates of the Caribbean, and share laughs with Mickey and friends in a heartwarming parade.
        </p>

        <img src= "/Disneyland-Los-Angeles.jpg" style={{width:'1200px', marginBottom:'80px'}}></img>

        <p style={{marginBottom:"20px"}}>
        But amidst all the excitement, there's also a sense of nostalgia and wonder – a reminder that no matter how old we grow, there's always room for a little magic in our lives.
        </p>
      </div>
      
      <h2 style={{textAlign:"center",fontSize:"2rem",marginBottom:'80px'}}> 
        <strong> All good things must come to an end </strong>
      </h2>

      <div style={{wordSpacing: '5px' , fontSize:'1rem',textAlign: 'left',maxWidth: '1200px',marginBottom:'50px'}}>
        <p style={{marginBottom:"20px"}}>
        As our journey comes to an end, we reflect on the incredible memories we've made and the countless wonders we've encountered along the way. From the majestic depths of the Grand Canyon to the towering heights of the Golden Gate Bridge, and the enchanting world of Disney Land, each destination has left an indelible mark on our hearts.        </p>
        <p style={{marginBottom:"20px"}}>
        But even as we bid farewell to these iconic landmarks, we carry with us the spirit of adventure and discovery that defines the American experience. And so, until our next adventure beckons, we raise a toast to the endless possibilities that await us on the open road. Cheers to the journey, and may it always lead us to new horizons.
        </p>
        <p style={{marginBottom:"20px"}}>
        If I am ever asked to recommend a country to visit, it'd definitely be the United States of America for the positive experiences that has deeply engraved its mark in me.
        </p>
      </div>

      <h1 style={{fontSize:'2rem'}}>
        <strong>Weather in USA</strong>
      </h1>
    </div>
    </>
  );
}

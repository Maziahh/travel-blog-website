"use client"
import './imageButton.css';

const openIndonesia = () => {
  window.open('/indonesia');
};

const openUSA = () => {
  window.open('/usa');
};

const openBrazil = () => {
  window.open('/brazil');
};

const DisplayText = () => {
  return (
    <div className="area">
      <h1 className="header">Explore with your pals!</h1>
      <p className="text">Scroll down and explore your next destination</p>
    </div>
  )
}

const Countries = () => {
  return (
    <div className="picture-container">
      <div className="picture-item" onClick={openIndonesia}>
        <img src="pic1.jpg" alt="Picture 1" />
        <span className="picture-label">INDONESIA UNLEASHED: EXPLORING THE ARCHIPELAGO</span>
      </div>
      <div className="picture-item" onClick={openUSA}>
        <img src="pic2.jpg" alt="Picture 2" />
        <span className="picture-label">EXPLORE THE WONDERLAND, CALIFORNIA</span>
      </div>
      <div className="picture-item" onClick={openBrazil}>
        <img src="brazil-main.jpg" alt="Picture 3" />
        <span className="picture-label">DISCOVERING BRAZIL: A JOURNEY THROUGH SAMBA, SUN, AND AMAZON RAINFORESTS</span>
      </div>
    </div>
  )
}

const DisplayYoutube = () => {
  return (
    <div className="video-container">
      <h1 className="header">Travel Blogs!</h1>
      <iframe
        src="https://www.youtube.com/embed/TONiWQGXQ6o"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

const imageButton = () => {
  return (
    //header and text
    <section className="picture-section">
      <DisplayText />
      <Countries />
      <DisplayYoutube />
    </section>
  );
};

export default imageButton;

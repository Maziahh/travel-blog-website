//to export the slide show :D
import Slideshow from './slideshow';
import './globals.css'
import FirstSection from './1stSection';

export default function homePage({ children }) {
  return (
    <html lang="en">
      <body >
        <Slideshow />
        <FirstSection />
        {children}
      </body>
    </html>
  );
}
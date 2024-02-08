//to export the slide show :D
import Slideshow from './slideshow';
import ImageButton from './imageButton';

export default function homePage({ children }) {
  return (
    <html lang="en">
      <body >
        <Slideshow />
        <ImageButton />
        {children}
      </body>
    </html>
  );
}

// layout.jsx
import { Inter } from 'next/font/google' // Importing the Inter font from Google Fonts using Next.js's font module
import Comment from './commentsection' // Importing the Comment component from the local file './commentsection'

const inter = Inter({ subsets: ['latin'] }); // Initializing the Inter font with a subset of 'latin'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} {/* render children component */}
        <Comment/> {/* render comment component */}
      </body>
    </html>
  );
}

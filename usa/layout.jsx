// Yuet Lin
// layout.jsx
import { Inter } from 'next/font/google'
import Comment from './commentsection' // Importing the Comment component from the local file './commentsection'

const inter = Inter({ subsets: ['latin'] }); 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} {/* Render children component */}
        <Comment/> {/* Render comment component */}
      </body>
    </html>
  );
}

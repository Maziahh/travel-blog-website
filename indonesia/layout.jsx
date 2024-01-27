
// layout.jsx
import { Inter } from 'next/font/google'
import Comment from './commentsection'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Comment/>
      </body>
    </html>
  );
}

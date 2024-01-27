// layout.jsx
"use client"; // Make sure this is the first line in the file
import React from 'react';
import { Inter } from 'next/font/google';
import "./styles.css";
import Map from './Map';
import Description from './description';
import Tabs from './tabs';


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout-container">
          {children}
          <Map />
          <Description />
          <Tabs/>
        </div>
      </body>
    </html>
  );
}

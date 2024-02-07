"use client"
//to export the slide show :D
import Weather from './weather';

export default function homePage({ children }) {
    return (
        <html lang="en">
            <body >
                <Weather />
                {children}
            </body>
        </html>
    );
}
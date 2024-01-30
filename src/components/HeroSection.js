import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import './HeroSection.css'; // Assuming you have a CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <StaticImage
        src="../images/hero-image.jpg" // replace with your hero image path
        loading="eager"
        height={300} // adjust as needed
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Hero Image"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default HeroSection;
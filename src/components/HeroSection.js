import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import './HeroSection.css'; // Assuming you have a CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <StaticImage
        src="../images/bierwagen-blurred-bg.png"
        loading="eager"
        height={500}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Kopfbild"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default HeroSection;
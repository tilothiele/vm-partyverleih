import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import './ImageCarousel.css'; // Assuming you have a CSS file for styling

const ImageCarousel = () => {
  return (
    <div className="carousel">
      <StaticImage
        src="../images/caroussel/image-1.jpg" // replace with your image path
        alt="Image 1"
        style={{ width: '100%', height: '100%' }}
      />
      <StaticImage
        src="../images/caroussel/image-2.jpg" // replace with your image path
        alt="Image 2"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ImageCarousel;
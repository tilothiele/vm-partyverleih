import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import './ImageCarousel.css';

const ImageCarousel = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {in: ["wagen-1", "wagen-2", "wagen-3", "wagen-4"]}}) {
        nodes {
          name
          relativeDirectory
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, height: 500)
          }
        }
      }
    }
  `);

    // Sort images by directory and then by name to maintain order
    const images = data.allFile.nodes
        .filter(node => node.childImageSharp)
        .sort((a, b) => {
            const dirA = a.relativeDirectory;
            const dirB = b.relativeDirectory;
            if (dirA !== dirB) return dirA.localeCompare(dirB, undefined, { numeric: true });
            return a.name.localeCompare(b.name, undefined, { numeric: true });
        });

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    if (images.length === 0) {
        return null;
    }

    return (
        <div className="carousel-container">
            <div className="carousel-inner">
                {images.map((node, index) => (
                    <div
                        key={node.name}
                        className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    >
                        <GatsbyImage
                            image={getImage(node)}
                            alt={`Bierwagen Image ${index + 1}`}
                            objectFit="contain"
                        />
                    </div>
                ))}
            </div>

            <button className="carousel-control prev" onClick={goToPrev} aria-label="Vorheriges Bild">&#10094;</button>
            <button className="carousel-control next" onClick={goToNext} aria-label="Nächstes Bild">&#10095;</button>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Gehe zu Bild ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;

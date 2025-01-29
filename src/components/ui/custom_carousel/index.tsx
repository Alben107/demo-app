import React, { useState } from "react";
import "../styles.scss";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface CustomCarouselProps {
  images: string[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <img
          src={images[currentIndex]}
          alt={`carousel slide ${currentIndex}`}
          className="carousel-image"
        />
        <div className="carousel-controls">
          <IconButton className="carousel-arrow left" onClick={goToPrevious}>
            <ArrowBack />
          </IconButton>
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={
                  currentIndex === index ? "indicator active" : "indicator"
                }
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <IconButton className="carousel-arrow right" onClick={goToNext}>
            <ArrowForward />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;

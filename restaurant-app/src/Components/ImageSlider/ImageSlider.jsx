import React, { useEffect, useState } from "react";
import styles from "./imageslider.module.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const gotoPrevImage = (e) => {
    e.preventDefault();
    let isFirstSlide = currentIndex === 0;
    let nextSlide = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(nextSlide);
  };

  const gotoNextImage = (e) => {
    e.preventDefault();
    let isLastSlide = currentIndex === images.length - 1;
    let nextSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextSlide);
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className={styles.image}
      >
        <div className={styles.buttonContaier}>
          <button className={styles.button} onClick={gotoPrevImage}>
            {" "}
            &#10094;
          </button>
          <button className={styles.button} onClick={gotoNextImage}>
            {" "}
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

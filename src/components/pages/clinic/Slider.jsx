import React, { useState, useEffect } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const url="https://iili.io/JcxKDMJ.md.jpg"
    // const url="https://cdn.builder.io/api/v1/image/assets/TEMP/c02c42a1b434ac52290b72a2d68f96f0113c596b28815c15ab9561db4aee5bf7?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02c42a1b434ac52290b72a2d68f96f0113c596b28815c15ab9561db4aee5bf7?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02c42a1b434ac52290b72a2d68f96f0113c596b28815c15ab9561db4aee5bf7?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02c42a1b434ac52290b72a2d68f96f0113c596b28815c15ab9561db4aee5bf7?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02c42a1b434ac52290b72a2d68f96f0113c596b28815c15ab9561db4aee5bf7?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02c42a1b434ac52290b72a2d68f96f0113c596b28815c15ab9561db4aee5bf7?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02c42a1b434ac52290b72a2d68f96f0113c596b28815c15ab9561db4aee5bf7?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02c42a1b434ac52290b72a2d68f96f0113c596b28815c15ab9561db4aee5bf7?apiKey=22a36eade5734692978208fb0d2f5c62&"
const images=[url,url, url]
useEffect(() => {
    // const interval = setInterval(() => {
    //   nextSlide();
    // }, 3000); // Change slide every 3 seconds

    // return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slideshow-container relative max-w-4xl mx-auto overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides fade ${currentSlide === index ? 'block' : 'hidden'}`}
        >
          <div className="numbertext text-white text-xs bg-gray-800 bg-opacity-50 p-1 absolute top-0 left-0">
            {index + 1} / {images.length}
          </div>
          <img src={image} className="w-[800px]" alt={`Slide ${index + 1}`} />
        </div>
      ))}

      <button className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 ml-2  rounded-full focus:outline-none" onClick={prevSlide}>
        ❮
      </button>
      <button className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 mr-2  rounded-full focus:outline-none" onClick={nextSlide}>
        ❯
      </button>

      <div className="dot-container text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot inline-block w-2 h-2 mx-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;

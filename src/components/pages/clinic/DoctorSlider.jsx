"use client";
import React, { useEffect, useState } from "react";
import DoctorProfileCard from "./DoctorProfileCard";

const DoctorSlider = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const cards = [1, 2, 3, 4, 5, 6];
  const [cardsToShow, setCardsToShow] = useState([]);

  const nextSlide = () => {
    setCurrentPosition((prevPosition) =>
      prevPosition + 1 <= cards.length - 3 ? prevPosition + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentPosition((prevPosition) =>
      prevPosition === 0 ? cards.length - 3 : prevPosition - 1
    );
  };
  useEffect(() => {
    setCardsToShow(cards.slice(currentPosition, currentPosition + 3));
  }, [currentPosition]);
  return (
    <div className="slideshow-container flex justify-between relative max-w-4xl mx-auto overflow-hidden">
      {cardsToShow.map((image, index) => (
        <DoctorProfileCard key={"doctor" + index} />
      ))}

      <button
        className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 ml-2  rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 mr-2  rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default DoctorSlider;

"use clinet";
import React, { useState } from "react";
import Slider from "./Slider";

const GallaryBox = ({ photoArray = [] }) => {
  const gridData = [0, 1, 2, 3, 4, 5, 6, 7];
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-[100%] m-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
      {gridData.map((item, index) => (
        <div
          key={"itemm" + item}
          className="flex flex-col relative items-stretch 2 max-md:w-full max-md:ml-0 group overflow-hidden  bg-black bg-opacity-50 z-40"
        >
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7c646ea30e3844702c2ab9ed407682c8eb61f40ba6477b9e9cc92a6140557cd1?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c646ea30e3844702c2ab9ed407682c8eb61f40ba6477b9e9cc92a6140557cd1?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c646ea30e3844702c2ab9ed407682c8eb61f40ba6477b9e9cc92a6140557cd1?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c646ea30e3844702c2ab9ed407682c8eb61f40ba6477b9e9cc92a6140557cd1?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c646ea30e3844702c2ab9ed407682c8eb61f40ba6477b9e9cc92a6140557cd1?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c646ea30e3844702c2ab9ed407682c8eb61f40ba6477b9e9cc92a6140557cd1?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c646ea30e3844702c2ab9ed407682c8eb61f40ba6477b9e9cc92a6140557cd1?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c646ea30e3844702c2ab9ed407682c8eb61f40ba6477b9e9cc92a6140557cd1?apiKey=22a36eade5734692978208fb0d2f5c62&"
            className={`aspect-square ${
              index == 7 && `inset-0 bg-white opacity-25`
            } object-contain object-center w-[245px] overflow-hidden shrink-0 max-w-full max-md:mt-5  h-auto transform transition-transform group-hover:scale-110`}
          />
          {index == 7 && (
            <div
              onClick={openPopup}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center"
            >
              <p className="text-lg font-custom-open-sans text-white ">View more</p>
            </div>
          )}
        </div>
      ))}

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className=" pt-10 rounded shadow-md relative group">
            <span
              className="absolute top-1 right-1 text-white cursor-pointer text-4xl transition-transform transform hover:scale-150"
              onClick={closePopup}
            >
              &times;
            </span>
            {/* Your popup content goes here */}
            {/* <h2 className="text-2xl mb-4">This is a Popup</h2> */}
            {/* Your popup content goes here */}
            <Slider />
          </div>
        </div>
      )}
    </div>
  );
};

export default GallaryBox;

import React, { useEffect, useState } from "react";
import DoctorProfileCard from "./DoctorProfileCard";
import DoctorService from "@/services/Doctor.Service";

const DoctorSlider = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [doctors, setDoctors] = useState([]);

  const getAllDoctors = () => {
    DoctorService.getAllDotors()
      .then((response) => {
        if (response.data.status) {
          setDoctors(response.data.data);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  const nextSlide = () => {
    setCurrentPosition((prevPosition) => {
      return prevPosition + 1 >= doctors.length ? 0 : prevPosition + 1;
    });
  };

  const prevSlide = () => {
    setCurrentPosition((prevPosition) => {
      return prevPosition === 0 ? doctors.length - 1 : prevPosition - 1;
    });
  };

  return (
    <div className="slideshow-container w-full flex justify-between relative overflow-hidden">
      <div
        className="slide-wrapper flex mx-auto"
        style={{
          transform: `translateX(-${
            currentPosition * (100 / doctors.length)
          }%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {doctors.map((doctor, index) => (
          <div key={index} className="mx-2">
            <DoctorProfileCard {...doctor} />
          </div>
        ))}
      </div>

      <button
        className="prev absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 ml-2 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        <svg
          width="22"
          height="47"
          viewBox="0 0 22 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 44L3 23L19.5 3"
            stroke="#5281A2"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        className="next absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 mr-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        <svg
          width="22"
          height="47"
          viewBox="0 0 22 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3L19.5 24L3 44"
            stroke="#5281A2"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default DoctorSlider;

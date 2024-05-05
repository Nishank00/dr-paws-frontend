"use client";
import React, { useEffect, useState } from "react";
import DoctorProfileCard from "./DoctorProfileCard";
import DoctorService from "@/services/Doctor.Service"

const DoctorSlider = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [doctors, setDoctors] = useState([]);

  const getAllDoctors = () => {
    DoctorService.getAllDotors().then((response) => {
      if (response.data.status) {
        setDoctors(response.data.data);
      } else {
        alert(response.data.message);
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  const nextSlide = () => {
    setCurrentPosition((prevPosition) => {
      if (prevPosition + 1 < doctors.length) {
        return prevPosition + 1;
      } else {
        return 0;
      }
    });
  };

  const prevSlide = () => {
    setCurrentPosition((prevPosition) => {
      if (prevPosition === 0) {
        return doctors.length - 1;
      } else {
        return prevPosition - 1;
      }
    });
  };

  return (
    <div className="slideshow-container flex justify-between relative max-w-4xl mx-auto overflow-hidden">
      <div
        className="slide-wrapper flex ml-20"
        style={{
          transform: `translateX(-${currentPosition * (100 / doctors.length)}%)`,
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
        className="prev absolute top-1/2 left-0 transform -translate-y-1/2 text-[#5281A2] px-4 py-2 text-6xl font-light ml-2 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="next absolute top-1/2 right-0 transform -translate-y-1/2 text-[#5281A2] px-4 py-2 text-6xl font-light mr-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default DoctorSlider;

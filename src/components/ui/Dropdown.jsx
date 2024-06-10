import Image from "next/image";
import React, { useState } from "react";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
   

  };
  
  return (
    <div className="w-full mx-auto border-gray-300 px-5 md:px-10 rounded-lg border bg-primary3 my-1 ">
      <div className="">
        <div
          className="flex justify-between items-center py-4 cursor-pointer"
          onClick={toggleDropdown}
          
        >
          <h2 className=" font-custome-inter  text-sm font-bold text-primary">{title}</h2>
          {/* <svg
            className={`w-6 h-6  ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
            />
          </svg> */}
          <Image
            className={`w-4 h-2  ${isOpen ? "transform rotate-180" : ""} ml-1`}
            src="dropdown.svg"
            alt=""
            width={15}
            height={15}
          />
        </div>
        {isOpen && (
          <div className="py-2  md:pr-20 border-gray-300">{children}</div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

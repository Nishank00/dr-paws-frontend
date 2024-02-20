import Image from "next/image";
import React, { useState } from "react";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full  mx-auto border-b border-gray-300  px-10 rounded-lg  ">
      <div className="">
        <div
          className="flex justify-between items-center py-4 cursor-pointer"
          onClick={toggleDropdown}
        >
          <h2 className="text-md font-bold text-primary">{title}</h2>
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
            className={`w-6 h-6  ${isOpen ? "transform rotate-180" : ""} ml-1`}
            src="dropdown.svg"
            alt=""
            width={20}
            height={20}
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

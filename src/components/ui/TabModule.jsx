import React, { useState } from 'react'

const TabModule = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full  mx-auto border-b border-gray-300  px-10 rounded-lg  ">
      <div className="">
        <div className="flex justify-between items-center py-4 cursor-pointer" onClick={toggleDropdown}>
          <button
            onClick={toggleDropdown}
            className={`tab-button text-white text-lg font-bold capitalize whitespace-nowrap justify-center border-l-[color:var(--Primary-1,#33495F)] bg-[#5281a2] pl-7 pr-16 py-5 border-l-[5px] border-solid items-start max-md:px-5`}
          >
            Planned Check-Ups
            <svg
              className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
              />
            </svg>
          </button>

        </div>
        {isOpen && (
          <div className="py-2  pr-20 border-gray-300">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default TabModule
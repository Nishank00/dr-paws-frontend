import React from "react";

const Service = ({ label, isChecked = false, onChange }) => {
  return (
    <div className="w-full">
      <label
        onClick={onChange}
        className="flex items-center justify-between cursor-pointer"
      >
        {label}
        <div
          className={`flex items-center justify-center ml-2 h-8 w-8 rounded border-0 ${
            isChecked ? "bg-secondary" : "bg-white"
          }`}
        >
          {isChecked ? (
            <svg
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8L7.66667 14L19 2"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            ""
          )}
        </div>
      </label>
    </div>
  );
};

export default Service;

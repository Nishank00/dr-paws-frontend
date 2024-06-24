"use client";
import React, { useState, useRef, useEffect } from "react";

const Select = ({
  options = [],
  placeholder = "Select an option",
  label,
  optionLabel,
  optionValue,
  onSelect,
  returnObject = false,
  selectedValue,
  error = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    options.find((option) => option[optionValue] === selectedValue) || null
  );
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(returnObject ? option : option[optionValue]);
    }
  };

  return (
    <div className="mb-4 relative" ref={selectRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div
        className={`bg-white text-primary mt-1 p-2 border ${
          error ? "border-red-600" : "border-secondary"
        } rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 h-12 relative cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center h-full">
          <span>{selected ? selected[optionLabel] : placeholder}</span>
          <span>&#9662;</span>
        </div>
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-1 bg-white max-h-[200px] overflow-y-scroll rounded-md w-full shadow-lg border border-secondary">
          {options.map((option) => (
            <li
              key={option[optionValue]}
              className={`p-2 cursor-pointer ${
                selected && selected[optionValue] === option[optionValue]
                  ? "bg-accent text-white"
                  : "hover:text-white hover:bg-accent"
              }`}
              onClick={() => handleSelect(option)}
            >
              {option[optionLabel]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;

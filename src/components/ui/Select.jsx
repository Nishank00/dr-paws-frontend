"use client";
import React, { useState } from "react";

const Select = ({
  options = [],
  placeholder,
  label,
  optionLabel,
  optionValue,
  onSelect,
  returnObject = false,
  selectedValue,
}) => {
  const handleSelect = (e) => {
    const selected = returnObject
      ? options.find((option) => option[optionValue] === e.target.value)
      : e.target.value;

    onSelect ? onSelect(selected) : null;
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        className="bg-white text-primary mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 h-12"
        onChange={handleSelect}
        value={selectedValue}
      >
        <option value="">{placeholder || "Select an option"}</option>
        {options.map((option) => (
          <option
            className=""
            key={option[optionValue]}
            value={option[optionValue]}
          >
            {option[optionLabel]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

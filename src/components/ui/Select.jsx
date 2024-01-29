import React, { useState } from "react";

const Select = ({ options = [], placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="mb-4">
      <select
        placeholder={placeholder}
        className="bg-white text-primary mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="0">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

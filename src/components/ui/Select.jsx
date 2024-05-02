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
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (e) => {
    setSelectedOptions(returnObject ? options[e.target.value] : e.target.value);

    onSelect
      ? onSelect(returnObject ? options[e.target.value] : e.target.value)
      : null;
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
        value={selectedValue || selectedOptions}
      >
        {<option value="">{placeholder || "Select an option"}</option>}
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

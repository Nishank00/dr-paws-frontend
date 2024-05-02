import React, { useState } from "react";

const MultipleSelect = ({
  options = [],
  placeholder,
  isMulti = false,
  label,
  optionLabel,
  optionValue,
  onSelect,
  returnObject = false,
  selectedValue,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (e) => {
    const selectedValue = e.target.value;

    if (isMulti) {
      if (selectedOptions.includes(selectedValue)) {
        // If already selected, remove it
        setSelectedOptions((prevSelectedOptions) =>
          prevSelectedOptions.filter((option) =>
            returnObject
              ? option[optionValue] !== selectedValue
              : returnObject !== selectedValue
          )
        );
      } else {
        // If not selected, add it
        setSelectedOptions((prevSelectedOptions) => [
          ...prevSelectedOptions,
          returnObject ? options[selectedValue] : selectedValue,
        ]);
      }
      onSelect(selectedOptions);
    } else {
      setSelectedOptions(returnObject ? options[selectedValue] : selectedValue);
      onSelect(returnObject ? options[selectedValue] : selectedValue);
    }
  };

  return (
    <div className="mb-4 sm:mb-0 w-full">
      {label && (
        <label className="block text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <select
        multiple={isMulti}
        className="bg-white text-primary mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 h-12"
        onChange={handleSelect}
      >
        {<option value="">{placeholder || "Select an option"}</option>}
        {options.map((option) => (
          <option
            key={option[optionValue]}
            value={option[optionValue]}
            selected={selectedValue == option[optionValue]}
          >
            {option[optionLabel]}
          </option>
        ))}
      </select>
      {isMulti && (
        <div className="mt-2">
          <span className="font-semibold">Selected:</span>{" "}
          {selectedOptions.map((option, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 ml-1 rounded">
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultipleSelect;

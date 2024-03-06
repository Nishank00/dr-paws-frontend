import React from "react";

const RadioButtonGroup = ({
  options = [],
  selectedOption = null,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2 space-y-2">
      {options?.map((option) => (
        <label key={option.id} className="inline-flex items-center w-full">
          <input
            type="radio"
            name="group"
            value={option.id}
            checked={selectedOption?.id === option.id}
            onChange={() => onChange(option)}
            className="form-radio h-4 w-4 text-primary border-gray-300 focus:ring-primary"
          />
          <span className="ml-2 text-primary">{option.name}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;

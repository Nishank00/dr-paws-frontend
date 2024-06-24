import React from "react";

const TextInput = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  name,
  classes = "",
  readonly = false,
  max,
  error = false,
}) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="mb-4 sm:mb-0 w-full">
      {label && (
        <label className="block text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        readOnly={readonly}
        className={
          `text-primary p-4 border ${
            error ? "border-red-600" : "border-secondary"
          }   mt-1 rounded-md w-full focus:outline-none h-12 ` + classes
        }
        min={0}
        maxLength={max}
      />
    </div>
  );
};

export default TextInput;

import React from "react";

const TextInput = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  name,
  classes = "",
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
        className={
          "text-primary mt-1 p-4 border border-secondary rounded-md w-full focus:outline-none focus:ring h-12 " +
          classes
        }
      />
    </div>
  );
};

export default TextInput;

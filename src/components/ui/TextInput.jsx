import React from "react";

const TextInput = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  name,
}) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        className="text-primary mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default TextInput;

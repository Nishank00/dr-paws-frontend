import React from "react";

const TextInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-primary mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default TextInput;

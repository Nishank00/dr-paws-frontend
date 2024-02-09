import React from "react";

const Textarea = ({ label, placeholder, value, onChange, name, rows = 3 }) => {
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
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
        rows={rows}
        className="text-primary mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default Textarea;

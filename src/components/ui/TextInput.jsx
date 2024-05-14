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
          "text-primary mt-1 p-4 border border-secondary rounded-md w-full focus:outline-none focus:ring h-12 " +
          classes
        }
        min={0}
        max={max}
      />
    </div>
  );
};

export default TextInput;

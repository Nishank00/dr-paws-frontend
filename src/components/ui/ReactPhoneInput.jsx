import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ReactPhoneInput = ({
  label = "",
  placeholder = "",
  value,
  onChange = () => {},
}) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <PhoneInput
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        defaultCountry="IN"
        className="text-primary mt-1 p-4 border border-secondary rounded-md w-full focus:outline-none focus:ring h-12 bg-white phone"
      />
    </div>
  );
};

export default ReactPhoneInput;

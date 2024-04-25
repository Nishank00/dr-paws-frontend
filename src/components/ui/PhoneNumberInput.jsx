import React from "react";

const PhoneNumberInput = ({
  label,
  placeholder,
  countryCode,
  phoneNumber,
  onCountryCodeChange = () => {},
  onPhoneNumberChange = () => {},
  name,
}) => {
  const handleCountryCodeChange = (e) => {
    const countryCode = e.target.value;
    onCountryCodeChange(countryCode);
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    onPhoneNumberChange(phoneNumber);
  };

  return (
    <>
      {label && (
        <label className="block text-sm font-medium text-primary mr-2">
          {label}
        </label>
      )}
      <div className="flex items-center justify-between gap-1 mb-4 sm:mb-0 w-full">
        <div className="flex items-center w-20">
          <select
            value={countryCode}
            onChange={handleCountryCodeChange}
            className="text-primary p-1 border border-secondary rounded-l-md focus:outline-none focus:ring h-12 bg-white w-full"
          >
            <option value="+91">+91</option>
          </select>
        </div>
        <input
          placeholder={placeholder}
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          name={name}
          className="text-primary p-4 border border-secondary rounded-r-md w-full focus:outline-none focus:ring h-12"
          maxLength={10}
        />
      </div>
    </>
  );
};

export default PhoneNumberInput;

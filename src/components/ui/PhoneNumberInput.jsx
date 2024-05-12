import React from "react";

const PhoneNumberInput = ({
  label,
  placeholder,
  countryCode,
  phoneNumber,
  onCountryCodeChange = () => {},
  onPhoneNumberChange = () => {},
  name,
  classes = "",
}) => {
  const handleCountryCodeChange = (e) => {
    const countryCode = e.target.value;
    onCountryCodeChange(countryCode);
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    if (phoneNumber.length > 10) return;
    onPhoneNumberChange(phoneNumber);
  };

  return (
    <div className="flex flex-col mb-4 sm:mb-0 w-full">
      {label && (
        <label className="block text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <div
        className={
          "flex items-center justify-between gap-1 mt-1 w-full " + classes
        }
      >
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
    </div>
  );
};

export default PhoneNumberInput;

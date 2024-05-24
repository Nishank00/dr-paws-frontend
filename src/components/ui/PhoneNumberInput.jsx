
// import React from "react";

// const PhoneNumberInput = ({
//   label,
//   placeholder,
//   countryCode,
//   phoneNumber,
//   onCountryCodeChange = () => {},
//   onPhoneNumberChange = () => {},
//   name,
//   classes = "",
// }) => {
//   const handleCountryCodeChange = (e) => {
//     const countryCode = e.target.value;
//     onCountryCodeChange(countryCode);
//   };

//   const handlePhoneNumberChange = (e) => {
//     const phoneNumber = e.target.value;
//     if (phoneNumber.length > 10) return;
//     onPhoneNumberChange(phoneNumber);
//   };

//   return (
//     <div className="flex flex-col mb-4 sm:mb-0 w-full">
//       {label && (
//         <label className="block text-sm font-medium text-primary">
//           {label}
//         </label>
//       )}
//       <div
//         className={
//           "flex items-center justify-between gap-1 mt-1 w-full " + classes
//         }
//       >
//         <div className="flex items-center w-20">
//           <select
//             value={countryCode}
//             onChange={handleCountryCodeChange}
//             className="text-primary p-1 border border-secondary rounded-l-md focus:outline-none focus:ring h-12 bg-white w-full"
//           >
//             <option value="+91">+91</option>
//           </select>
//         </div>
//         <input
//           placeholder={placeholder}
//           type="tel"
//           value={phoneNumber}
//           onChange={handlePhoneNumberChange}
//           name={name}
//           className="text-primary p-4 border border-secondary rounded-r-md w-full focus:outline-none focus:ring h-12"
//           maxLength={10}
//         />
//       </div>
//     </div>
//   );
// };

// export default PhoneNumberInput;

import React from "react";
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { parsePhoneNumberFromString } from 'libphonenumber-js';


const PhoneNumberInput = ({
  label,
  value,
  onPhoneNumberChange,
  placeholder = "Enter phone number",
  classes = "",
}) => {


  const handleChange = (value) => {
    console.log(value); // Full phone number with country code

    // Check if the phone number is valid
    if (value && isValidPhoneNumber(value)) {
      const phoneNumber = parsePhoneNumberFromString(value);
      if (phoneNumber) {
        let phone = phoneNumber.formatNational().trim();
        console.log(phone.trim()); // Logs the national format (without country code)
//REMOVE extra 0 from  the start of phone number 
if(phone.startsWith('0')){
  phone = phone.slice(1);
  console.log(phone);
  onPhoneNumberChange(phone);
}
        
        onPhoneNumberChange(phoneNumber.nationalNumber); // Stores just the national number (without country code)
      }
    } else {
      // If value is empty, invalid, or not a valid phone number
      onPhoneNumberChange('');
    }
  };



  return (
    <div className={`flex flex-col mb-4 sm:mb-0 w-full ${classes}`}>
      {label && (
        <label className="block text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="text-primary p-1 border border-secondary rounded-md focus:outline-none focus:ring h-12 bg-white w-full"
      />
    </div>
  );
};

export default PhoneNumberInput;
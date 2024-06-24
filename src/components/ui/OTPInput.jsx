import { useState, useRef, useEffect } from "react";

const OTPInput = ({ onOTPEntered }) => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOTPChange = (index, value) => {
    if (!isNaN(value) && value !== "") {
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);
      // Move to the next input field if available
      if (index < 3 && value !== "") {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace") {
      // Prevent the default behavior of the backspace key
      e.preventDefault();
      const updatedOTP = [...otp];
      updatedOTP[index] = "";
      setOTP(updatedOTP);
      inputRefs[index > 0 ? index - 1 : index].current.focus();
    }
  };

  useEffect(() => {
    if (!otp.filter((digit) => digit === "").length > 0)
      onOTPEntered(otp.join(""));
  }, [otp]);

  return (
    <div className="flex justify-center items-center mt-8">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleOTPChange(index, e.target.value)}
          onKeyDown={(e) => handleBackspace(index, e)}
          className="md:w-16 w-12 md:h-16 h-12 p-4 text-xl text-center border sm:rounded-full m-2 focus:outline-none focus:border-blue-300 rounded-full"
        />
      ))}
    </div>
  );
};

export default OTPInput;

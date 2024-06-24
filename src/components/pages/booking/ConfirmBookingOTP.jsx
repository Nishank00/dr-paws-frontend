import Button from "@/components/ui/Button";
import OTPInput from "@/components/ui/OTPInput";
import React, { useState } from "react";

const ConfirmBookingOTP = ({ onOTPConfirmed, sendBookingOTP, phoneNumber }) => {
  const [otp, setOTP] = useState("");
  const otpEntered = (enteredOTP) => {
    setOTP(enteredOTP);
  };

  const verifyBooking = () => {
    if (otp.length === 4) {
      onOTPConfirmed(otp);
    }
  };

  return (
    <div className="pt-16 px-10 pb-12 max-w-[300px] md:max-w-[430px] max-h-fit md:max-h-[460px] text-center bg-white rounded-2xl">
      <h2 className="text-2xl font-semibold mb-2">Verify your Phone Number</h2>
      <p className="text-sm mb-10">
        To book the visit please enter the OTP sent to +91 {phoneNumber}.
      </p>

      <OTPInput onOTPEntered={otpEntered} />

      <Button
        disabled={otp.length < 4}
        color="secondary"
        label="Verify and Book"
        className="mt-10"
        onClick={verifyBooking}
      />

      <p className="mt-14">
        Didn&apos;t receive your code?{" "}
        <span
          className="font-semibold cursor-pointer hover:opacity-60"
          onClick={sendBookingOTP}
        >
          Resend Code
        </span>
      </p>
    </div>
  );
};

export default ConfirmBookingOTP;

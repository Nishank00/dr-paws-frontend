import { useState } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import AuthService from "@/services/Auth.service";
import UploadProfile from "./UploadProfile";
import { useToast } from "../ui/ToastProvider";
import OTPInput from "../ui/OTPInput";
import { useLoader } from "../ui/LoaderContext";

const RegisterForm = ({ onSuccess, loginClicked }) => {
  // Variables
  const showToast = useToast();
  const { startLoading, stopLoading } = useLoader();
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({
    profile_image: null,
    full_name: null,
    phone: null,
    email: null,
    password: null,
    confirm_password: null,
    otp: null,
  });

  // Methods
  const getOtp = () => {
    startLoading();
    const payload = { phone: form.phone, full_name: form.full_name };
    AuthService.sendRegisterOTP(payload)
      .then((response) => {
        stopLoading();
        if (!response.data.status)
          return showToast(response.data.message, "warning");
      })
      .catch((error) => {
        stopLoading();
        console.log(error);
      });
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    getOtp();
  };

  const formValueChanged = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const profileUploaded = (filename) => {
    setForm({ ...form, profile_image: filename });
  };

  const otpEntered = (otp) => {
    console.log("otp => ", otp);
    setForm({ ...form, otp });
  };

  const registerUser = () => {
    startLoading();
    const payload = {
      profile_image: form.profile_image,
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      user_type: "CUSTOMER",
      otp: form.otp,
    };

    AuthService.register(payload)
      .then((response) => {
        stopLoading();
        if (!response.data.status)
          return showToast(response.data.message, "warning");

        onSuccess();
        return showToast(response.data.message, "success");
      })
      .catch((error) => {
        stopLoading();
        console.error(error);
      });
  };

  const resendCode = () => {
    showToast("Code Resent", "success");
    getOtp();
  };

  const renderPage = (page) => {
    switch (page) {
      case 1:
        return (
          <div className="text-center">
            <div className="flex flex-col items-center mb-5 sm:mb-10">
              <h5 className="text-2xl font-custom-roca font-bold mb-3">
                Let&apos;s get started by creating your account.
              </h5>
              <p className="text-xs w-56 sm:w-full">
                Add your phone number. We&apos;ll send you a verification code.
              </p>
            </div>

            <div className="mb-3 sm:mb-10">
              <UploadProfile onUpload={profileUploaded} />
              <TextInput
                placeholder={"Name"}
                name="full_name"
                value={form.full_name}
                onChange={formValueChanged}
                classes="mb-4"
              />
              <TextInput
                placeholder={"Contact Number"}
                name="phone"
                value={form.phone}
                onChange={formValueChanged}
                classes="mb-4"
              />

              <Button
                color="secondary"
                disabled={!form.phone || !form.full_name}
                label="Sign Up"
                onClick={handleNext}
              />
            </div>
            <div className="">
              <p className="text-sm font-custom-open-sans">
                Already have an Account?{" "}
                <span
                  className="cursor-pointer font-bold hover:shadow-lg"
                  onClick={loginClicked}
                >
                  Log In
                </span>
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <>
            <div className="pt-16 px-4 sm:px-10 pb-12 max-w-[430px] max-h-[460px] text-center bg-white rounded-2xl">
              <h2 className="text-2xl font-custom-roca font-semibold mb-2">
                Verify your Phone Number
              </h2>
              <p className="text-xs mb-10">
                To book the visit please enter the OTP sent to +91 {form.phone}.
              </p>

              <OTPInput onOTPEntered={otpEntered} />

              <Button
                disabled={form.otp?.length < 4}
                color="secondary"
                label="Verify and Proceed"
                className="mt-10"
                onClick={registerUser}
              />

              <p className="text-sm fobt mt-14">
                Didn&apos;t receive your code?{" "}
                <span
                  className="font-semibold cursor-pointer hover:opacity-65"
                  onClick={resendCode}
                >
                  Resend Code
                </span>
              </p>
            </div>
          </>
        );
      // return (
      //   <div className="text-center">
      //     <div className="mb-10">
      //       <h5 className="text-3xl font-bold mb-3">
      //         Generate your password
      //       </h5>
      //       <p>
      //         Both fields should match, to successfully create the password
      //       </p>
      //     </div>

      //     <div className="">
      //       <TextInput
      //         type={"password"}
      //         placeholder={"Password"}
      //         name="password"
      //         value={form.password}
      //         onChange={formValueChanged}
      //       />
      //       <TextInput
      //         type={"password"}
      //         placeholder={"Confirm Password"}
      //         name="confirm_password"
      //         value={form.confirm_password}
      //         onChange={formValueChanged}
      //       />

      //       <Button label="Submit" onClick={registerUser} />
      //     </div>
      //   </div>
      // );
      default:
        return null;
    }
  };

  return (
    <div
      className={
        (currentPage === 2 ? "" : "p-2 sm:p-8") +
        " text-primary bg-white w-full md:w-[430px] rounded-3xl"
      }
    >
      {renderPage(currentPage)}
    </div>
  );
};

export default RegisterForm;

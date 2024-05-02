import { useState } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import AuthService from "@/services/Auth.service";
import { TokenService } from "@/services/Storage.service";
import { useToast } from "../ui/ToastProvider";
import UserService from "@/services/User.Service";
import { UserService as UserStorageService } from "@/services/Storage.service";
import OTPInput from "../ui/OTPInput";
import { useLoader } from "@/components/ui/LoaderContext";
import PhoneNumberInput from "../ui/PhoneNumberInput";
import { useDispatch } from "react-redux";
import {
  setUserSession,
  setUserLoggedIn,
} from "@/store/features/userSession/userSessionSlice";

const LoginForm = ({ onSuccess, signUpClicked }) => {
  // Variables
  const dispatch = useDispatch();
  const showToast = useToast();
  const { startLoading, stopLoading } = useLoader();
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    password: "",
    otp: "",
  });

  // Methods

  const getOtp = () => {
    startLoading();
    const payload = { phone: form.phone };
    AuthService.sendLoginOTP(payload)
      .then((response) => {
        stopLoading();
        console.log(response);
        if (!response.data.status) {
          setCurrentPage(1);
          return showToast(response.data.message, "warning");
        }
      })
      .catch((error) => {
        stopLoading();
        console.log(error);
      });
  };

  const handleNext = async () => {
    getOtp();
    setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const phoneNumberEntered = (phoneNumber) => {
    setForm({ ...form, phone: phoneNumber });
  };

  const formValueChanged = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const getUserData = () => {
    UserService.getProfile()
      .then((response) => {
        if (!response.data.status)
          return showToast(response.data.message, "warning");

        dispatch(
          setUserSession({
            user_info: response.data.data,
            isUserLoggedIn: true,
          })
        );
        UserStorageService.setUserInfo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const otpEntered = (otp) => {
    setForm({ ...form, otp });
  };

  const loginUser = () => {
    startLoading();
    const payload = { phone: form.phone, otp: form.otp };

    AuthService.login(payload)
      .then((response) => {
        stopLoading();
        if (!response.data.status)
          return showToast(response.data.message, "warning");

        TokenService.saveToken(response.data.data);
        dispatch(setUserLoggedIn({ isUserLoggedIn: true }));
        getUserData();
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
          <>
            <div className="p-8 text-primary bg-white w-full sm:w-[430px] rounded-3xl">
              <div className="text-center">
                <div className="mb-10">
                  <h5 className="font-bold font-custom-roca text-2xl sm:text-3xl mb-2">
                    Log in to book a visit
                  </h5>
                  <p className="text-sm font-custom-open-sans">
                    Enter your phone number to receive a verification code
                  </p>
                </div>

                <div className="mb-10">
                  <PhoneNumberInput
                    onPhoneNumberChange={phoneNumberEntered}
                    placeholder="Contact Number"
                    name={"phone"}
                    classes="sm:mb-4"
                  />
                  {/* <TextInput
                    placeholder={"Email"}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={formValueChanged}
                  />
                  <TextInput
                    placeholder={"Password"}
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={formValueChanged}
                  /> */}

                  <Button
                    disabled={!form.phone}
                    color="secondary"
                    label="Login"
                    onClick={handleNext}
                  />
                </div>
                <div className="">
                  <p className="text-sm font-custom-open-sans">
                    Don&apos;t have an account?{" "}
                    <span
                      className="cursor-pointer font-bold  hover:shadow-lg"
                      onClick={signUpClicked}
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className="pt-6 sm:pt-16 px-4 sm:px-10 pb-12 sm:max-w-[430px]  text-center text-primary bg-white rounded-2xl">
              <div className="pt-1 sm:pt-4 mb-5">
                <button
                  type="button"
                  onClick={handleBack}
                  className={"flex items-center"}
                >
                  <span className="text-2xl mr-1">
                    <svg
                      width="11"
                      height="18"
                      viewBox="0 0 11 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.06077 8.99999L10.0608 1.99999L9.00011 0.939331L0.939453 8.99999L9.00011 17.0607L10.0608 16L3.06077 8.99999Z"
                        fill="#33495F"
                      />
                    </svg>
                  </span>
                  <span className="text-lg sm:text-xl ml-2 font-open-sans">
                    {"Back"}
                  </span>
                </button>
              </div>
              <h2 className="text-2xl font-custom-roca font-semibold mb-2 ">
                Verify your Phone Number
              </h2>
              <p className="text-sm mb-10">
                To book the visit please enter the OTP sent to +91 {form.phone}.
              </p>

              <OTPInput onOTPEntered={otpEntered} />

              <Button
                disabled={form.otp?.length < 4}
                color="secondary"
                label="Verify and Proceed"
                className="mt-10"
                onClick={loginUser}
              />

              <p className="mt-14">
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
    }
  };

  return <div>{renderPage(currentPage)}</div>;
};

export default LoginForm;

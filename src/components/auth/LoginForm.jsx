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

const LoginForm = ({ onSuccess, signUpClicked }) => {
  // Variables
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

  const getUserData = () => {
    UserService.getProfile()
      .then((response) => {
        if (!response.data.status)
          return showToast(response.data.message, "warning");

        UserStorageService.setUserInfo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const otpEntered = (otp) => {
    console.log("otp => ", otp);
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
        getUserData();
        onSuccess();
        return showToast(response.data.message, "success");
      })
      .catch((error) => {
        stopLoading();
        console.error(error);
      });
  };

  const renderPage = (page) => {
    switch (page) {
      case 1:
        return (
          <>
            <div className="p-8 text-primary bg-white w-full md:w-[430px] rounded-3xl">
              <div className="text-center">
                <div className="mb-10">
                  <h5 className="font-bold text-3xl mb-2">
                    Log in to book a visit
                  </h5>
                  <p>
                    Add your phone number. We&apos;ll send you a verification
                    code.
                  </p>
                </div>

                <div className="mb-10">
                  <TextInput
                    placeholder="Mobile Number"
                    name="phone"
                    value={form.phone}
                    onChange={formValueChanged}
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
                  <p>
                    Don&apos;t have an Account?{" "}
                    <span
                      className="cursor-pointer italic"
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
            <div className="pt-16 px-10 pb-12 max-w-[430px] max-h-[460px] text-center text-primary bg-white rounded-2xl">
              <h2 className="text-2xl font-semibold mb-2">
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
                <span className="font-semibold">Resend Code</span>
              </p>
            </div>
          </>
        );
    }
  };

  return <div>{renderPage(currentPage)}</div>;
};

export default LoginForm;

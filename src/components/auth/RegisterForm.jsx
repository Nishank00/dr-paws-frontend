import { useState } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import AuthService from "@/services/Auth.service";
import useToast from "@/components/ui/Toast";
import UploadProfile from "./UploadProfile";

const RegisterForm = ({ onSuccess, loginClicked }) => {
  const { showToast, ToastComponent } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({
    profile_image: null,
    phone: null,
    email: null,
    password: null,
    confirm_password: null,
  });

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const formValueChanged = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const profileUploaded = (filename) => {
    setForm({ ...form, profile_image: filename });
  };

  const registerUser = () => {
    const payload = {
      profile_image: form.profile_image,
      email: form.email,
      phone: form.phone,
      password: form.password,
      user_type: "CUSTOMER",
    };

    AuthService.register(payload)
      .then((response) => {
        if (!response.data.status) {
          showToast(response.data.message, "warning");
          console.log("False received");
          return;
        }
        onSuccess();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderPage = (page) => {
    switch (page) {
      case 1:
        return (
          <div className="text-center">
            <div className=" mb-10">
              <h5 className="text-2xl font-bold mb-3">
                Let&apos;s get started by creating your account.
              </h5>
              <p>
                Add your phone number. We&apos;ll send you a verification code.
              </p>
            </div>

            <div className="mb-10">
              <UploadProfile onUpload={profileUploaded} />
              <TextInput
                placeholder={"Email"}
                name="email"
                value={form.email}
                onChange={formValueChanged}
              />
              <TextInput
                placeholder={"Mobile Number"}
                name="phone"
                value={form.phone}
                onChange={formValueChanged}
              />

              <Button label="Next" onClick={handleNext} />
            </div>
            <div className="">
              <p>
                Already have an Account?{" "}
                <span className="cursor-pointer italic" onClick={loginClicked}>
                  Log In
                </span>
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <div className="mb-10">
              <h5 className="text-3xl font-bold mb-3">
                Generate your password
              </h5>
              <p>
                Both fields should match, to successfully create the password
              </p>
            </div>

            <div className="">
              <TextInput
                type={"password"}
                placeholder={"Password"}
                name="password"
                value={form.password}
                onChange={formValueChanged}
              />
              <TextInput
                type={"password"}
                placeholder={"Confirm Password"}
                name="confirm_password"
                value={form.confirm_password}
                onChange={formValueChanged}
              />

              <Button label="Submit" onClick={registerUser} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-10 text-primary bg-white w-full md:w-[430px]">
      {renderPage(currentPage)}
    </div>
  );
};

export default RegisterForm;

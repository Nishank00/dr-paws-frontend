import { useState } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import AuthService from "@/services/Auth.service";
import useToast from "@/components/ui/Toast";

const RegisterForm = () => {
  const { showToast, ToastComponent } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({
    mobile_number: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const formValueChanged = (e) => {
    const { name, value } = e.target;
    console.log("Method invoked", name, value);
    setForm({ ...form, [name]: value });
    console.table(form);
  };

  const registerUser = () => {
    AuthService.register(form)
      .then((response) => {
        if (!response.data.status) {
          showToast(response.data.message, "warning");
          console.log("False received");
        }
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderPage = (page) => {
    switch (page) {
      case 1:
        return (
          <div className="">
            <div className="">
              <h5>Log in to book a visit</h5>
              <p>Add your phone number. We'll send you a verification code.</p>
            </div>

            <div className="">
              <TextInput
                placeholder={"Email"}
                name="email"
                value={form.email}
                onChange={formValueChanged}
              />
              <TextInput
                placeholder={"Mobile Number"}
                name="mobile_number"
                value={form.mobile_number}
                onChange={formValueChanged}
              />

              <Button label="Next" onClick={handleNext} />
            </div>
            <div className="">
              <p>Don’t have an Account? Sign Up</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="">
            <div className="">
              <h5>Generate your password</h5>
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
            <div className="">
              <p>Don’t have an Account? Sign Up</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-10 text-primary w-full">{renderPage(currentPage)}</div>
  );
};

export default RegisterForm;

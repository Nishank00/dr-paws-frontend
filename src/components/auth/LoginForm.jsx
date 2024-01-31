import { useState } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import AuthService from "@/services/Auth.service";
import { TokenService } from "@/services/Storage.service";

const LoginForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const formValueChanged = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const loginUser = () => {
    const payload = { email_phone: form.email, password: form.password };

    AuthService.login(payload)
      .then((response) => {
        if (!response.data.status) {
          showToast(response.data.message, "warning");
          console.log("False received");
          return;
        }
        TokenService.saveToken(response.data.data);
        onSuccess();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="p-10 text-primary w-full">
      <div className="">
        <div className="">
          <h5>Log in to book a visit</h5>
          <p>Add your phone number. We'll send you a verification code.</p>
        </div>

        <div className="">
          <TextInput
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
          />

          <Button label="Login" onClick={loginUser} />
        </div>
        <div className="">
          <p>Don’t have an Account? Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

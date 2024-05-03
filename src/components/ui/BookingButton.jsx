import { TokenService } from "@/services/Storage.service";
import React, { useState } from "react";
import Popup from "./Popup";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastProvider";

const BookingButton = ({ className }) => {
  const [isLoginPopupOpen, setLoginPopup] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopup] = useState(false);
  const showToast = useToast();

  const router = useRouter();
  const openLoginPopup = () => {
    setLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setLoginPopup(false);
  };

  const closeRegisterPopup = () => {
    setRegisterPopup(false);
  };

  const loginClicked = () => {
    closeRegisterPopup();
    openLoginPopup();
  }; 

  const signUpClicked = () => {
    closeLoginPopup();
    openRegisterPopup();
  };

  const openRegisterPopup = () => {
    setRegisterPopup(true);
  };

  const bookingButtonClicked = () => {
    const token = TokenService.getToken();

    if (!token) {
      showToast("Please login in order to book the appointment", "warning");
      return openLoginPopup();
    }
    router.push("/booking");
  };
  return (
    <>
      <div className={className} onClick={bookingButtonClicked}>
        Book a visit
      </div>

      <Popup isOpen={isLoginPopupOpen} onClose={closeLoginPopup}>
        <LoginForm onSuccess={closeLoginPopup} signUpClicked={signUpClicked} />
      </Popup>

      <Popup isOpen={isRegisterPopupOpen} onClose={closeRegisterPopup}>
        <RegisterForm
          onSuccess={closeRegisterPopup}
          loginClicked={loginClicked}
        />
      </Popup>
    </>
  );
};

export default BookingButton;

import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import Popup from "@/components/ui/Popup";
import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PageHeader = () => {
  // const router = useRouter();
  const pageHeaderData = useSelector((state) => state.pageHeader);
  const userSessionData = useSelector((state) => state.userSession);
  const [isRegisterPopupOpen, setRegisterPopup] = useState(false);
  const [isLoginPopupOpen, setLoginPopup] = useState(false);
  const [user_id, setUserID] = useState(null);

  const openRegisterPopup = () => {
    setRegisterPopup(true);
  };

  const closeRegisterPopup = () => {
    setRegisterPopup(false);
  };

  const openLoginPopup = () => {
    setLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setLoginPopup(false);
  };

  const signUpClicked = () => {
    closeLoginPopup();
    openRegisterPopup();
  };

  const loginClicked = () => {
    closeRegisterPopup();
    openLoginPopup();
  };

  useEffect(() => {
    setUserID(JSON.parse(localStorage.getItem("user_info"))?.id);
  }, []);

  return (
    <div className="p-4 h-14 bg-primary3 text-primary flex items-center">
      {pageHeaderData.title &&
      pageHeaderData.title === "Home" &&
      pageHeaderData.currentMenu === "HOME" ? (
        <div className="flex items-center justify-between w-full">
          <div id="logo">
            <img
              src="/images/Dr_Paws_Logo_Tagline.png"
              alt="Brand Logo"
              className="w-16"
            />
          </div>

          <div id="sideMenu">
            {userSessionData.isUserLoggedIn ? (
              <img
                src="/icons/pet_filled.svg"
                alt="Hamburger Icon"
                loading="lazy"
              />
            ) : (
              <Link
                href={"/login"}
                className=" hover:shadow-2xl cursor-pointer"
              >
                <img
                  src="/icons/userCircle.svg"
                  alt="User"
                  loading="lazy"
                  className="hover:shadow-2xl"
                />
              </Link>
            )}
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-bold font-custom-roca">
          {pageHeaderData.title}
        </h2>
      )}

      <Popup isOpen={isRegisterPopupOpen} onClose={closeRegisterPopup}>
        <RegisterForm
          onSuccess={closeRegisterPopup}
          loginClicked={loginClicked}
        />
      </Popup>

      <Popup isOpen={isLoginPopupOpen} onClose={closeLoginPopup}>
        <LoginForm onSuccess={closeLoginPopup} signUpClicked={signUpClicked} />
      </Popup>
    </div>
  );
};

export default PageHeader;

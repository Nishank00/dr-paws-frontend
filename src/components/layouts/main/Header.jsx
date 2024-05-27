"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TokenService } from "@/services/Storage.service";
import Button from "@/components/ui/Button";
import ProfileDropdown from "@/components/pages/profile/ProfileDropdown";
import Popup from "@/components/ui/Popup";
import RegisterForm from "@/components/auth/RegisterForm";
import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/navigation";
import MenuBar from "./MenuBar";
import { useToast } from "@/components/ui/ToastProvider";
import { useSelector } from "react-redux";

const Menus = ({ show = false, applyParentClass = "" }) => {
  const menuItems = [
    { text: "Locations", href: "/clinics" },
    { text: "Our Services", href: "/services" },
    { text: "Our Team", href: "/team" },
    { text: "Membership", href: "/membership" },
  ];
  return (
    <>
      <div className={`${show ? "" : "hidden md:block"}  `}>
        <div className={`flex gap-6 items-center  ${applyParentClass}`}>
          {menuItems.map((menuItem, index) => (
            <div key={index} className="">
              <Link className="" href={menuItem.href}>
                <span className=" hover:text-gray-400 transition">
                  {menuItem.text}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const userSession = useSelector((state) => state.userSession);
  const [showMenu, setMenu] = useState(false);
  const [showProfileDropdown, setProfileDropdown] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopup] = useState(false);
  const [isLoginPopupOpen, setLoginPopup] = useState(false);
  const [user_id, setUserID] = useState(null);

  const toggleMenu = () => setMenu(!showMenu);
  const router = useRouter();
  const showToast = useToast();

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

  const closeProfileDropdown = () => {
    setProfileDropdown(false);
    router.push("/");
  };

  const toggleProfileDropdown = () => setProfileDropdown(!showProfileDropdown);

  const userIconClicked = () => {
    const token = TokenService.getToken() || false;

    if (!token) {
      return openLoginPopup();
    }
    return toggleProfileDropdown();
  };

  const signUpClicked = () => {
    closeLoginPopup();
    openRegisterPopup();
  };

  const loginClicked = () => {
    closeRegisterPopup();
    openLoginPopup();
  };

  const bookingButtonClicked = () => {
    const token = TokenService.getToken();
    if (!token) {
      showToast("Please login in order to book the appointment", "warning");
      return openLoginPopup();
    }
    router.push("/booking");
  };

  useEffect(() => {
    setUserID(JSON.parse(localStorage.getItem("user_info"))?.id);
  }, []);

  return (
    <>
      <div className="body-padding-x body-padding-y lg:h-[90px] text-primary bg-primary3 relative z-50">
        <nav className="flex items-center w-full justify-between">
          <div className="flex gap-10 items-center">
            <div id="logo" className="h-12 flex justify-center items-center">
              <Link href="/">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33c50d9807ec772184fb6f5d47b95056196041f13665f4a3c3bf67d9f7ee7c2?"
                  className="aspect-[2.55] object-contain object-center w-[80px] md:w-[120px] lg:w-[130px] lg:h-[49px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
              </Link>
            </div>
            {/* {!showMenu && <MenuBar show={showMenu} />} */}
            <Menus show applyParentClass="hidden lg:flex" />
          </div>
          <div className="flex items-center gap-5 ">
            <Button
              label="Book a Visit"
              color="secondary"
              className="lg-w-[210px] h-12  transition cursor-pointer"
              onClick={bookingButtonClicked}
            />
            <div className="flex items-center gap-1">
              <div
                onClick={userIconClicked}
                className="flex items-center p-2 border-secondary border-2 border-solid justify-center rounded-full hover:shadow cursor-pointer h-9 w-9 md:h-12 md:w-12 relative"
              >
                <img
                  className="w-10 h-10"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f456f7a9bed0628bc91e7851c1beccfa0ff3a43c8c32b0e1c52c5bcaa9d1dae9?"
                />

                {showProfileDropdown && (
                  <div className="absolute top-14 w-screen sm:w-auto">
                    <ProfileDropdown
                      onClose={() => setProfileDropdown(false)}
                      onLogout={closeProfileDropdown}
                    />
                  </div>
                )}
              </div>

              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="ml-1 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 inline-flex items-center justify-center w-8 h-8"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* {showMenu && <MenuBar show={showMenu} />} */}
        <Menus
          show={showMenu}
          applyParentClass="block lg:hidden lg:justify-around"
        />
      </div>

      <Popup isOpen={isRegisterPopupOpen} onClose={closeRegisterPopup}>
        <RegisterForm
          onSuccess={closeRegisterPopup}
          loginClicked={loginClicked}
        />
      </Popup>

      <Popup isOpen={isLoginPopupOpen} onClose={closeLoginPopup}>
        <LoginForm onSuccess={closeLoginPopup} signUpClicked={signUpClicked} />
      </Popup>
    </>
  );
};

export default Header;

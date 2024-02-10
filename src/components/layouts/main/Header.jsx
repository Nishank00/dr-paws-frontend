"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TokenService } from "@/services/Storage.service";
import Button from "@/components/ui/Button";
import ProfileDropdown from "@/components/pages/profile/ProfileDropdown";
import Popup from "@/components/ui/Popup";
import RegisterForm from "@/components/auth/RegisterForm";
import LoginForm from "@/components/auth/LoginForm";

const Menus = ({ show = false, applyParentClass = "" }) => (
  <div className={show ? "" : "hidden md:block"}>
    <ul
      className={`${applyParentClass} flex flex-col md:flex-row md:items-center md:justify-center mt-5 lg:mt-0`}
    >
      <li className="my-1 md:mx-3">
        <Link className="" href="/clinics">
          Locations
        </Link>
      </li>

      <li className="my-1 md:mx-3">
        <Link className="" href="/services">
          Our Services
        </Link>
      </li>

      <li className="my-1 md:mx-3">
        <Link className="" href="/team">
          Our Team
        </Link>
      </li>

      <li className="my-1 md:mx-3">
        <Link className="" href="/membership">
          Membership
        </Link>
      </li>
    </ul>
  </div>
);

const Header = () => {
  const [showMenu, setMenu] = useState(false);
  const [showProfileDropdown, setProfileDropdown] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopup] = useState(false);
  const [isLoginPopupOpen, setLoginPopup] = useState(false);

  const toggleMenu = () => setMenu(!showMenu);

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
  return (
    <>
      <div className="body-padding-x body-padding-y text-primary bg-primary3">
        <nav className="flex items-center justify-between">
          <div id="logo">
            <Link href="/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33c50d9807ec772184fb6f5d47b95056196041f13665f4a3c3bf67d9f7ee7c2?"
                className="aspect-[2.55] object-contain object-center w-[125px] justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
            </Link>
          </div>
          <Menus show applyParentClass="hidden lg:flex" />
          <div className="flex items-center gap-2">
            <Button
              label="Book a Visit"
              color="secondary"
              className="hidden md:block"
            />
            <div
              onClick={userIconClicked}
              className="flex items-center justify-center hover:shadow cursor-pointer h-10 w-10 relative"
            >
              <img
                className=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f456f7a9bed0628bc91e7851c1beccfa0ff3a43c8c32b0e1c52c5bcaa9d1dae9?"
              />

              {showProfileDropdown && (
                <div className="absolute top-14 w-screen sm:w-auto">
                  <ProfileDropdown onLogout={closeProfileDropdown} />
                </div>
              )}
            </div>
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="ml-1 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 inline-flex items-center justify-center w-10 h-10"
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
        </nav>
        <Menus show={showMenu} applyParentClass="block lg:hidden" />
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

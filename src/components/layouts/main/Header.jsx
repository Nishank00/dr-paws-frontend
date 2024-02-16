"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TokenService } from "@/services/Storage.service";
import Button from "@/components/ui/Button";
import ProfileDropdown from "@/components/pages/profile/ProfileDropdown";
import Popup from "@/components/ui/Popup";
import RegisterForm from "@/components/auth/RegisterForm";
import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/navigation";
import MenuBar from "./MenuBar";

const Menus = ({ show = false, applyParentClass = "" }) => (
  <>
    <div className={`${show ? "" : "hidden md:block"} lg:w-[1020px] bg-red-600`}>
      <ul
        className={`${applyParentClass} flex flex-col md:flex-row  md:items-center md:justify-center mt-5 lg:mt-0`}
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
    {/* <div className={` hidden sm:hidden md:hidden lg:flex lg:flex-row  lg:justify-around items-center lg:w-[950px]  border-solid border-red-700 h-14`}>
      <div className="my-1 md:mx-3 ">
        <Link className="text-xl" href="/clinics">
          Locations
        </Link>
      </div>
      <div className="my-1 md:mx-3">
        <Link className="text-xl" href="/services">
          Our Services
        </Link>
      </div>
      <div className="my-1 md:mx-3">
        <Link className="text-xl" href="/team">
          Our Team
        </Link>
      </div>
      <div className="my-1 md:mx-3">
        <Link className="text-xl" href="/membership">
          Membership
        </Link>
      </div>
    </div>
    <div>
    {
      <div className={`${show? "block":"hidden"} w-full`}>
         <div className="my-1 md:mx-3 ">
        <Link className="text-xl" href="/clinics">
          Locations
        </Link>
      </div>
      <div className="my-1 md:mx-3">
        <Link className="text-xl" href="/services">
          Our Services
        </Link>
      </div>
      <div className="my-1 md:mx-3">
        <Link className="text-xl" href="/team">
          Our Team
        </Link>
      </div>
      <div className="my-1 md:mx-3">
        <Link className="text-xl" href="/membership">
          Membership
        </Link>
      </div>
      </div>
    }
    </div> */}
  </>

);

const Header = () => {
  const [showMenu, setMenu] = useState(false);
  const [showProfileDropdown, setProfileDropdown] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopup] = useState(false);
  const [isLoginPopupOpen, setLoginPopup] = useState(false);

  const toggleMenu = () => setMenu(!showMenu);
  const router = useRouter();

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

  const bookingButtonClicked = () => {
    router.push("/booking");
  };

  return (
    <>
      <div className="body-padding-x body-padding-y text-primary bg-primary3">
        <nav className="flex items-center justify-between">
          <div id="logo" className="h-14">
            <Link href="/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33c50d9807ec772184fb6f5d47b95056196041f13665f4a3c3bf67d9f7ee7c2?"
                className="aspect-[2.55] object-contain object-center w-[160px] justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
            </Link>
          </div>
          {!showMenu && <MenuBar show={showMenu}/>}
          {/* <Menus show applyParentClass="hidden lg:flex" /> */}
          <div className="flex items-center gap-5">
            <Button
              label="Book a Visit"
              color="secondary"
              className="hidden md:block w-52 h-12"
              onClick={bookingButtonClicked}
            />
            <div
              onClick={userIconClicked}
              className="flex items-center   p-2  border-[color:var(--Secondary-1,#5281A2)] border-2 border-solid justify-center rounded-full hover:shadow cursor-pointer h-12 w-12 relative"
            >
              <img
                className="w-full h-full"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f456f7a9bed0628bc91e7851c1beccfa0ff3a43c8c32b0e1c52c5bcaa9d1dae9?"
              />

              {showProfileDropdown && (
                <div className="absolute top-14 w-screen sm:w-auto">
                  <ProfileDropdown onLogout={closeProfileDropdown} />
                </div>
              )}
            </div>
            <div className="block lg:hidden">
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
       { showMenu && <MenuBar show={showMenu}/>}
        {/* <Menus show={showMenu} applyParentClass="block lg:hidden  lg:justify-around" /> */}
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

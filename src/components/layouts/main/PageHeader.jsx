import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import Button from "@/components/ui/Button";
import Popup from "@/components/ui/Popup";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const [showMenu, setMenu] = useState(false);

  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);

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
                onClick={openMenu}
                src="/icons/menu.svg"
                alt="Hamburger Icon"
                loading="lazy"
                className="cursor-pointer hover:scale-110"
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

      {showMenu && <SideBar closeMenu={closeMenu} />}

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

const SideBar = ({ closeMenu = () => {} }) => {
  const router = useRouter();
  const navigateFromMenu = (path) => {
    closeMenu();
    router.push(path);
  };
  return (
    <>
      <div className="absolute top-0 right-0 z-50 w-8/12 h-screen px-2 py-4 bg-white font-custom-roca text-lg">
        <div className="w-full mb-4">
          <span onClick={closeMenu} className="cursor-pointer">
            X
          </span>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div
              onClick={() => navigateFromMenu("/profile")}
              className="flex items-center justify-between px-2 hover:bg-primary4 rounded-lg cursor-pointer"
            >
              <h4>Profile</h4>
              <span>
                <img src="/icons/arrow_right.svg" alt=" " />
              </span>
            </div>

            <div
              onClick={() => navigateFromMenu("/clinics")}
              className="flex items-center justify-between px-2 hover:bg-primary4 rounded-lg cursor-pointer"
            >
              <h4>Locations</h4>
              <span>
                <img src="/icons/arrow_right.svg" alt=" " />
              </span>
            </div>

            <div
              onClick={() => navigateFromMenu("/services")}
              className="flex items-center justify-between px-2 hover:bg-primary4 rounded-lg cursor-pointer"
            >
              <h4>Our Services</h4>
              <span>
                <img src="/icons/arrow_right.svg" alt=" " />
              </span>
            </div>

            <div
              onClick={() => navigateFromMenu("/team")}
              className="flex items-center justify-between px-2 hover:bg-primary4 rounded-lg cursor-pointer"
            >
              <h4>Our Team</h4>
              <span>
                <img src="/icons/arrow_right.svg" alt=" " />
              </span>
            </div>

            <div
              onClick={() => navigateFromMenu("/membership")}
              className="flex items-center justify-between px-2 hover:bg-primary4 rounded-lg cursor-pointer"
            >
              <h4>Membership</h4>
              <span>
                <img src="/icons/arrow_right.svg" alt=" " />
              </span>
            </div>
          </div>

          <div className="px-4">
            <Button
              label={<span className="text-xs font-bold">Book a Visit</span>}
              color="secondary"
              onClick={() => navigateFromMenu("/booking")}
              className="h-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PageHeader;

/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui/Button";
import Popup from "@/components/ui/Popup";
import React, { useState } from "react";
import MembershipPopupForm from "./MembershipPopupForm";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { TokenService } from "@/services/Storage.service";

const MembershipCardNew = ({
  membership = {},
  memberships,
  setMemberships,
}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState({});
  const [isLoginPopupOpen, setLoginPopup] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopup] = useState(false);

  const showPopup = () => setOpenPopup(true);
  const closePopup = () => setOpenPopup(false);

  const selectClicked = (membership) => {
    const token = TokenService.getToken();
    if (!token) {
      return openLoginPopup();
    }
    setSelectedMembership(membership);
    return showPopup();
  };

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

  return (
    <>
      <div
        className={`bg-[${membership?.background_color}] px-4 py-10 flex flex-col  bg-primary3 text-primary font-custom-open-sans rounded-2xl hover:shadow-lg transition-all duration-300 ease-in-out min-w-[292px] md:min-w-min`}
      >
        {/* Header */}
        <div className="flex flex-col  gap-2">
          <img
            src={`/membership/${membership?.image}`}
            alt=""
            loading="lazy"
            className="w-20 h-20 md:w-28 md:h-28 self-center"
          />

          <h3 className="text-xl font-custom-roca md:mt-4 mt-2">
            {membership?.title}
          </h3>
          <p className="text-sm sm:max-h-10 md:max-h-10  ">
            {membership?.description}
          </p>
        </div>
        <div className="md:pt-12 pt-6">
          <p className="text-sm font-bold">Includes:</p>
        </div>
        <div className="flex flex-col h-full">
          {membership?.membership_items?.map((membership_item, index) => (
            <div
              className="flex border-b-2  border-x-primary2 py-4 items-center gap-2"
              key={membership?.title + index}
            >
              <img src={`/membership/${membership.item_icon}`} alt="" />
              <p className="text-sm">
                {membership_item?.service_count} {membership_item.service_name}
              </p>
            </div>
          ))}
        </div>

        <Button
          onClick={() => selectClicked(membership)}
          label="Select"
          color="secondary"
          className=""
        />
      </div>

      <Popup isOpen={openPopup} onClose={closePopup}>
        <MembershipPopupForm
          membership={selectedMembership}
          memberships={memberships}
          setMemberships={setMemberships}
        />
      </Popup>
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

export default MembershipCardNew;

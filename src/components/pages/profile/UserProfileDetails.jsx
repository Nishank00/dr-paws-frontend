"use client";

import Popup from "@/components/ui/Popup";
import { useToast } from "@/components/ui/ToastProvider";
import UserService from "@/services/User.Service";
import { useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import Button from "@/components/ui/Button";

const UserProfileDetails = () => {
  const showToast = useToast();
  const [userData, setUserData] = useState({});
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openEditPopup = () => setPopupOpen(true);
  const closeEditPopup = () => setPopupOpen(false);

  const getUserData = () => {
    UserService.getProfile()
      .then((response) => {
        if (!response.data.status) {
          return showToast(response.data.message, "warning");
        }
        setUserData(response.data.data);
        UserStorageService.setUserInfo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="text-primary px-4 flex  gap-4">
        <div className="w-1/6 self-center">
          <div
            className="w-16 h-16 sm:w-28 sm:h-28 lg:w-40 lg:h-40 rounded-full"
            style={{
              backgroundImage: "url(/profile/defaultProfile.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="w-4/5 flex flex-col gap-3">
          <h4 className="text-xl sm:text-3xl text-secondary font-custom-roca">
            {userData.full_name || "Not Available"}
          </h4>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-24">
            <div className="flex sm:flex-col gap-2">
              <img
                src="/profile/call.svg"
                alt=" "
                loading="lazy"
                className="sm:hidden"
              />
              <p className="hidden sm:block text-secondary text-sm font-custom-open-sans">
                Contact No
              </p>
              <p className="text-primary text-xs sm:text-lg font-semibold font-custom-open-sans">
                {userData.phone ? "+91 " + userData.phone : "Not Available"}
              </p>
            </div>

            <div className="flex sm:flex-col gap-2">
              <img
                src="/profile/sms.svg"
                alt=" "
                loading="lazy"
                className="sm:hidden"
              />
              <p className="hidden sm:block text-secondary text-sm font-custom-open-sans">
                Email
              </p>
              <p className="text-primary text-xs sm:text-lg font-semibold font-custom-open-sans">
                {userData.email || "Not Available"}
              </p>
            </div>

            <div className="flex sm:flex-col gap-2">
              <img
                src="/profile/address.svg"
                alt=" "
                loading="lazy"
                className="sm:hidden"
              />
              <p className="hidden sm:block text-secondary text-sm font-custom-open-sans">
                Address
              </p>
              <p className="text-primary text-xs sm:text-lg font-semibold font-custom-open-sans">
                {userData.address || "Not Available"}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <span
            onClick={openEditPopup}
            title="Update Profile"
            className="w-5 h-5 flex items-center justify-center bg-secondary rounded-full hover:bg-primary cursor-pointer p-1 absolute right-1 top-1 sm:hidden"
          >
            <img src="/profile/edit.svg" alt=" " loading="lazy" />
          </span>

          <Button
            label={
              <p className="text-sm text-secondary font-custom-open-sans flex items-center gap-2">
                <img src="/profile/edit.svg" alt=" " loading="lazy" />
                <span>Edit Profile</span>
              </p>
            }
            color="secondary"
            onClick={openEditPopup}
            className="bg-inherit text-secondary border-2 border-secondary"
          />
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closeEditPopup} hideClose>
        <ProfileForm user_id={userData.id} closePopup={closeEditPopup} />
      </Popup>
    </>
  );
};

export default UserProfileDetails;

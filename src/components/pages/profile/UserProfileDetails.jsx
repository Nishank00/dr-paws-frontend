"use client";

import Popup from "@/components/ui/Popup";
import { useToast } from "@/components/ui/ToastProvider";
import UserService from "@/services/User.Service";
import { useEffect, useState } from "react";
import { UserService as UserStorageService } from "@/services/Storage.service";
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
        closeEditPopup();
        setUserData(response.data.data);
        UserStorageService.setUserInfo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("userData", userData);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="text-primary px-4 flex gap-5">
        <div className="w-2/12  -ml-10 mr-14 self-center">
          <div
            className="w-32 h-32 ml-11 lg:ml-0 sm:w-28 sm:h-28 lg:w-40 lg:h-40 border-primary2  border-4 rounded-full"
            style={{
              // backgroundImage: `url(${
              //   userData.profile_image
              //     ? process.env.NEXT_PUBLIC_API_UPLOAD_URL +
              //       "/" +
              //       userData.profile_image
              //     : "/profile/defaultProfile.png"
              // })`,
              backgroundImage: `url(/profile/defaultProfile.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="lg:w-8/12 w-48 flex ml-14 flex-col gap-1">
          <h4 className="text-xl sm:text-3xl text-secondary capitalize  font-custom-roca" style={{}}>
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
              <p className="hidden sm:block pt-6 text-secondary text-sm font-custom-open-sans">
                Contact No
              </p>
              <p className="text-primary text-xs pt-5 sm:text-lg font-semibold font-custom-open-sans">
                {userData.phone ? userData.phone : "Not Available"}
              </p>
            </div>

            <div className="flex sm:flex-col gap-2">
              <img
                src="/profile/sms.svg"
                alt=" "
                loading="lazy"
                className="sm:hidden "
              />
              <p className="hidden sm:block text-secondary pt-6 text-sm font-custom-open-sans">
                Email
              </p>
              <p className="text-primary text-xs sm:text-lg pt-5 font-semibold font-custom-open-sans">
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
              <p className="hidden sm:block text-secondary text-sm pt-6 font-custom-open-sans">
                Address
              </p>
              <p className="text-primary text-xs sm:text-lg w-60 pt-5 font-semibold font-custom-open-sans">
                {`${userData?.address || ""} ${
                  userData?.address_line_1 || ""
                } ${userData?.address_line_2 || ""}, ${userData?.city || ""}, ${
                  userData?.state || ""
                } ${userData?.pin_code || ""}` || "Not Available"}
              </p>
            </div>
          </div>
        </div>

        <div className="w-2/12 flex relative right-16 lg:left-56 lg:relative justify-end">
          <span
            onClick={openEditPopup}
            title="Update Profile"
            className="lg:w-5 lg:h-5 w-8 h-8 flex items-center justify-center bg-secondary rounded-full relative hover:bg-primary cursor-pointer p-1 sm:hidden"
          >
            <img src="/profile/edit.svg" alt=" " loading="lazy" />
          </span>

          <Button
            label="Edit Profile"
            color="secondary"
            onClick={openEditPopup}
            className="bg-inherit text-secondary border-2 border-secondary hidden md:block w-40 h-12"
          />
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closeEditPopup} hideClose>
        <ProfileForm user_id={userData.id} closePopup={getUserData} />
      </Popup>
    </>
  );
};

export default UserProfileDetails;

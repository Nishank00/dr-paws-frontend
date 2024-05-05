"use client";
import React, { useState, useEffect } from "react";
import PetCard from "./PetCard";
import DialogBox from "@/components/Common/DialogBox";
import ProfileForm from "./ProfileForm";
import UserService from "@/services/User.Service";
import PetService from "@/services/Pet.Service";
import { UserService as UserStorageService } from "@/services/Storage.service";
import Popup from "@/components/ui/Popup";
import PetList from "./PetList";
import PetForm from "./PetForm";
import Image from "next/image";
import Button from "@/components/ui/Button";

const UserPofile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    getUserData();
  };

  const getUserData = () => {
    UserService.getProfile()
      .then((response) => {
        if (!response.data.status) {
          return;
        }
        setUserData(response.data.data);
        UserStorageService.setUserInfo(response.data.data);
        // getPets(response.data.data.id);
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
      <div className=" mt-10 lg:mt-14">
        <div className="text-secondary flex flex-col lg:flex-row items-center gap-2 lg:gap-1">
          <div id="profile-image w-full lg:w-1/5">
            {/* <Image
              src={
                userData.profile_image
                  ? process.env.NEXT_PUBLIC_API_UPLOAD_URL +
                    "/" +
                    userData.profile_image
                  : "/defaultUserProfileImage.png"
              }
              alt="Profile Image"
              width={100}
              height={100}
              className="aspect-square object-cover object-center w-[160px] h-[160px] rounded-full"
            /> */}
             <div
              className="w-[160px] h-[160px] rounded-full bg-accent relative"
              style={{
                backgroundImage: `url(${userData.profile_image
                  ? `${process.env.NEXT_PUBLIC_API_UPLOAD_URL}/${userData.profile_image}` : "/defaultUserProfileImage.png"})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>

          <div
            id="details"
            className="flex flex-col justify-center gap-5 w-full lg:w-3/5 lg:ml-5 "
          >
            <h2 className="font-semibold font-custom-roca text-center lg:text-left text-3xl">
              {userData.full_name || "Not Available"}
            </h2>

            <div className=" flex flex-col md:flex-row justify-between">
              <div className="mt-5 md:mt-0">
                <h4 className="text-sm mb-2 font-custom-open-sans text-center md:text-left">
                  Contact No
                </h4>
                <h3 className="text-md font-custom-open-sans font-semibold text-primary text-center md:text-left">
                  {userData.phone || "NA"}
                </h3>
              </div>

              <div className="mt-5 md:mt-0">
                <h4 className="text-sm mb-2 text-center md:text-left">
                  Email Id
                </h4>
                <h3 className="text-md font-custom-open-sans font-semibold text-primary text-center md:text-left">
                  {userData.email || "NA"}
                </h3>
              </div>

              <div className="mt-5 md:mt-0">
                <h4 className="text-sm mb-2 text-center md:text-left">
                  Address
                </h4>
                <h3 className="text-sm font-custom-open-sans font-semibold  text-primary text-center md:text-left ">
                  {userData.address || "NA"}
                </h3>
              </div>
            </div>
          </div>

          <div className="self-start mt-10 lg:mt-0 w-full flex items-center justify-center lg:w-1/5">
            <Button
              label={
                <>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1968_11336)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9351 1.18359C11.6209 1.18359 11.3097 1.24136 11.0194 1.35359C10.7291 1.46582 10.4653 1.63032 10.2431 1.8377L1.80563 9.7127C1.72872 9.78448 1.67321 9.87375 1.6446 9.97169L0.707096 13.18C0.648082 13.382 0.709538 13.598 0.868131 13.746C1.02673 13.894 1.25814 13.9514 1.47452 13.8963L4.91202 13.0213C5.01696 12.9946 5.11261 12.9428 5.18951 12.871L13.627 4.99599C13.8492 4.78861 14.0255 4.54242 14.1457 4.27147C14.266 4.00052 14.3278 3.71012 14.3278 3.41684C14.3278 3.12357 14.266 2.83317 14.1457 2.56222C14.0255 2.29126 13.8492 2.04507 13.627 1.8377C13.4048 1.63032 13.141 1.46582 12.8507 1.35359C12.5604 1.24136 12.2493 1.18359 11.9351 1.18359ZM11.4978 2.43145C11.6364 2.37785 11.785 2.35026 11.9351 2.35026C12.0851 2.35026 12.2337 2.37785 12.3724 2.43145C12.511 2.48505 12.637 2.56361 12.7431 2.66266C12.8492 2.7617 12.9334 2.87928 12.9909 3.00868C13.0483 3.13808 13.0778 3.27678 13.0778 3.41684C13.0778 3.55691 13.0483 3.6956 12.9909 3.82501C12.9334 3.95441 12.8492 4.07199 12.7431 4.17103L4.42299 11.9365L2.20084 12.5021L2.80688 10.4281L11.127 2.66266C11.2331 2.56361 11.3591 2.48505 11.4978 2.43145Z"
                        fill="#5281A2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1968_11336">
                        <rect
                          width="15"
                          height="14"
                          fill="white"
                          transform="translate(0.0600586 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  Edit Profile
                </>
              }
              color="primary4"
              onClick={openPopup}
              className="bg-white w-[166px] font-custom-open-sans font-semibold text-sm text-secondary border-2 border-secondary hover:text-white hover:bg-secondary"
            />
          </div>
        </div>
      </div>
      <hr className="my-10" />

      <div className="w-full">
        <PetList user_id={userData.id} />
      </div>

      <Popup isOpen={isOpen} onClose={closePopup} hideClose={true}>
        <ProfileForm user_id={userData.id} closePopup={closePopup} />
      </Popup>
    </>
  );
};

export default UserPofile;

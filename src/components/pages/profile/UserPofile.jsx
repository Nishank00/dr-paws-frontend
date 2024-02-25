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
  const gridData = [1, 2, 3, 4, 5];
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [pets, setPets] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleEditProfile = () => {
    setIsEditMode(true);
  };

  const handleUpdate = () => {
    setIsEditMode(false);
  };

  const getUserData = () => {
    console.log("getUserData running");
    UserService.getProfile()
      .then((response) => {
        if (!response.data.status) {
          console.log("error");
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

  const updateUserData = (data) => {
    UserService.updateUser(data)
      .then((response) => {
        if (!response.data.status) {
          console.log("error");
          return;
        }
        setUserData(response.data.data);
        UserStorageService.setUserInfo(response.data.data);
        isEditMode(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPets = (userId) => {
    PetService.getPetsByUserId(userId)
      .then((response) => {
        if (!response.data.status) {
          console.log("error");
          return;
        }
        setPets(response.data.data);
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
        <div   className="text-secondary  flex flex-col lg:flex-row items-center gap-2 lg:gap-1">
          <div   id="profile-image w-full lg:w-1/5">
            <Image
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
              className="aspect-square object-cover object-center w-40 h-40 rounded-full"
            />
          </div>

          <div
            id="details"
            className="flex flex-col justify-center gap-5 w-full lg:w-3/5 lg:pl-2 "
          >
            <h2 className="font-semibold font-custom-roca text-center lg:text-left text-3xl">
              {userData.full_name || "Not Available"}
            </h2>

            <div className="flex flex-col md:flex-row justify-between">
            <div className="mt-10 md:mt-0">
                <h4 className="text-sm mb-2 font-custom-open-sans text-center md:text-left">Contact No</h4>
                <h3 className="text-lg font-custom-open-sans font-semibold text-primary text-center md:text-left">
                  {userData.phone || "NA"}
                </h3>
              </div>

              <div className="mt-10 md:mt-0">
                <h4 className="text-sm mb-2 text-center md:text-left">Email Id</h4>
                <h3 className="text-lg font-custom-open-sans font-semibold text-primary text-center md:text-left">
                  {userData.email || "NA"}
                </h3>
              </div>

              <div className="mt-10 md:mt-0">
                <h4 className="text-sm mb-2 text-center md:text-left">Address</h4>
                <h3 className="text-lg font-custom-open-sans font-semibold  text-primary text-center md:text-left ">
                  {userData.address || "NA"}
                </h3>
              </div>
            </div>
          </div>

          <div className="self-start mt-10 lg:mt-0 w-full text-center lg:text-left lg:w-1/5">
            <Button
              label={"🖊️ Edit Profile"}
              color="primary4"
              onClick={openPopup}
              className="bg-white w-[166px] font-custom-open-sans font-semibold text-sm text-secondary border-2 border-secondary hover:text-white hover:bg-secondary"
            />
          </div>
        </div>
      </div>
      <hr className="my-10" />

      {/* <div className="w-full pt-[101px] flex flex-col-reverse lg:flex-col">
        <div>
          <div className="w-full flex items-center justify-center lg:justify-end sm:mt-5 md:mt-5">
            <button
              onClick={openPopup}
              className="justify-center items-stretch w-[180px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-8 py-4 rounded-[86px] border-2 border-solid"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4de235d9b77455aa5f7570010e4b94c0b4e21c41aa50f4e54f6bc6467e5db216?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.08] object-contain object-center w-[15px] shrink-0 my-auto"
              />

              <div className="text-primary">Edit Profile</div>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row items-center lg:justify-between ">
          <div className="hover:cursor-pointer">
            <Image
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
              className="aspect-square object-contain object-center  w-[160px] h-[160px] rounded-full"
            />
          </div>
          <div className="w-[100%] sm:[w-100%] md:[100%] lg:w-[80%] lg:ml-2  grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="w-[100%] flex  flex-col items-center justify-center">
              <div className="text-slate-700 text-2xl w-full text-center lg:text-left  italic font-semibold grow shrink basis-auto">
                {userData.full_name || "NA"}
              </div>
              <div className="text-slate-500 w-full text-center lg:text-left text-sm leading-9 tracking-normal mt-5">
                Contact No
              </div>
              <div className="text-slate-700 text-lg text-center lg:text-left w-full  font-semibold leading-8 tracking-normal ">
                {userData.phone || "NA"}
              </div>
            </div>
            <div className="w-[100%] flex  flex-col items-center justify-center">
              <div className="text-slate-700 text-2xl w-full text-center lg:text-left  italic font-semibold grow shrink basis-auto"></div>
              <div className="text-slate-500 w-full text-center lg:text-left text-sm leading-9 tracking-normal mt-5">
                Email
              </div>
              <div className="text-slate-700 text-lg text-center lg:text-left w-full  font-semibold leading-8 tracking-normal ">
                {userData.email || "NA"}
              </div>
            </div>
            <div className="w-[100%] flex  flex-col items-center justify-center">
              <div className="text-slate-700 text-2xl w-full text-center lg:text-left  italic font-semibold grow shrink basis-auto"></div>
              <div className="text-slate-500 w-full text-center lg:text-left text-sm leading-9 tracking-normal mt-5">
                Address
              </div>
              <div className="text-slate-700 text-lg text-center lg:text-left w-full  font-semibold leading-8 tracking-normal ">
                {userData.address || "NA"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10" /> */}

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

"use client";
import React from "react";
import PetsPage from "../pet/PetsPage";
import UserProfileDetails from "./UserProfileDetails";

const ProfilePage = () => {
  return (
    <div className="md:pb-52 md:pt-40">
      <div className="my-4">
        <UserProfileDetails />
      </div>
      <div className="w-full md:my-8 border-t border-[#F7F1DE]" />
      <div className="p-4">
        <PetsPage />
      </div>
    </div>
  );
};

export default ProfilePage;

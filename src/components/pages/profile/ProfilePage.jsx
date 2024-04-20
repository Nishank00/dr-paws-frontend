"use client";
import React from "react";
import PetsPage from "../pet/PetsPage";
import UserProfileDetails from "./UserProfileDetails";

const ProfilePage = () => {
  return (
    <>
      <div className="my-4">
        <UserProfileDetails />
      </div>
      <div className="p-4">
        <PetsPage />
      </div>
    </>
  );
};

export default ProfilePage;

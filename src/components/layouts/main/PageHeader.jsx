import React from "react";
import { useSelector } from "react-redux";

const PageHeader = () => {
  const pageHeaderData = useSelector((state) => state.pageHeader);
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
            <img src="/icons/userCircle.svg" alt="User" />
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-bold font-custom-roca">
          {pageHeaderData.title}
        </h2>
      )}
    </div>
  );
};

export default PageHeader;

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const BottomNav = () => {
  const pageHeaderData = useSelector((state) => state.pageHeader);
  return (
    <div className="fixed bottom-0 w-full">
      <div className="bg-primary3 text-primary text-xs text-center font-custom-open-sans grid grid-cols-5 gap-2 py-3">
        <Link
          href={"/"}
          className={`flex flex-col items-center gap-2 hover:font-semibold ${
            pageHeaderData.currentMenu === "HOME" ? "font-semibold" : ""
          }`}
        >
          <span>
            <img
              src={
                pageHeaderData.currentMenu === "HOME"
                  ? "/icons/home_filled.svg"
                  : "/icons/home_outlined.svg"
              }
              alt="home-icon"
            />
          </span>
          <p>Home</p>
        </Link>
        <Link
          href={"/pets"}
          className={`flex flex-col items-center gap-2 hover:font-semibold ${
            pageHeaderData.currentMenu === "PETS" ? "font-semibold" : ""
          }`}
        >
          <span>
            <img
              src={
                pageHeaderData.currentMenu === "PETS"
                  ? "/icons/pet_filled.svg"
                  : "/icons/pet_outlined.svg"
              }
              alt="home-icon"
            />
          </span>
          <p>My Pets</p>
        </Link>
        <Link
          href={"/booking"}
          className={`flex flex-col gap-2 hover:font-semibold relative text-[10px] sm:text-xs ${
            pageHeaderData.currentMenu === "BOOKING" ? "font-semibold" : ""
          }`}
        >
          <span className="absolute w-full -top-12">
            <img
              src="/icons/book_appointment.svg"
              alt="home-icon"
              loading="lazy"
              className="w-16 h-16 mx-auto"
            />
          </span>
          <p className="h-full flex items-center justify-center pt-4">
            Book Appointment
          </p>
        </Link>
        <div className="flex flex-col items-center gap-2 hover:font-semibold">
          <span>
            <img src="/icons/profile_outlined.svg" alt="home-icon" />
          </span>
          <p>Membership</p>
        </div>
        <Link
          href={"/clinics"}
          className={`flex flex-col items-center gap-2 hover:font-semibold ${
            pageHeaderData.currentMenu === "CLINICS" ? "font-semibold" : ""
          }`}
        >
          <span>
            <img
              src={
                pageHeaderData.currentMenu === "CLINICS"
                  ? "/icons/clinic_filled.svg"
                  : "/icons/clinic_outlined.svg"
              }
              alt="home-icon"
            />
          </span>
          <p>Clinic</p>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;

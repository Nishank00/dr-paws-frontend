"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BottomNav from "./BottomNav";
import PageHeader from "./PageHeader";
import { useSelector, useDispatch } from "react-redux";
import {
  setMobile,
  setTablet,
  setDesktop,
} from "@/store/features/currentDevice/currentDeviceSlice";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const currentDevice = useSelector((state) => state.currentDevice);
  const pages = [
    { url: "/", name: "Home" },
    { url: "/pets", name: "Ypur Pets" },
    { url: "/booking", name: "Book a Visit" },
    { url: "/membership", name: "Membership Plans" },
    { url: "/clinics", name: "Clinics" },
  ];
  const [currentPage, setCurrentPage] = useState({
    url: "/pets",
    name: "Your Pets",
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        dispatch(setDesktop());
      } else if (window.innerWidth > 640 && window.innerWidth < 768) {
        dispatch(setTablet());
      } else {
        dispatch(setMobile());
      }
    };

    handleResize(); // Set background image initially

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="sticky top-0 w-full">
        {currentDevice.isMobile ? (
          <PageHeader title={currentPage.name} />
        ) : (
          <Header />
        )}
      </div>
      <div className="grow min-h-96">{children}</div>
      <div className="mb-14 sm:mb-0">
        {currentDevice.isMobile ? <BottomNav /> : <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;

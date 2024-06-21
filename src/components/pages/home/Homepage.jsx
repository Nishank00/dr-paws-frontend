"use client";
import React from "react";
import VerticalTabs from "@/components/pages/home/VerticalTabs";
import ClinicCard from "@/components/pages/clinic/ClinicCard";
import ImageTextHeader from "@/components/pages/home/ImageTextHeader";
import Reviews from "@/components/pages/home/Reviews";
import FriendlyDoctor from "@/components/pages/home/FriendlyDoctor";
import Banner from "@/components/pages/home/Banner";
import NewBanner from "@/components/pages/home/NewBanner";
import ClinicService from "@/services/Clinic.service";
import { useEffect, useState } from "react";
import Dropdown from "@/components/ui/Dropdown";
import { useDispatch } from "react-redux";

import {
  setPageTitle,
  setPageHeader,
} from "@/store/features/pageHeader/pageHeaderSlice";
import {
  DropdownData1,
  DropdownData2,
  ImageTextHeaderData,
} from "@/components/constants";

const Homepage = () => {
  const dispatch = useDispatch();
  const [clinics, setClinics] = useState([]);

  const getClinics = () => {
    ClinicService.getVetportClincsData()
      .then((response) => {
        setClinics([]);
        if (response.data.status) {
          console.log(response.data.data, "clincs");
          setClinics(response.data.data);
        }
      })
      .catch((error) => console.error("Error:", error.message));
  };

  useEffect(() => {
    dispatch(
      setPageHeader({ title: "Home", currentMenu: "HOME", currentPath: "/" })
    );
    getClinics();
  }, []);

  return (
    <>
      {/* SECTION 1 CARDS */}
      <NewBanner />

      {/* SECTION 2 CARDS */}
      <div
        onClick={() => {
          getPets();
        }}
        className=" bg-[#cbd9e3] lg:bg-white sm:mt-10 "
      >
        <h2
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="text-primary font-medium text-2xl w-[300px] md:w-full m-auto md:text-4xl mb-5 md:mb-20 text-center"
        >
          Veterinary care, redesigned to be better
        </h2>

        <div className=" flex flex-row lg:flex-col overflow-hidden overflow-x-auto">
          {ImageTextHeaderData.map((item, index) => (
            <div
              key={index}
              className={`rounded-[10px] bg-white mx-4 p-5 ${item.className}`}
            >
              <ImageTextHeader
                imageUrl={item.imageUrl}
                header={item.header}
                text={item.text}
                imagePosition={item.imagePosition}
                buttonColor={item.buttonColor}
                buttonText={item.buttonText}
                buttonUrl={item.buttonUrl}
              />
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3 CARDS */}
      <h2
        style={{ fontFamily: "Roca Bold, sans-serif" }}
        className="text-primary font-medium bg-[#cbd9e3] md:bg-white pt-10 text-2xl md:text-4xl pb-10 text-center"
      >
        Check out the places <br /> we call home
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  bg-[#cbd9e3] md:grid-cols-3 md:bg-white pb-10 lg:grid-cols-4 gap-[20px] body-padding-x">
        {clinics.map((clinic, i) => (
          <ClinicCard key={"clinic" + i} clinic={clinic} />
        ))}
      </div>

      {/* SECTION 4 CARDS */}
      <div className=" lg:body-padding-x bg-[#e2e5da] pb-10 md:bg-white flex flex-col">
        <h2
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="text-primary font-medium  mt-10 text-2xl md:text-4xl mb-6 text-center"
        >
          Whatever your pet needs, <br /> we&apos;re there
        </h2>
        <p
          style={{ fontFamily: "Open Sans, sans-serif" }}
          className="text-primary text-center font-custom-open-sans  text-[16] mb-6"
        >
          Discover our most commonly requested services. For anything not
          listed, please <br /> get in touch with your local clinic
        </p>
        <div className="z-[0]">
          <VerticalTabs />
        </div>
      </div>

      {/* SECTION 5 CARDS */}
      <div className=" z-[-1] bg-[#FFF4E4] md:bg-transparent body-padding-x">
        <Reviews />
      </div>

      {/* SECTION 6 CARDS */}
      <div className="body-padding-x bg-[#cbd9e3] md:bg-white mt-0 md:mt-4 pb-8">
        <FriendlyDoctor />
      </div>
      <div className="w-full flex  md:my-20 flex-col items-center justify-center body-padding-x">
        <div
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="text-primary hidden md:block  text-center text-2xl md:text-4xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10"
        >
          Still have questions?
        </div>
        <div
          style={{ fontFamily: "Open Sans, sans-serif" }}
          className="text-primary text-center hidden md:block font-custom-open-sans text-lg leading-7 tracking-tight self-center mt-7  mb-4 max-md:max-w-full max-md:mt-10"
        >
          If your question is still not answered, please get in touch and
          <br /> we’d be happy to help
        </div>
        <div
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="w-full border-solid border-grey pr-5 font-black py-4"
        >
          <p className="text-left font-custome-inter !font-extrabold text-lg text-primary">
            About Dr. Paws
          </p>
        </div>

        {DropdownData1.map((item, index) => (
          <Dropdown key={index} title={item.title}>
            <p
              style={{ fontFamily: "Open Sans, sans-serif" }}
              className="text-slate-700 text-left font-custome-inter lg:text-sm  text-[14px] md:text-[19px] leading-[18px] lg:leading-7 tracking-tight self-center  max-md:max-w-full"
            >
              {item.content}
            </p>
          </Dropdown>
        ))}

        <div
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="w-full md:mt-10 pr-5 py-4"
        >
          <p className="text-left font-custome-inter font-extrabold text-lg text-primary">
            At a Dr. Paws Clinic
          </p>
        </div>
        {DropdownData2.map((item, index) => (
          <Dropdown key={index} title={item.title}>
            <p
              style={{ fontFamily: "Open Sans, sans-serif" }}
              className="text-slate-700 text-left font-custome-inter text-sm leading-[18px] tracking-tight self-center max-md:max-w-full"
            >
              {item.content}
            </p>
          </Dropdown>
        ))}
      </div>
    </>
  );
};

export default Homepage;

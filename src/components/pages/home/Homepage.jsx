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
    ClinicService.getData()
      .then((response) => {
        setClinics([]);
        if (response.data.status) {
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
      <NewBanner />
      <div className="body-padding-x pt-5 bg-[#cbd9e3] lg:bg-white sm:mt-10">
        <h2
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="text-primary font-medium text-2xl md:text-4xl mb-5 md:mb-10 text-center"
        >
          Veterinary care, redesigned to be better
        </h2>

        <div className=" flex flex-row lg:flex-col overflow-hidden overflow-x-auto">
          {ImageTextHeaderData.map((item, index) => (
            <div
              key={index}
              className={`py-4 rounded-lg bg-white m-4 ${item.className}`}
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

      <h2
        style={{ fontFamily: "Roca Bold, sans-serif" }}
        className="text-primary font-medium bg-[#cbd9e3] md:bg-white pt-10  text-2xl md:text-4xl pb-6 text-center"
      >
        Check out the places
        <br /> we call home
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  bg-[#cbd9e3] md:bg-white pb-10 lg:grid-cols-3 gap-10 md:gap-10 body-padding-x">
        {clinics.map((clinic, i) => (
          <ClinicCard key={"clinic" + i} clinic={clinic} />
        ))}
      </div>
      <div className=" lg:body-padding-x bg-[#e2e5da] pb-10 md:bg-white flex flex-col">
        <h2
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="text-primary font-medium  mt-10 text-2xl md:text-4xl mb-6 text-center"
        >
          Whatever your pet needs, we&apos;re there
        </h2>
        <p
          style={{ fontFamily: "Open Sans, sans-serif" }}
          className="text-primary text-center font-custom-open-sans  text-[16] mb-6"
        >
          Discover our most commonly requested services. For anything not
          listed,please <br /> get in touch with your local clinic
        </p>
        <VerticalTabs />
      </div>
      <div className="body-padding-x">
        <Reviews />
      </div>
      <div className="body-padding-x bg-[#cbd9e3] md:bg-white mt-4 pb-8">
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
        <div className="w-full border-solid border-grey px-5 py-4">
          <p className="text-left font-custome-inter font-bold text-sm text-primary">
            About Dr. Paws
          </p>
        </div>
        {DropdownData1.map((item, index) => (
          <Dropdown key={index} title={item.title}>
            <p
              style={{ fontFamily: "Open Sans, sans-serif" }}
              className="text-slate-700 text-left font-custome-inter text-sm leading-7 tracking-tight self-center max-md:max-w-full"
            >
              {item.content}
            </p>
          </Dropdown>
        ))}

        <div className="w-full border-b border-solid border-grey  md:mt-10 px-5 py-4">
          <p className="text-left font-custome-inter font-bold text-sm text-primary">
            At a Dr. Paws Clinic
          </p>
        </div>
        {DropdownData2.map((item, index) => (
          <Dropdown key={index} title={item.title}>
            <p
              style={{ fontFamily: "Open Sans, sans-serif" }}
              className="text-slate-700 text-left font-custome-inter text-sm leading-7 tracking-tight self-center max-md:max-w-full"
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

const WhatsApp = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2843_12090)">
      <path
        d="M38 0H6C2.68629 0 0 2.68629 0 6V38C0 41.3137 2.68629 44 6 44H38C41.3137 44 44 41.3137 44 38V6C44 2.68629 41.3137 0 38 0Z"
        fill="#23D366"
      />
      <path
        d="M31.7003 12.3016C29.4114 9.98988 26.3717 8.57216 23.1295 8.30419C19.8874 8.03623 16.6562 8.93565 14.0188 10.8402C11.3814 12.7448 9.51141 15.5292 8.74614 18.6911C7.98086 21.853 8.37068 25.1843 9.84527 28.0841L8.39777 35.1116C8.38276 35.1816 8.38233 35.2539 8.39653 35.324C8.41072 35.3941 8.43923 35.4605 8.48027 35.5191C8.5404 35.6081 8.62622 35.6765 8.72629 35.7154C8.82635 35.7543 8.93589 35.7617 9.04027 35.7366L15.9278 34.1041C18.8194 35.5414 22.1272 35.9062 25.2626 35.1335C28.3979 34.3608 31.1575 32.5009 33.0502 29.8846C34.9429 27.2682 35.846 24.0653 35.5988 20.8456C35.3516 17.6259 33.9702 14.5984 31.7003 12.3016ZM29.5528 29.4416C27.9691 31.0209 25.9298 32.0634 23.7222 32.4222C21.5146 32.781 19.2501 32.438 17.2478 31.4416L16.2878 30.9666L12.0653 31.9666L12.0778 31.9141L12.9528 27.6641L12.4828 26.7366C11.4597 24.7273 11.0988 22.4457 11.4517 20.2187C11.8047 17.9917 12.8535 15.9336 14.4478 14.3391C16.451 12.3365 19.1677 11.2115 22.0003 11.2115C24.8329 11.2115 27.5495 12.3365 29.5528 14.3391C29.5698 14.3587 29.5882 14.3771 29.6078 14.3941C31.5862 16.4019 32.6907 19.1105 32.6804 21.9292C32.6701 24.748 31.5458 27.4484 29.5528 29.4416Z"
        fill="white"
      />
      <path
        d="M29.1781 26.3241C28.6606 27.1391 27.8431 28.1366 26.8156 28.3841C25.0156 28.8191 22.2531 28.3991 18.8156 25.1941L18.7731 25.1566C15.7506 22.3541 14.9656 20.0216 15.1556 18.1716C15.2606 17.1216 16.1356 16.1716 16.8731 15.5516C16.9897 15.4521 17.128 15.3812 17.2768 15.3447C17.4257 15.3082 17.5811 15.307 17.7305 15.3413C17.8799 15.3755 18.0192 15.4443 18.1373 15.542C18.2554 15.6397 18.349 15.7637 18.4106 15.9041L19.5231 18.4041C19.5954 18.5662 19.6222 18.7449 19.6006 18.9211C19.579 19.0973 19.5099 19.2642 19.4006 19.4041L18.8381 20.1341C18.7174 20.2848 18.6446 20.4682 18.629 20.6607C18.6134 20.8532 18.6557 21.0459 18.7506 21.2141C19.0656 21.7666 19.8206 22.5791 20.6581 23.3316C21.5981 24.1816 22.6406 24.9591 23.3006 25.2241C23.4772 25.2962 23.6714 25.3138 23.8581 25.2746C24.0448 25.2354 24.2155 25.1412 24.3481 25.0041L25.0006 24.3466C25.1265 24.2224 25.2831 24.1339 25.4544 24.09C25.6256 24.0461 25.8055 24.0483 25.9756 24.0966L28.6181 24.8466C28.7639 24.8913 28.8975 24.9688 29.0087 25.073C29.12 25.1773 29.2059 25.3056 29.2599 25.4482C29.314 25.5908 29.3347 25.7438 29.3205 25.8956C29.3063 26.0474 29.2576 26.194 29.1781 26.3241Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2843_12090">
        <rect width="44" height="44" rx="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Telegram = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2843_12100)">
      <path
        d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
        fill="#039BE5"
      />
      <path
        d="M10.0668 21.5247L31.2785 13.3462C32.263 12.9905 33.1228 13.5864 32.8038 15.075L32.8057 15.0732L29.194 32.0884C28.9263 33.2947 28.2095 33.588 27.2067 33.0197L21.7067 28.9662L19.0538 31.5219C18.7605 31.8152 18.513 32.0627 17.9447 32.0627L18.3352 26.4655L28.5285 17.2567C28.9722 16.8662 28.4295 16.6462 27.8447 17.0349L15.2478 24.9659L9.81749 23.2719C8.63866 22.8979 8.61299 22.093 10.0668 21.5247Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2843_12100">
        <rect width="44" height="44" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const More = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="44" height="44" rx="10" fill="#F7F1DE" />
    <path
      d="M15 24.75C13.48 24.75 12.25 23.52 12.25 22C12.25 20.48 13.48 19.25 15 19.25C16.52 19.25 17.75 20.48 17.75 22C17.75 23.52 16.52 24.75 15 24.75ZM15 20.75C14.31 20.75 13.75 21.31 13.75 22C13.75 22.69 14.31 23.25 15 23.25C15.69 23.25 16.25 22.69 16.25 22C16.25 21.31 15.69 20.75 15 20.75Z"
      fill="#292D32"
    />
    <path
      d="M29 24.75C27.48 24.75 26.25 23.52 26.25 22C26.25 20.48 27.48 19.25 29 19.25C30.52 19.25 31.75 20.48 31.75 22C31.75 23.52 30.52 24.75 29 24.75ZM29 20.75C28.31 20.75 27.75 21.31 27.75 22C27.75 22.69 28.31 23.25 29 23.25C29.69 23.25 30.25 22.69 30.25 22C30.25 21.31 29.69 20.75 29 20.75Z"
      fill="#292D32"
    />
    <path
      d="M22 24.75C20.48 24.75 19.25 23.52 19.25 22C19.25 20.48 20.48 19.25 22 19.25C23.52 19.25 24.75 20.48 24.75 22C24.75 23.52 23.52 24.75 22 24.75ZM22 20.75C21.31 20.75 20.75 21.31 20.75 22C20.75 22.69 21.31 23.25 22 23.25C22.69 23.25 23.25 22.69 23.25 22C23.25 21.31 22.69 20.75 22 20.75Z"
      fill="#292D32"
    />
  </svg>
);

const Cross = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-3.5 cursor-pointer shrink-0 fill-white"
    viewBox="0 0 320.591 320.591"
  >
    <path
      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
      data-original="#000000"
    ></path>
    <path
      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
      data-original="#000000"
    ></path>
  </svg>
);

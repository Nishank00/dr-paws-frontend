"use client";
import React, { useState, useEffect } from "react";
import BannerPetCard from "./BannerPetCard";
import BannerPetCardTwo from "./BannerPetCardTwo";
import "@/app/globals.css";
const NewBanner = () => {
  // const [backgroundUrl, setBackgroundUrl] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 426) {
        // Small screen size
        setIsMobile(true);
      } else {
        // Medium screen size and larger
        setIsMobile(false);
      }
    };

    handleResize(); // Set background image initially

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="flex items-center  h-auto md:h-[85vh] text-white px-3 sm:px-16 md:px-44 py-20 lg:px-48 "
      style={{
        backgroundImage: `url(${
          isMobile ? "/home/small_screen_background.jpg" : "/home/banner.jpg"
        })`,
        // backgroundImage: `url("https://s3-alpha-sig.figma.com/img/2835/fa23/27f43a52362e2d085aa3e5ab4f5259ca?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwZT~F8R~dMySAVksa-IPB8suM4kwH5xV-P5cVIBiYqoSbI7n5BLkYOokS7wmq~rC3TjS5cazXzBwRRKvEkKcXBmxQn9Oobk0TMFNsymLCoELJ9MIq90oRY1JQCn-ZfN840OVxWujSo5QPT~~tjvdIGIewfTUMz-Zr7HkMTDy8WRa5Rze-h793G9w3ZEbi6dtET46smmI0Fq2ikhrKLKZzD69JCvWVypDr5AaFWhBeR1GUECihxG4zsIHa09ksoEQbOBbLtoqeEb-OoLit6fy1KMNLf8Y3cLm-i7CK51zA7RISEdZbRUITyu1AMIlDM7OT7bf~pew-29uTXW3XRbPQ__")`,
        backgroundSize: "cover",
        backgroundPosition: `${isMobile ? "right" : "center"}`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" w-full lg:w-2/3 h-[200px] flex-col flex justify-center gap-12">
        <h2
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className=" text-3xl md:text-[64px] leading-none custom-open-sans font-bold"
        >
          The Veterinary <br />
          Care our best <br />
          friends deserve
        </h2>
        <p className="text-sm font-custom-open-sans  md:text-[22px] font-semibold sm:font-light">
          Book a visit now. Who will we be meeting?
        </p>

        <div className="flex gap-4 w-full h-[220px]">
          <BannerPetCard
            pet_type="Dog"
            width={"100px"}
            height={"150px"}
            pet_image="/home/dog.svg"
          />
          <BannerPetCard
            pet_type="Cat"
            width={"100px"}
            height={"150px"}
            pet_image="/home/cat.svg"
          />
          <BannerPetCard
            pet_type="Small Pets"
            width={"100px"}
            height={"150px"}
            pet_image="/home/rabbit.png"
          />
        </div>
      </div>
    </div>
  );
};

export default NewBanner;

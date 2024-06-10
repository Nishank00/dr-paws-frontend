"use client";
import React, { useState, useEffect } from "react";
import Button from "../../ui/Button";
import "../../../../src/app/font.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
const ImageTextHeader = ({
  imageUrl,
  header,
  text,
  imagePosition,
  buttonText,
  buttonUrl,
  buttonColor,
  Imageheight,
  buttonVisibility = true,
  headingClass = "",
  paragraphClass = "",
  buttonClass = "",
  isWidthFull,
  isHeightFull,
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (buttonUrl) {
      router.push(buttonUrl);
    }
  };

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
    <>
      <div className={`${isWidthFull ? 'w-full mx-6' : 'w-[256px]' } md:w-[320px] lg:w-auto grid grid-cols-1 lg:grid-cols-2 gap-3 overflow-hidden bg-white md:body-padding-x`}>
        <div className={imagePosition == "left" ? "" : "lg:order-2 "}>
          <div
            style={{
              backgroundImage: "url(" + imageUrl + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={
              "w-full h-[250px] lg:min-h-[340px]  lg:max-w-[600px] lg:h-full rounded-md" +
              (imagePosition == " left" ? "" : " lg:order-2 ") +
              " "
            }
          />
        </div>
        <div>
          <div className="w-full h-full  lg:h-full flex md:justify-end md:items-center">
            <div className={`${isHeightFull ? 'h-full' : 'min-h-[300px]' }  lg:h-fit lg:w-[85%] flex flex-col justify-between py-2 pb-0 lg:justify-start`}>
              <div className="lg:h-fit flex flex-col  lg:justify-start">
                <h2
                  style={{ fontFamily: "Roca Bold, sans-serif" }}
                  className={
                    "text-primary font-medium w-[80%]  lg:text-start lg:ml-0  lg:text-[33px]  text-2xl mb-2 lg:mb-4" +
                    headingClass
                  }
                >
                  {header}
                </h2>
                <p
                  className={
                    "text-[#33495F] w-[80%] font-custom-open-sans lg:text-start lg:pb-6 lg:m-0 text-sm mb-6 " +
                    paragraphClass
                  }
                >
                  {text}
                </p>
              </div>
              {buttonText !== "Download App" ? (
                <Button
                  className={
                    `${
                      !buttonVisibility && "hidden"
                    } w-[220px] md:mt-[14px]  transition  text-lg ` +
                    buttonClass
                  }
                  color={buttonColor}
                  label={buttonText}
                  onClick={handleClick}
                />
              ) : (
                <div className="flex items-center justify-center md:justify-start gap-1 md:gap-6">
                  <Image
                    src="/appStore.png"
                    height={isMobile ? 60 : 150}
                    width={isMobile ? 100 : 150}
                    alt=""
                    className="cursor-pointer"
                  />
                  <Image
                    src="/playStore.png"
                    height={isMobile ? 60 : 165}
                    width={isMobile ? 110 : 165}
                    alt=""
                    className="cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageTextHeader;

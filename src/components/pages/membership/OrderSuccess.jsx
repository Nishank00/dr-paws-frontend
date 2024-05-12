"use client";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import PlanPopUp from "./PlanPopUp";
import { UserService as UserStorageService } from "@/services/Storage.service";
import Image from "next/image";

const OrderSuccess = () => {
  const userValues = UserStorageService?.getUserInfo();
  return (
    <div className="w-full flex justify-center pb-20 items-center flex-col bg-[#fcfaf3]">
      <div className="w-full flex mt-10">
        <IoChevronBackOutline className="text-2xl" color="#33495F" />
        <button className="text-primary font-custom-open-sans text-sm ml-1">
          Back
        </button>
      </div>
      <div className=" w-full md:[60%] mt-10  lg:w-[45%] min-width  m-auto border-2 p-5 bg-white">
        <div className="flex justify-center  flex-col">
          <Image
            className="m-auto w-[251px] h-[251px]"
            src={"/Membership/thankyou_picture.svg"}
            alt="thank you"
            width={100}
            height={100}
          />
          <div className="  m-auto w-full  flex justify-center flex-col">
            <div className="">
              <h1 className="text-center text-primary font-custom-roca    text-2xl sm:text-4xl">
                Thank You,{userValues?.full_name}!
              </h1>
            </div>
            <p className="text-primary font-custom-open-sans text-xl m-auto">
              Your order was completed successfully.
            </p>
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="w-full font-bold text-xl text-primary font-custom-open-sans ">
            Order Details
          </div>
          <div className="mt-2">
            <tr className="flex justify-between text-primary text-md">
              <td>Order number</td>
              <td className="font-bold">00-00-00-181</td>
            </tr>
            <tr className="flex justify-between text-primary text-md">
              <td>Order date</td>
              <td className="font-bold">8/04/2024</td>
            </tr>
            <tr className="flex justify-between text-primary text-md">
              <td>Total</td>
              <td className="font-bold">6999/-</td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;

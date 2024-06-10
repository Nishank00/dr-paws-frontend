"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TokenService } from "@/services/Storage.service";
import Button from "@/components/ui/Button";
import ProfileDropdown from "@/components/pages/profile/ProfileDropdown";
import Popup from "@/components/ui/Popup";
import RegisterForm from "@/components/auth/RegisterForm";
import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PiCaretDownBold } from "react-icons/pi";

const MenuBar = ({ show }) => (
  <>
    <div
      className={` hidden sm:hidden md:hidden lg:flex lg:flex-row  lg:justify-around items-center lg:w-[575px] border-solid border-red-700 h-14`}
    >
      <div className="my-1 md:mx-3 ">
        <Link className="text-md flex items-center" href="/clinics">
          <span>Locations1</span>
          {/* <Image
              className={`w-4 h-2   ml-1`}
              src={"dropdown.svg"}
              alt=""
              width={20}
              height={20}
            /> */}
          <PiCaretDownBold />
        </Link>
      </div>
      <div className="my-1 md:mx-3">
        <Link className="text-md" href="/services">
          Our Services
        </Link>
      </div>
      <div className="my-1 md:mx-3">
        <Link className="text-md" href="/team">
          Our Team
        </Link>
      </div>
      <div className="my-1 md:mx-3">
        <Link className="text-md" href="/membership">
          Membership
        </Link>
      </div>
    </div>
    <div>
      {
        <div className={`${show ? "block" : "hidden"} w-full `}>
          <div className="my-1 md:mx-3 ">
            <Link className="text-xl" href="/clinics">
              Locations
            </Link>
          </div>
          <div className="my-1 md:mx-3">
            <Link className="text-xl" href="/services">
              Our Services
            </Link>
          </div>
          <div className="my-1 md:mx-3">
            <Link className="text-xl" href="/team">
              Our Team
            </Link>
          </div>
          <div className="my-1 md:mx-3">
            <Link className="text-xl" href="/membership">
              Membership
            </Link>
          </div>
        </div>
      }
    </div>
  </>
);

export default MenuBar;

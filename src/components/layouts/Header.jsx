"use client"
import * as React from "react";
import { useState } from "react";
import LoginPopUp from "../ui/LoginPopUp";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openLocation, setLocation] = useState(false);
  const [isLoginPopUpOpen, setLoginPopUp] = useState(false);

  const Profile = ["Profile", "Settings", "Logout"];
  const Location = ["Mumbai", "Chennai", "Delhi", "Kolkata"]

  const handleBookVisitClick = () => {
    setLoginPopUp(true);
  }

  const handleCloseLoginPopUp = () => {
    setLoginPopUp(false);
  }
  
  return (
    <div className="justify-center items-center bg-orange-100 flex flex-col px-16 py-5 max-md:px-5 sticky top-0">
      <div className="flex w-full max-w-[1040px] justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33c50d9807ec772184fb6f5d47b95056196041f13665f4a3c3bf67d9f7ee7c2?"
          className="aspect-[2.55] object-contain object-center w-[125px] justify-center items-center overflow-hidden shrink-0 max-w-full"
        />
        <span className="items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
          <span className="justify-between items-stretch flex gap-0">
            <button onClick={()=>setLocation(!openLocation)} className="text-slate-700 text-lg grow relative whitespace-nowrap">
              Locations
              {
              openLocation && <div className="bg-white p-4 w-52 shadow-lg absolute -left-14 top-12"> 
              <ul>
                {
                  Location.map((locations)=>(
                    <li className="p-2 text-lg hover:bg-primary3 rounded cursor-pointer" key={locations}>
                      {locations}
                    </li>
                  ))
                }
              </ul>
              </div>
              }
            </button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0f372d083cf6f9cec23df15e44da8f3bfe6d4be0d4d9c2497390f00bcd7db8b?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
            />
          </span>
          <div className="text-slate-700 text-lg">Our Services</div>
          <div className="text-slate-700 text-lg">Our Team</div>
          <div className="text-slate-700 text-lg grow whitespace-nowrap">
            Membership
          </div>
        </span>
        <div className="items-stretch self-stretch flex justify-between gap-5">
          <button onClick={handleBookVisitClick} className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-slate-500 grow px-14 py-3.5 rounded-[86px] max-md:px-5">
            Book a Visit
          </button>
          {
            isLoginPopUpOpen && <LoginPopUp onClose={handleCloseLoginPopUp}/>
          }
          <div className="justify-center items-center relative border-[color:var(--Accent,#74A7B3)] flex aspect-square flex-col w-[50px] h-[50px] px-3.5 rounded-[71px] border-2 border-solid cursor-pointer">
            <img
              onClick={()=>setOpen(!open)}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f456f7a9bed0628bc91e7851c1beccfa0ff3a43c8c32b0e1c52c5bcaa9d1dae9?"
              className="aspect-square object-contain object-center w-full overflow-hidden"
            />
            {
              open && <div className="bg-white p-4 w-52 shadow-lg absolute -left-14 top-16"> 
              <ul>
                {
                  Profile.map((profile)=>(
                    <li className="p-2 text-lg cursor-pointer rounded hover:bg-primary3 text-primary" key={profile}>
                      {profile}
                    </li>
                  ))
                }
              </ul>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}



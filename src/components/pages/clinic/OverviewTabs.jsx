"use client";
import React, { useState, useEffect } from "react";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import GallaryBox from "./GallaryBox";
import Slider from "./Slider";
import { useParams } from "next/navigation";
import ClinicService from "@/services/Clinic.service";

const OverviewTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [clinic, setClinic] = useState({});
  const { id } = useParams();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const getDataById = () => {
    ClinicService.getData({ id })
      .then((r) => {
        if (r.data.status) {
          setClinic(r.data.data[0]);
          console.log("data=>", r.data.data[0]);
        } else {
          alert(r.data.message);
        }
      })
      .catch(() => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (id) {
      getDataById();
    }
  }, [id]);

  return (
    <div className="w-[100%] m-auto flex-auto justify-center  items-center">
      <div className="w-full py-10">{<GallaryBox />}</div>

      <span className=" self-center flex w-full max-w-[1042px]  items-center justify-between gap-5  max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="   max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[81%] max-md:w-full max-md:ml-0">
              <span className="flex grow flex-col items-stretch max-md:mt-7">
                <div className="text-primary text-4xl font-custom-roca capitalize whitespace-nowrap">
                  {clinic.name || "NA"}
                </div>
                <div className="text-primary text-[22px]  tracking-tight whitespace-nowrap mt-4">
                  Grooming | OPD | Surgery
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[19%] ml-5 max-md:w-full max-md:ml-0"></div>
          </div>
        </div>
        <span className="text-white text-2xl font-custom-open-sans w-60 h-[64px] font-bold  flex justify-center  items-center bg-secondary mt-1 rounded-[43.2px] self-start max-md:px-5">
          Book a Visit
        </span>
      </span>

      <div className="flex flex-col items-start mt-4 text-primary">
        <div className="flex mt-2">
          {["Clinic Details", "'Photos'", "Reviews"].map((tab, index) => (
            <div
              key={index}
              className={` w-[100px] cursor-pointer ${
                index == 0
                  ? "text-left"
                  : index == 2
                  ? "text-right"
                  : "text-center"
              }   mx-1 rounded-full `}
              onClick={() => handleTabClick(index + 1)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="relative w-full h-[5px] bg-primary3 rounded-full mt-2">
          <div
            className="absolute top-0 left-0 h-full bg-secondary rounded-full"
            style={{
              width: `${
                activeTab - 1 == 0 ? "100" : activeTab - 1 == 1 ? "80" : "100"
              }px`, // Adjust based on the number of tabs
              transform: `translateX(${
                activeTab - 1 == 0 ? "0" : activeTab - 1 == 1 ? "120" : "240"
              }px)`, // Adjust based on the number of tabs
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>
      </div>

      <div className="w-[100%] m-auto flex-auto justify-center  items-center">
        {/* Content for Tab 1 */}
        {activeTab === 1 && (
          <div className="p-4">
            <TabOne {...clinic} />
          </div>
        )}

        {/* Content for Tab 2 */}
        {activeTab === 2 && (
          <div className="p-4">
            <TabTwo {...clinic} />
          </div>
        )}

        {/* Content for Tab 3 */}
        {activeTab === 3 && (
          <div className="p-4">
            <TabThree {...clinic} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OverviewTabs;

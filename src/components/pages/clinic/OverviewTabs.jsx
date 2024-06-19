"use client";
import React, { useState, useEffect, useRef } from "react";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import GallaryBox from "./GallaryBox";
import Slider from "./Slider";
import { useParams } from "next/navigation";
import ClinicService from "@/services/Clinic.service";
import BookingButton from "@/components/ui/BookingButton";
import TabFour from "./TabFour";

const OverviewTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [clinic, setClinic] = useState({});
  const { id } = useParams();
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Initialize activeTabIndex to 0
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(165); // Initialize width to 0
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0); // Initialize left position to 0
  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      if (currentTab) {
        setTabUnderlineLeft(currentTab.offsetLeft);
        setTabUnderlineWidth(currentTab.clientWidth);
      }
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  const handleTabClick = (tabNumber) => {
    setActiveTabIndex(tabNumber);
    setActiveTab(tabNumber + 1);
  };

  const getDataById = () => {
    ClinicService.getData({ id })
      .then((r) => {
        if (r.data.status) {
          setClinic(r.data.data[0]);
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
      <div className="sm:w-[70%] p-2 mx-auto py-10">{<GallaryBox />}</div>

      <span className="sm:w-[70%] p-2 mx-auto self-center flex   items-center justify-between gap-5  max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="   max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[81%] max-md:w-full max-md:ml-0">
              <span className="flex grow flex-col items-stretch max-md:mt-7">
                <div className="text-primary text-4xl font-custom-roca capitalize whitespace-nowrap">
                  {clinic.name || "NA"}
                </div>
                <div className="text-primary text-base sm:text-[22px] tracking-tight sm:whitespace-nowrap mt-4">
                  Check-Ups | Surgery | Diagnostics | Grooming | Retail
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[19%] ml-5 max-md:w-full max-md:ml-0"></div>
          </div>
        </div>
        <BookingButton className="text-white cursor-pointer text-2xl font-custom-open-sans w-60 h-[64px] font-bold  flex justify-center  items-center bg-secondary mt-1 rounded-[43.2px] self-start max-md:px-5" />
      </span>

      <div className="flex sm:w-[70%] p-2 mx-auto flex-col items-start mt-4 text-primary">
        <div className="relative w-full">
          <div className="flex overflow-x-auto w-full space-x-8 pb-4 border-b-2 border-b-primary3">
            {["Clinic Details", "Photos", "Reviews", "Vetrenarians"].map((tab, index) => (
              <button
                key={index}
                ref={(el) => (tabsRef.current[index] = el)}
                className={`text-primary text-nowrap font-custom-open-sans w-auto text-md cursor-pointer mx-1 rounded-full mt-12 ${
                  activeTabIndex === index ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <span
            className="absolute bottom-0 block h-1 bg-primary transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
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

        
        {/* Content for Tab 4 */}
        {
          activeTab === 4 && (
            <div className="p-4">
           <TabFour {...clinic} />
            </div>
          )
        }

      </div>
    </div>
  );
};

export default OverviewTabs;

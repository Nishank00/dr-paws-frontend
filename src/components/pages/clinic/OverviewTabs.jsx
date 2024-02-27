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

      <span className="self-center flex w-full max-w-[1042px]  items-stretch justify-between gap-5  max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="px-5 max-md:max-w-full">
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
      <div className="flex mb-4 border-b-2 mt-16">
      
        <button onClick={() => handleTabClick(1)}
          className=' h-full  flex flex-col justify-between items-center'>
          <div className='text-primary text-md  font-semi-bold font-custom-open-sans mt-3'>
          Overview
          </div>
          {activeTab === 1 && <div className='w-full border-2 rounded-full align-baseline border-solid border-secondary'></div>}</button>
        <button />
        <button
          className={`text-slate-700 text-md leading-4 tracking-normal ${activeTab === 2 ? "border-b-2 border-blue-500 " : "text-gray-700"
            } px-4 py-2 ml-10 focus:outline-none`}
          onClick={() => handleTabClick(2)}
        >
          Photo
        </button>
        <button
          className={`text-slate-700 text-md leading-4 tracking-normal ${activeTab === 3 ? "border-b-2 border-blue-500 " : "text-gray-700"
            } px-4 py-2 ml-10 focus:outline-none`}
          onClick={() => handleTabClick(3)}
        >
          Surgery
        </button>
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

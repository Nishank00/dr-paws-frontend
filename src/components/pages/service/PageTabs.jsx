"use client";
import React, { useState, useEffect, useRef } from "react";
import ClinicServiceService from "@/services/ClinicService.service";
import Tab from "./Tab";
import TabModule from "@/components/ui/TabModule";
import Module from "./Module";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
const OverviewTabs = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);
  const [services, setServices] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Initialize activeTabIndex to 0
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0); // Initialize width to 0
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
    setActiveTab(Number(tabNumber) + 1);
    setActiveTabIndex(tabNumber);
  };

  const getServiceData = () => {
    ClinicServiceService.getData()
      .then((r) => {
        if (r.data.status) {
          setServices(r.data.data);
        } else {
          alert(r.data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getServiceData();
  }, [activeTab]);

  return (
    <>
      <div className="w-full mx-auto hidden lg:block  ">
        <div className="flex flex-col items-start mt-4">
          <div className="relative w-full">
            <div className="flex w-full space-x-8 pb-4 border-b">
              {services &&
                services.map((tab, index) => (
                  <button
                    key={index}
                    ref={(el) => (tabsRef.current[index] = el)}
                    className={`text-primary font-custom-open-sans w-auto text-md  cursor-pointer mx-1 rounded-full mt-12 ${
                      activeTabIndex === index ? "font-bold" : "" // Apply bold font style for active tab
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.name}
                  </button>
                ))}
            </div>
            <span
              className="absolute bottom-0 block h-1 bg-primary transition-all duration-300"
              style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            />
          </div>
        </div>
        <div className="w-full md:w-[80%] md:m-auto">
          <p className=" body-padding-y w-[80%] m-auto text-[18px]  font-custom-open-sans italic mt-16 mb-5 text-primary text-center">
            Regular check-ups and preventative measures are essential to keep
            your pet in the best health. Take care of any vaccinations, get any
            help you need, or simply visit us to ensure your pet is doing just
            fine!
          </p>
          <div className="w-full ">
            <Tab {...services[activeTab - 1]} />
          </div>
          <p className=" body-padding-y  w-[80%] m-auto text-lg  font-custom-open-sans italic mt-16 mb-5 text-primary text-center">
            We&apos;ve listed our most commonly requested services, but cater to
            many other needs. If you don&apos;t find what you need please get in
            touch and we&apos;d be happy to help or refer you to someone that
            can
          </p>
          <Button
            onClick={() => router.push("/clinics#suggestion-form")}
            label="Get in Touch"
            className="bg-secondary2 w-[210px] h-[50px] text-[18px] font-custom-open-sans  text-white rounded-full  font-bold block mx-auto mt-4  transition duration-300 ease-in-out hover:bg-olive-500 hover:bg-opacity-80"
          ></Button>
        </div>
      </div>
      <div className="w-full lg:hidden">
        {services &&
          services.map((service, index) => (
            <Module key={index} title={service.name}>
              <div className="w-full py-2 md:w-[80%] md:m-auto">
                <p className="  font-semibold text-md  font-custom-open-sans italic mt-2 mb-5 text-primary text-center">
                  Regular check-ups and preventative measures are essential to
                  keep your pet in the best health. Take care of any
                  vaccinations, get any help you need, or simply visit us to
                  ensure your pet is doing just fine!
                </p>
                <div className="w-full ">
                  <Tab {...services[activeTab - 1]} />
                </div>
                <p className=" body-padding-y text-md  font-custom-open-sans italic mt-16 mb-5 text-primary text-center">
                  We&apos;ve listed our most commonly requested services, but
                  cater to many other needs. If you don&apos;t find what you
                  need please get in touch and we&apos;d be happy to help or
                  refer you to someone that can
                </p>
                <button className="bg-secondary2 w-[210px] h-[50px] text-[18px] font-custom-open-sans  text-white rounded-full  font-bold block mx-auto mt-4  transition duration-300 ease-in-out hover:bg-olive-500 hover:bg-opacity-80">
                  Get in Touch
                </button>
              </div>
            </Module>
          ))}
      </div>
    </>
  );
};

export default OverviewTabs;

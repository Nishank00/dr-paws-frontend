"use client";
import React, { useState, useEffect } from "react";
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

  const handleTabClick = (tabNumber) => {
    setActiveTab(Number(tabNumber) + 1);
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
          <div className="w-full flex  justify-between mt-2">
            {services &&
              services.map((tab, index) => (
                <div
                  key={index}
                  className={`text-primary font-bold  font-custom-open-sans w-auto text-md  cursor-pointer ${
                    index == 0
                      ? "text-left"
                      : index == 6
                      ? "text-right"
                      : "text-center"
                  }   mx-1 rounded-full `}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.name}
                </div>
              ))}
          </div>
          <div className="relative w-full h-[5px] bg-primary3 rounded-full mt-2">
            <div
              className="absolute top-0 left-0 h-full bg-secondary2 rounded-full"
              style={{
                width: `${
                  activeTab - 1 == 0
                    ? "160"
                    : activeTab - 1 == 1
                    ? "190"
                    : activeTab - 1 == 3
                    ? "150"
                    : activeTab - 1 == 4
                    ? "70"
                    : activeTab - 1 == 5
                    ? "100"
                    : activeTab - 1 == 6
                    ? "110"
                    : "100"
                }px`, // Adjust based on the number of tabs
                transform: `translateX(${
                  activeTab - 1 == 0
                    ? "0"
                    : activeTab - 1 == 1
                    ? "224"
                    : activeTab - 1 == 2
                    ? "470"
                    : activeTab - 1 == 3
                    ? "630"
                    : activeTab - 1 == 4
                    ? "835"
                    : activeTab - 1 == 5
                    ? "940"
                    : activeTab - 1 == 6
                    ? "930"
                    : ""
                }px)`, // Adjust based on the number of tabs
                transition: "transform 0.3s ease-in-out",
              }}
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

"use client";
import React, { useState, useEffect } from "react";
import ClinicServiceService from "@/services/ClinicService.service";
import Tab from "./Tab";
import TabModule from "@/components/ui/TabModule";
import Module from "./Module";
const OverviewTabs = () => {
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
        <div className=" w-full flex  justify-between  border-b-2 items-baseline">
          {services &&
            services.map((service, index) => (
              <button
                key={"service" + index}
                className={`text-primary font-bold  font-custom-open-sans w-auto text-md    px-4  focus:outline-none`}
                onClick={() => handleTabClick(index)}
              >
                {service.name}
                {activeTab === Number(index) + 1 && (
                  <div className="h-[7px] mt-1 w-full rounded-full bg-secondary2 align-baseline"></div>
                )}
              </button>
            ))}
        </div>
        <div className="w-full md:w-[80%] md:m-auto">
          <p className=" body-padding-y font-semibold text-md  font-custom-open-sans italic mt-16 mb-5 text-primary text-center">
            Regular check-ups and preventative measures are essential to keep your
            pet in
            the best health. Take care of any vaccinations, get any help you need,
            or simply
            visit us to ensure your pet is doing just fine!
          </p>
          <div className="w-full ">
            <Tab {...services[activeTab - 1]} />
          </div>
          <p className=" body-padding-y font-semibold text-md  font-custom-open-sans italic mt-16 mb-5 text-primary text-center">
            We’ve listed our most commonly requested services, but cater to many other needs.
            If you don’t find what you need please get in touch and we’d be happy to help or
            refer you to someone that can
          </p>
          <button className="bg-secondary2 w-[210px] h-[50px] text-[18px] font-custom-open-sans  text-white rounded-full  font-bold block mx-auto mt-4  transition duration-300 ease-in-out hover:bg-olive-500 hover:bg-opacity-80">
            Get in Touch
          </button>

        </div>

      </div>
      <div className="w-full lg:hidden">

        {services &&
          services.map((service, index) => (
<Module title={service.name}>
<div className="w-full py-2 md:w-[80%] md:m-auto">
          <p className="  font-semibold text-md  font-custom-open-sans italic mt-2 mb-5 text-primary text-center">
            Regular check-ups and preventative measures are essential to keep your
            pet in
            the best health. Take care of any vaccinations, get any help you need,
            or simply
            visit us to ensure your pet is doing just fine!
          </p>
          <div className="w-full ">
            <Tab {...services[activeTab - 1]} />
          </div>
          <p className=" body-padding-y font-semibold text-md  font-custom-open-sans italic mt-16 mb-5 text-primary text-center">
            We’ve listed our most commonly requested services, but cater to many other needs.
            If you don’t find what you need please get in touch and we’d be happy to help or
            refer you to someone that can
          </p>
          <button className="bg-secondary2 w-[210px] h-[50px] text-[18px] font-custom-open-sans  text-white rounded-full  font-bold block mx-auto mt-4  transition duration-300 ease-in-out hover:bg-olive-500 hover:bg-opacity-80">
            Get in Touch
          </button>

        </div>
</Module>
    ))

        }

      </div>
    </>
  );
};

export default OverviewTabs;

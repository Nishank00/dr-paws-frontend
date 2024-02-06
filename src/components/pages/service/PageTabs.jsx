"use client";
import React, { useState, useEffect } from "react";
import ClinicServiceService from "@/services/ClinicService.service";
import Tab from "./Tab";

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
        console.log(err);
      });
  };

  useEffect(() => {
    getServiceData();
  }, [activeTab]);

  return (
    <div className="w-full mx-auto   ">
      <div className=" w-full flex justify-between  border-b-2 items-baseline">
        {services &&
          services.map((service, index) => (
            <button
              key={"service" + index}
              className={`text-slate-700 text-lg leading-4 tracking-normal  px-4  focus:outline-none`}
              onClick={() => handleTabClick(index)}
            >
              {service.name}
              {activeTab === Number(index) + 1 && (
                <div className="h-[7px] mt-4 w-full rounded-full bg-secondary2 align-baseline"></div>
              )}
            </button>
          ))}
      </div>
      <p className=" body-padding-y text-18  mt-4 italic font-bold mb-4 text-primary text-center">
        Regular check-ups and preventative measures are essential to keep your
        pet in <br />
        the best health. Take care of any vaccinations, get any help you need,
        or simply <br />
        visit us to ensure your pet is doing just fine!
      </p>
      <div className="w-full ">
        <Tab {...services[activeTab - 1]} />
      </div>
    </div>
  );
};

export default OverviewTabs;

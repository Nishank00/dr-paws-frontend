"use client";
import React, { useState, useEffect } from "react";
import TabModule from "@/components/ui/TabModule";
import ClinicService from "@/services/Clinic.service";
import ClinicServiceService from "@/services/ClinicService.service";
import ServiceItemList from "./ServiceItemList";
import TabWindow from "./TabWindow";

export default function VerticalTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [serviceList, setServiceList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [activeService, setActiveService] = useState({});

  const activeButonStyle =
    "text-white text-left text-[18px] font-bold capitalize whitespace-nowrap justify-center border-l-[color:var(--Primary-1,#33495F)] bg-[#5281a2] pl-4 pr-16 py-5 border-l-[5px] border-solid items-start max-md:px-5";
  const buttonStyle =
    "text-slate-700 text-[18px] text-left capitalize whitespace-nowrap justify-center items-stretch bg-white pl-4 pr-16 py-5 max-md:pl-5 max-md:pr-7";

  const handleTabClick = (tabId, service_id, service_name) => {
    setActiveTab(tabId);
    getServiceItems(service_id);
    setActiveService({ service_name, service_id });
  };
  const getServices = () => {
    ClinicServiceService.getData()
      .then((r) => {
        if (r.data.status) {
          setServiceList(r.data.data);
          if (serviceList && itemList.length == 0) {
            getServiceItems(serviceList[0].id);
          }
        } else {
          alert(r.data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getServiceItems = (service_id) => {
    ClinicServiceService.getServiceItems({ service_id })
      .then((r) => {
        if (r.data.status) {
          setItemList(r.data.data);
        } else {
          alert(r.data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (!activeService && serviceList) {
      setActiveService({
        service_name: serviceList[0].name,
        service_id: serviceList[0].id,
      });
    }
  }, [serviceList]);
  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <div className="hidden lg:flex h-full mt-[29px]">
        {/* Tab buttons */}
        <div className=" flex flex-col w-[29%] flex-shrink-0">
          {serviceList &&
            serviceList.map((service, index) => (
              <button
                key={service.name + index}
                className={`custom-open-sans tab-button ${
                  activeTab === index && "active-tab"
                } ${activeTab === index ? activeButonStyle : buttonStyle}`}
                onClick={() => handleTabClick(index, service.id, service.name)}
              >
                {service.name}
              </button>
            ))}
        </div>

        {/* Tab content */}
        <div className="flex flex-col items-stretch w-[71%] h-[515px] max-md:w-full max-md:ml-0">
          <TabWindow
            title={activeService.service_name}
            service_id={activeService.service_id || 100}
          />
        </div>
      </div>
      <div className=" w-full flex h-fit md:h-[516px] flex-col lg:hidden">
        {serviceList &&
          serviceList.map((service, index) => (
            <TabModule
              key={index + "service"}
              title={service.name}
              service_id={service.id}
            ></TabModule>
          ))}
      </div>
    </>
  );
}

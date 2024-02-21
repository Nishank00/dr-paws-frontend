import React, { useState, useEffect } from "react";
import ServiceItemList from "../pages/home/ServiceItemList";
import ClinicServiceService from "@/services/ClinicService.service";
import Image from "next/image";

const TabModule = ({ title, children, service_id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemList, setItemList] = useState([]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getServiceItems = () => {
    ClinicServiceService.getServiceItems({ service_id })
      .then((r) => {
        if (r.data.status) {
          setItemList(r.data.data);
        } else {
          alert(r.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (service_id) {
      getServiceItems();
    }
  }, [service_id]);
  return (
    <div className="w-full  mx-auto  border-gray-300  px-10 rounded-lg  ">
      <div className="">
        <div className="flex justify-between items-center  cursor-pointer">
          <button
            onClick={toggleDropdown}
            className={`w-full tab-button border-b border-gray-300 flex justify-between text-white text-md font-bold capitalize whitespace-nowrap  border-l-[color:var(--Primary-1,#33495F)] bg-[#5281a2] pl-7 pr-16 py-5 border-l-[5px] border-solid items-start max-md:px-5`}
          >
            <div>{title}</div>
            <Image
              className={`w-6 h-6  ${
                isOpen ? "transform rotate-180" : ""
              } ml-1`}
              src="dropdown.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>
        </div>
        {isOpen && (
          <div className="w-full   border-gray-300">
            <ServiceItemList service_list={itemList} service_name={title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabModule;

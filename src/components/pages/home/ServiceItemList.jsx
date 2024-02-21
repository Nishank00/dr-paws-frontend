import React, { useState, useEffect } from "react";

const ServiceItemList = ({ service_list, service_name }) => {
  //   const [itemList, setItemList] = useState([]);

  //   const getServiceItems = () => {
  //     ClinicServiceService.getServiceItems({ service_id })
  //       .then((r) => {
  //         if (r.data.status) {
  //           setItemList(r.data.data);
  //         } else {
  //           alert(r.data.message);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   useEffect(() => {
  //     if (service_id) {
  //       getServiceItems();
  //     }
  //   }, [service_id]);

  return (
    <>
      <div className={`tab-content`}>
        <span className="justify-between items-center bg-orange-100 flex grow flex-col w-full px-10 py-10 lg:px-16 lg:py-10 max-md:max-w-full max-md:px-5">
          <div className="text-slate-700  text-center font-custom-roca text-2xl capitalize self-stretch max-md:max-w-full">
            {service_name}
          </div>
          <div className="w-full grid grid-cols-1  lg:grid-cols-2 gap-10 mt-10">
            {service_list &&
              service_list.map((item, index) => (
                <div
                  key={item.name + index}
                  className="justify-between flex gap-2.5 items-start"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 md:text-md lg:text-lg capitalize self-stretch grow whitespace-nowrap">
                    {item.name}
                  </div>
                </div>
              ))}
          </div>
          <div className="text-white m-auto text-base font-bold whitespace-nowrap justify-center items-stretch bg-[#9fa983] mt-20 px-12 py-3.5 rounded-[86px] max-md:mt-10 max-md:px-5">
            View Services
          </div>
        </span>
      </div>
    </>
  );
};

export default ServiceItemList;

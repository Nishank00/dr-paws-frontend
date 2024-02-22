import React, { useEffect } from "react";
import Popup from "@/components/ui/Popup";
import SelectServiceItem from "@/components/pages/booking/SelectServiceItem";
import PetForm from "../petProile/PetForm";
import { useState } from "react";

const SelectServicePage = ({ services = [], setServices, className = "" }) => {
  // Variables
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Methods
  const checkUncheckItem = (item) =>
    setServices(
      services.map((service) => {
        if (service.id == item.id) {
          service.is_checked = !service.is_checked;
        }
        return service;
      })
    );

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  useEffect(() => {
    console.log("services =>", services);
    setServices(
      services.map((service) => ({
        ...service,
        is_checked: false,
      }))
    );
  }, []);

  return (
    <>
      <div className={"pt-10 " + className}>
        <h2 className="text-primary font-medium text-5xl mb-1">
          Select Services
        </h2>
        <p className="text-primary mb-6">Choose from the our services</p>

        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-5 mt-10"
          }
        >
          {services &&
            services.length > 0 &&
            services.map((service) => (
              <SelectServiceItem
                key={"service" + service.id}
                service={service}
                services={services}
                setServices={setServices}
                onChange={checkUncheckItem}
                openPetPopup={openPopup}
              />
            ))}
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <PetForm closePopup={closePopup} />
      </Popup>
    </>
  );
};

export default SelectServicePage;

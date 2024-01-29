import React from "react";
import Button from "@/components/ui/Button";
import Popup from "@/components/ui/Popup";
import SelectServiceItem from "@/components/pages/booking/SelectServiceItem";
import PetForm from "../petProile/PetForm";
import { useState } from "react";

const SelectServicePage = () => {
  // Variables
  const [isPopupOpen, setPopupOpen] = useState(false);

  const [services, setServices] = useState([
    {
      id: 1,
      is_checked: false,
      service_name: "Planned Checkup",
      service_items: [
        { item_name: "Vaccination" },
        { item_name: "health checkup" },
      ],
    },
    {
      id: 2,
      is_checked: false,
      service_name: "Sickness & Emergency",
      service_items: [
        { item_name: "lethargy" },
        { item_name: "vomiting" },
        { item_name: "limping" },
      ],
    },
    {
      id: 3,
      is_checked: false,
      service_name: "Diagnostics",
      service_items: [
        { item_name: "blood test" },
        { item_name: "tick fever test" },
      ],
    },
    {
      id: 4,
      is_checked: false,
      service_name: "Planned Surgeries",
      service_items: [
        { item_name: "Vaccination" },
        { item_name: "health checkup" },
      ],
    },
    {
      id: 5,
      is_checked: false,
      service_name: "Dental",
      service_items: [
        { item_name: "lethargy" },
        { item_name: "vomiting" },
        { item_name: "limping" },
      ],
    },
    {
      id: 6,
      is_checked: false,
      service_name: "Grooming",
      service_items: [{ item_name: "haircut" }, { item_name: "spa" }],
    },
    {
      id: 7,
      is_checked: false,
      service_name: "Pet Services",
      service_items: [{ item_name: "training" }, { item_name: "boarding" }],
    },
  ]);

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
  return (
    <div className="pt-10">
      <h2 className="text-primary font-medium text-5xl mb-1">
        Select Services
      </h2>
      <p className="text-primary mb-6">Choose from the our services</p>

      <Button label={"Add Pet"} onClick={openPopup} />
      <Popup isOpen={isPopupOpen} onClose={closePopup} hideClose={true}>
        <PetForm closePopup={closePopup} />
      </Popup>

      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-5 mt-10"
        }
      >
        {services.map((service) => (
          <SelectServiceItem
            key={service.id}
            service={service}
            onChange={checkUncheckItem}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectServicePage;

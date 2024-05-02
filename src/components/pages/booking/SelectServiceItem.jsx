import ServiceSelect from "@/components/pages/booking/ServiceSelect";
import PetSelect from "@/components/pages/booking/PetSelect";
import React, { useEffect, useState } from "react";

const SelectLabel = ({ heading = "Heading", subheading = "Sub Heading.." }) => {
  return (
    <div className="text-primary font-custom-open-sans">
      <h5 className="font-semibold text-lg">{heading}</h5>
      <p className="text-xs">{subheading}</p>
    </div>
  );
};

const SelectServiceItem = ({
  onChange,
  service = [],
  services,
  setServices,
  openPetPopup,
}) => {
  // Variables
  const [subHeading, setSubHeading] = useState("");

  // Methods
  const onPetSelect = (selectedPet) => {
    setServices(
      services.map((ser) => {
        if (ser.id === service.id) {
          ser.pets.map((pet) => {
            if (pet.id == selectedPet.id) {
              pet.isSelected = !pet.isSelected;
            }
            return pet;
          });
        }
        return ser;
      })
    );
  };

  useEffect(() => {
    let str = (service.childs || [])
      .map((service_item) => service_item.name)
      .join();

    setSubHeading(str.slice(0, 20) + " ...");
  }, []);

  return (
    <div
      className={`bg-primary3 rounded-lg flex flex-col h-full
          ${service.is_checked == true ? " border-2 border-secondary" : ""}`}
    >
      <div className="p-2">
        <ServiceSelect
          isChecked={service.is_checked}
          onChange={() => onChange(service)}
          label={<SelectLabel heading={service.name} subheading={subHeading} />}
        />
      </div>

      {service.is_checked && (
        <div className=" bg-white  p-3 rounded-md ">
          <p className="text-primary mb-2">Select your pet/pets</p>
          <div className="flex flex-wrap justify-start gap-5">
            {service.pets.map((pet) => (
              <PetSelect
                onSelect={() => onPetSelect(pet)}
                key={`service_${service.id}_pet_${pet.id}`}
                pet={pet}
              />
            ))}

            <div className="flex flex-col items-center gap-1">
              <div
                onClick={openPetPopup}
                className={`w-12 h-12 rounded-full cursor-pointer hover:bg-primary3 flex items-center justify-center border-2 border-dashed border-secondary3`}
              >
                <span className="text-[#7E8AA2] text-lg">+</span>
              </div>
              <p className="text-sm">Add Pet</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectServiceItem;

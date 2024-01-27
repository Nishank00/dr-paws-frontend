import ServiceSelect from "@/components/pages/booking/ServiceSelect";
import PetSelect from "@/components/pages/booking/PetSelect";
import React, { useState } from "react";

const SelectLabel = ({ heading = "Heading", subheading = "Sub Heading.." }) => {
  return (
    <div className="text-primary">
      <h5 className="font-bold text-lg">{heading}</h5>
      <p className="text-sm">{subheading}</p>
    </div>
  );
};

const SelectServiceItem = ({
  onChange,
  service = [
    {
      id: 5,
      service_name: "Dental",
      service_items: [
        { item_name: "lethargy" },
        { item_name: "vomiting" },
        { item_name: "limping" },
      ],
    },
  ],
}) => {
  const [pets, setPets] = useState([
    {
      id: 1,
      isSelected: false,
      name: "Ranbir Kapoor",
      image: "https://images.app.goo.gl/91tsi3DsxKVJKKZi6",
    },
    {
      id: 2,
      isSelected: false,
      name: "Ranveer Kapoor",
      image: "https://images.app.goo.gl/91tsi3DsxKVJKKZi6",
    },
    {
      id: 3,
      isSelected: false,
      name: "Dhawan",
      image: "https://images.app.goo.gl/91tsi3DsxKVJKKZi6",
    },
    {
      id: 4,
      isSelected: false,
      name: "Aditya",
      image: "https://images.app.goo.gl/91tsi3DsxKVJKKZi6",
    },
  ]);

  const onPetSelect = (selectedPet) => {
    setPets(
      pets.map((pet) => {
        if (pet.id == selectedPet.id) {
          pet.isSelected = !pet.isSelected;
        }
        return pet;
      })
    );
  };

  return (
    <div
      className={`bg-primary3 rounded-lg flex flex-col
          ${service.is_checked == true ? " border-2 border-secondary" : ""}`}
    >
      <div className="p-2">
        <ServiceSelect
          isChecked={service.is_checked}
          onChange={() => onChange(service)}
          label={
            <SelectLabel
              heading={service.service_name}
              subheading={` ${
                (service.service_items || [])
                  .map((service_item) => service_item.item_name)
                  .join() || "Sub Heading"
              } ...`}
            />
          }
        />
      </div>

      {service.is_checked && (
        <div className="p-4 bg-white rounded-lg">
          <p className="text-primary">Select your pet/pets</p>
          <div className="flex justify-start gap-5 pt-4">
            {pets.map((pet) => (
              <PetSelect
                onSelect={() => onPetSelect(pet)}
                key={service.service_name + pet.id}
                pet={pet}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectServiceItem;

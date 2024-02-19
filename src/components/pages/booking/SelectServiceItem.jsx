import ServiceSelect from "@/components/pages/booking/ServiceSelect";
import PetSelect from "@/components/pages/booking/PetSelect";
import React, { useEffect, useState } from "react";
import PetService from "@/services/Pet.Service";

const SelectLabel = ({ heading = "Heading", subheading = "Sub Heading.." }) => {
  return (
    <div className="text-primary">
      <h5 className="font-bold text-lg">{heading}</h5>
      <p className="text-sm">{subheading}</p>
    </div>
  );
};

const SelectServiceItem = ({ onChange, service = [] }) => {
  const [subHeading, setSubHeading] = useState("");
  const [pets, setPets] = useState([]);

  const getPets = () => {
    PetService.getPetsByUserId(5)
      .then((response) => {
        if (response.data.status) {
          setPets(
            response.data.data.map((pet) => ({ ...pet, isSelected: false }))
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  useEffect(() => {
    let str = (service.childs || [])
      .map((service_item) => service_item.name)
      .join();

    setSubHeading(str.slice(0, 20) + " ...");
    getPets();
  }, []);

  return (
    <div
      className={`bg-primary3 rounded-lg flex flex-col
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
        <div className="p-4 bg-white rounded-lg">
          <p className="text-primary">Select your pet/pets</p>
          <div className="flex flex-nowrap justify-start gap-5 pt-4">
            {pets.map((pet) => (
              <PetSelect
                onSelect={() => onPetSelect(pet)}
                key={`service_${service.id}_pet_${pet.id}`}
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

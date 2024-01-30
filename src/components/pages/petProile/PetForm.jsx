import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import React, { useState } from "react";
import Select from "@/components/ui/Select";

const PetForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({ pet_name: "", pet_type: null });

  const setPetName = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-primary3 w-96 p-5 rounded-lg">
      <h4 className="text-primary text-center font-bold mb-4 text-3xl">
        Add a pet
      </h4>

      <TextInput
        name="pet_name"
        value={formData.pet_name}
        placeholder={"Pet's Name"}
        onChange={setPetName}
      />

      <Select
        value={formData.pet_type}
        placeholder={"Type of Pet"}
        onChange={setPetName}
      />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <Button type="primary3" label="Cancel" onClick={closePopup} />
        <Button type="secondary" label="Save" />
      </div>
    </div>
  );
};

export default PetForm;

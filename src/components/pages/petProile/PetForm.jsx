import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import Select from "@/components/ui/Select";
import PetService from "@/services/Pet.Service";
import UploadProfile from "@/components/auth/UploadProfile";
import { useToast } from "@/components/ui/ToastProvider";

const PetForm = ({ closePopup, onPetAdded = () => {}, pet_id }) => {
  // Variables
  const showToast = useToast();
  const [formData, setFormData] = useState({
    pet_image: null,
    name: null,
    pet_type: null,
    breed: null,
    gender: null,
    date_of_birth: null,
    age: null,
    weight: null,
  });
  const [petTypes, setPetTypes] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [genders, setGenders] = useState([
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" },
  ]);

  const requiredFields = ["name", "pet_type"];

  // Methods
  const profileUploaded = (filename) => {
    setFormData({ ...formData, pet_image: filename });
  };

  const updateFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name == "date_of_birth") {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      setFormData({ ...formData, age });
    }
  };

  const getPetsType = () => {
    PetService.getPetTypes()
      .then((response) => {
        if (!response.data.status) return;
        setPetTypes(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getBreeds = () => {
    if (!formData.pet_type) return;

    PetService.getPetBreeds({ parent_id: formData.pet_type })
      .then((response) => {
        if (!response.data.status) return;
        setBreeds(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const selectPetType = (selectedValue) => {
    setFormData({ ...formData, pet_type: selectedValue });
  };

  const selectBreed = (selectedValue) => {
    setFormData({ ...formData, breed: selectedValue });
  };

  const selectGender = (selectedValue) => {
    setFormData({ ...formData, gender: selectedValue });
  };
  const submitForm = () => {
    const allFieldsPresent = requiredFields.every((field) => formData[field]);

    if (allFieldsPresent) {
      const payload = {
        ...formData,
        user_id: JSON.parse(localStorage.getItem("user_info")).id,
      };

      PetService.savePet(payload)
        .then((response) => {
          if (response.data.status) {
            showToast("Pet Added Successfully", "success");
            console.log(response.data.data);
            onPetAdded();
            closePopup();
          }
        })
        .catch((error) => console.log(error.message));
    } else {
      // Handle case where not all fields are present
      showToast(
        "Please fill in all fields before submitting the form.",
        "warning"
      );
    }
  };

  console.log("petTypes", petTypes);

  // Lifecycle Hooks
  useEffect(() => {
    getPetsType();
  }, []);

  useEffect(() => {
    getBreeds();
  }, [formData.pet_type]);

  return (
    <div className="bg-primary3 w-96 p-5 rounded-lg">
      <h4 className="text-primary text-center font-bold mb-4 text-3xl">
        Add a pet
      </h4>
      <UploadProfile onUpload={profileUploaded} />

      <TextInput
        name="name"
        value={formData.name}
        placeholder={"Pet's Name"}
        onChange={updateFormData}
        classes="md:mb-4"
      />

      <Select
        name="pet_type"
        value={formData.pet_type}
        options={petTypes}
        optionLabel={"name"}
        optionValue={"id"}
        placeholder={"Type of Pet"}
        onSelect={selectPetType}
      />

      <Select
        name="breed"
        value={formData.breed}
        options={breeds}
        optionLabel={"name"}
        optionValue={"id"}
        placeholder={"Breed"}
        onSelect={selectBreed}
      />

      <div className="grid grid-cols-2 gap-x-2">
        <Select
          name="gender"
          value={formData.gender}
          options={genders}
          optionLabel={"label"}
          optionValue={"value"}
          placeholder={"Gender"}
          onSelect={selectGender}
        />

        <TextInput
          type="date"
          name="date_of_birth"
          value={formData.date_of_birth}
          placeholder={"Date of Birth"}
          onChange={updateFormData}
        />

        <TextInput
          type="number"
          name="age"
          value={formData.age}
          placeholder={"Age"}
          onChange={updateFormData}
          classes="md:mb-4"
        />

        <TextInput
          type="number"
          name="weight"
          value={formData.weight}
          placeholder={"Weight"}
          onChange={updateFormData}
          classes="md:mb-4"
        />
      </div>

      <div className="flex items-center justify-between gap-5">
        <Button
          color="primary4"
          label="Cancel"
          onClick={closePopup}
          className="bg-primary3 text-secondary border-2 border-secondary hover:text-white hover:bg-secondary"
        />
        <Button color="secondary" label="Save" onClick={submitForm} />
      </div>
    </div>
  );
};

export default PetForm;

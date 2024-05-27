import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import Select from "@/components/ui/Select";
import PetService from "@/services/Pet.Service";
import UploadProfile from "@/components/auth/UploadProfile";
import { useToast } from "@/components/ui/ToastProvider";
import moment from "moment";

const PetForm = ({ closePopup, onPetAdded = () => {}, pet_id, petData }) => {
  // Variables
  const showToast = useToast();
  const [formData, setFormData] = useState({
    pet_image: "",
    pet_name: "",
    pet_type: "",
    breed: "",
    gender: "",
    date_of_birth: "",
    age: 0,
    weight: 0,
    otherBreed: "",
  });
  const [petTypes, setPetTypes] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [isOthersSelected, setIsOthersSelected] = useState(false);
  const [genders, setGenders] = useState([
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" },
  ]);

  // Methods
  const profileUploaded = (filename) => {
    setFormData({ ...formData, pet_image: filename });
  };

  const updateFormData = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setFormData({ ...formData, [name]: value });
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
    console.log("selectedValue", selectedValue, selectedValue === "12");
    setFormData({ ...formData, pet_type: selectedValue });
    if (selectedValue === "12") {
      setIsOthersSelected(true);
    } else {
      setIsOthersSelected(false);
    }
  };

  console.log("isOthersSelected", isOthersSelected);

  const selectBreed = (selectedValue) => {
    setFormData({ ...formData, breed: selectedValue });
  };

  const selectGender = (selectedValue) => {
    setFormData({ ...formData, gender: selectedValue });
  };

  const submitForm = () => {
    const payload = {
      ...formData,
      breed: isOthersSelected ? formData.otherBreed : formData.breed,
      user_id: JSON.parse(localStorage.getItem("user_info")).id,
    };
    if (pet_id) payload.id = pet_id;

    (pet_id ? PetService.updatePet(payload) : PetService.savePet(payload))
      .then((response) => {
        if (response.data.status) {
          showToast(
            `Pet ${pet_id ? "Updated" : "Added"} Successfully`,
            "success"
          );
          onPetAdded();
          closePopup();
        }
      })
      .catch((error) => console.log(error.message));
  };

  const getPet = () => {
    PetService.getPets({ pet_id })
      .then((response) => {
        if (!response.data.status) return;
        const data = response.data.data[0];
        setFormData({
          pet_image: data.pet_image,
          name: data.name,
          pet_type: data.pet_type,
          breed: data.breed,
          gender: data.gender,
          date_of_birth: data.date_of_birth
            ? moment(data.date_of_birth).format("YYYY-MM-DD")
            : null,
          age: data.age,
          weight: data.weight,
        });
      })
      .catch((error) => console.log(error.message));
  };
  // Lifecycle Hooks
  useEffect(() => {
    getPetsType();
    setTimeout(() => {
      if (pet_id) {
        setFormData({
          pet_image: petData.pet_image,
          name: petData.name,
          pet_type: petData.pet_type,
          breed: petData.breed,
          gender: petData.gender,
          date_of_birth: petData.date_of_birth
            ? moment(petData.date_of_birth).format("YYYY-MM-DD")
            : null,
          age: petData.age,
          weight: petData.weight,
        });
      }
    }, 1500);
  }, []);

  useEffect(() => {
    getBreeds();
  }, [formData.pet_type]);

  return (
    <div className="bg-primary3 w-96 p-5 rounded-lg">
      <h4 className="text-primary text-center font-bold font-custom-roca mb-4 text-3xl">
        {pet_id ? "Update Pet" : "Add a Pet"}
      </h4>
      <UploadProfile onUpload={profileUploaded} image={formData.pet_image} />

      <TextInput
        type="text"
        name="pet_name"
        value={formData.pet_name}
        placeholder={"Pet's Name"}
        onChange={updateFormData}
        classes="md:mb-4"
      />

      <Select
        name="pet_type"
        selectedValue={formData.pet_type}
        options={petTypes}
        optionLabel={"name"}
        optionValue={"id"}
        placeholder={"Type of Pet"}
        onSelect={selectPetType}
      />

      {breeds.length > 0 && (
        <Select
          name="breed"
          selectedValue={formData.breed}
          options={breeds}
          optionLabel={"name"}
          optionValue={"id"}
          placeholder={"Breed"}
          onSelect={selectBreed}
        />
      )}

      {isOthersSelected && (
        <TextInput
          type="text"
          name="otherBreed"
          value={formData.otherBreed}
          placeholder={"Enter your pet breed"}
          onChange={updateFormData}
        />
      )}

      <div className="grid grid-cols-2 gap-x-2">
        <Select
          name="gender"
          selectedValue={formData.gender}
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
          className="bg-primary3 text-secondary border-2 border-secondary hover:text-white hover:bg-secondary w-40 h-12"
        />
        <Button
          color="secondary"
          label="Save"
          onClick={submitForm}
          className="w-40 h-12"
        />
      </div>
    </div>
  );
};

export default PetForm;

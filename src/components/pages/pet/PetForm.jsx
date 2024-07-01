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
    other_breed: "",
    color: "",
  });
  const [petTypes, setPetTypes] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [isOthersSelected, setIsOthersSelected] = useState(false);
  const [genders, setGenders] = useState([]);
  const [color, setColor] = useState([]);

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

  const selectPetType = async (selectedValue) => {
    console.log("selectedValue", selectedValue, selectedValue === "12");

    setFormData({ ...formData, pet_type: selectedValue });

    function getVetportBreedList() {
      return PetService.getPetBreedList({
        limit: 1000,
        speciesId: selectedValue,
      });
    }

    function getVetportSpeciesGenderList() {
      return PetService.getPetSpeciesGenderList({
        limit: 1000,
        speciesId: selectedValue,
      });
    }

    const [breedResponse, genderResponse] = await Promise.all([
      getVetportBreedList(),
      getVetportSpeciesGenderList(),
    ]);

    console.log({ breedResponse, genderResponse });

    if (!breedResponse?.data.status)
      return showToast("No breeds found", "error");

    if (!genderResponse?.data.status)
      return showToast("No pet gender found", "error");

    setBreeds(breedResponse?.data.data);
    setGenders(genderResponse?.data.data);

    // if (selectedValue === "12") {
    //   setIsOthersSelected(true);
    // } else {
    //   setIsOthersSelected(false);
    // }
  };

  const selectBreed = async (selectedValue) => {
    setFormData({ ...formData, breed: selectedValue });
    const petColorResponse = await PetService.getPetColorList({
      limit: 1000,
      speciesId: formData.pet_type,
      breedId: selectedValue,
    });

    if (!petColorResponse?.data.status)
      return showToast("No pet colors found", "error");

    setColor(petColorResponse?.data.data);
  };

  const selectGender = (selectedValue) => {
    setFormData({ ...formData, gender: selectedValue });
  };

  const selectColorType = (selectedValue) => {
    setFormData({ ...formData, color: selectedValue });
  };

  const submitForm = () => {
    let { other_breed, ...restFormData } = formData;
    const payload = {
      ...restFormData,
      user_id: JSON.parse(localStorage.getItem("user_info")).vetport_client_id,
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
    try {
      // const response = await PetService.getPets({ pet_id });

      if (!petData) return;
      const data = petData;
      console.log({ data }, "1234");
      setFormData({
        pet_image: data.pet_image,
        pet_name: data.name,
        pet_type: data.speciesId,
        breed: data.breedId,
        gender: data.sexId,
        date_of_birth: data.date_of_birth
          ? moment(data.date_of_birth).format("YYYY-MM-DD")
          : null,
        age: data.age,
        weight: data.weight,
      });
    } catch (error) {
      console.log({ error }, "from getPets");
    }
  };

  const getPetsType = async () => {
    try {
      let payload = {
        status: "Active",
        limit: 1000,
      };
      const response = await PetService.getPetSpeciesList(payload);
      const { data = [] } = response;

      if (data?.status) {
        setPetTypes(data?.data || []);
      }
    } catch (error) {
      console.log({ error }, "from getting species list");
    }
  };
  const getPetsSavedData = async () => {
    try {
      await getPetsType();
      await selectPetType(petData.speciesId);
      getPet();
    } catch (error) {
      console.log(error, "Error from get pets save data");
    }
  };
  // Lifecycle Hooks
  useEffect(() => {
    // getPetsType().then(() => {
    //   console.log({ formData });
    //   getPet();
    // });
    getPetsSavedData();
  }, []);

  // useEffect(() => {
  //   getBreeds();
  // }, [formData.pet_type]);

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
          name="other_breed"
          value={formData.other_breed}
          placeholder={"Enter your pet breed"}
          onChange={updateFormData}
        />
      )}

      <div className="grid grid-cols-2 gap-x-2">
        <Select
          name="gender"
          selectedValue={formData.gender}
          options={genders}
          optionLabel={"sex"}
          optionValue={"id"}
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

      {color.length > 0 && (
        <Select
          name="color"
          selectedValue={formData.color}
          options={color}
          optionLabel={"color"}
          optionValue={"id"}
          placeholder={"Pet Color"}
          onSelect={selectColorType}
        />
      )}
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

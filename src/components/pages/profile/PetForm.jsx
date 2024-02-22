import React, { useState, useEffect } from "react";
import Popup from "@/components/ui/Popup";
import Select from "@/components/ui/Select";
import PetService from "@/services/Pet.Service";
import UploadProfile from "@/components/auth/UploadProfile";
const PetForm = ({ user_id, getPets, petData }) => {
  const gridData = [1, 2, 3, 4, 5];
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [pet, setPet] = useState({
    pet_type: null,
    breed: null,
    user_id: null,
    name: null,
    gender: null,
    age: null,
    date_of_birth: null,
    weight: null,
  });
  const [petTypes, setPetTypes] = useState();
  const [breeds, setBreeds] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const getPetsType = () => {
    PetService.getPetTypes()
      .then((r) => {
        if (r.data.status) {
          setPetTypes(r.data.data);
        } else {
          alert(r.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPetBreedData = (data) => {
    // let payload = {};
    // pet.pet_type && (payload.parent_id = pet.pet_type)
    PetService.getPetBreeds(data)
      .then((r) => {
        if (r.data.status) {
          setBreeds(r.data.data);
        } else {
          alert(r.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hanldeSubmit = () => {
    let payload = { ...pet, user_id };
    PetService.savePet(payload)
      .then((r) => {
        if (r.data.status) {
          handleCancel();
          console.log("getpets start");
          getPets();
          console.log("getpets end");
        } else {
          alert(r.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePetTypeChange = (e) => {
    setPet({ ...pet, pet_type: e.target.value });
    console.log("pet_type_id=>", e.target.value);
    getPetBreedData({ parent_id: e.target.value });
  };
  const handleCancel = () => {
    closePopup();
    setPet({
      pet_type: null,
      breed: null,
      user_id: null,
      name: null,
      gender: null,
      age: null,
      date_of_birth: null,
      weight: null,
    });
  };
  useEffect(() => {
    if (petData) {
      getPetsType();
      getPetBreedData({ parent_id: petData.pet_type });
      setPet({ ...petData });
    } else {
      getPetsType();
    }
  }, []);
  return (
    <>
      <div>
        <button
          onClick={openPopup}
          className="justify-center items-stretch w-[180px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-8 py-4 rounded-[86px] border-2 border-solid"
        >
          <div className="text-primary">
            {petData ? "Edit Profile" : "Add Pet"}
          </div>
        </button>
      </div>
      <Popup isOpen={isOpen} onClose={closePopup} hideClose>
        <div className="bg-primary3 w-[430px] flex flex-col py-5 justify-center items-center pt-10 ">
          <div className=" w-full  flex justify-center items-center text-xl text-primary">
            {petData ? "Edit Profile" : "Add Pet"}
          </div>
          <div className="">
            <UploadProfile onUpload={() => {}} />
          </div>
          <div className="w-[80%]">
            <input
              className="input rounded-lg px-4 py-2 w-full border-2 border-secondary2 text-lg text-primary"
              placeholder="Pets name"
              value={pet.name}
              onChange={(e) => setPet({ ...pet, name: e.target.value })}
            />
          </div>
          <div className="w-[80%] mt-5">
            <select
              value={pet.pet_type}
              onChange={(e) => handlePetTypeChange(e)}
              class="rounded-lg px-4 py-3 w-full border-2 border-secondary2 text-lg text-primary"
            >
              <option value="" disabled selected>
                Select your pet
              </option>

              {petTypes &&
                petTypes.map((pettype, index) => (
                  <option key={index} value={pettype.id}>
                    {pettype.name}
                  </option>
                ))}
            </select>
          </div>
          {pet.pet_type && (
            <div className="w-[80%] mt-5">
              <select
                value={pet.breed}
                onChange={(e) => setPet({ ...pet, breed: e.target.value })}
                class="rounded-lg px-4 py-3 w-full border-2 border-secondary2 text-lg text-primary"
              >
                <option value="" disabled selected>
                  Select your pet
                </option>

                {breeds &&
                  breeds.map((pettype, index) => (
                    <option key={index + petData?.id} value={pettype?.id}>
                      {pettype.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
          {pet.breed && (
            <>
              <div className="flex justify-between w-[80%] m-auto mt-4">
                <div className="w-[45%] flex flex-col">
                  <select
                    value={pet.gender}
                    onChange={(e) => setPet({ ...pet, gender: e.target.value })}
                    class="rounded-lg px-4 py-3 w-full border-2 border-secondary2 text-lg text-primary"
                  >
                    <option value="" disabled selected>
                      {" "}
                      Gender
                    </option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>
                <div className="w-[45%] flex flex-col">
                  <input
                    className="input rounded-lg px-4 py-3 border-2 border-secondary2 text-md text-primary"
                    placeholder="Age"
                    onChange={(e) => setPet({ ...pet, age: e.target.value })}
                    value={pet.age}
                  />
                </div>
              </div>
              <div className="flex justify-between w-[80%] m-auto mt-4">
                <div className="w-[45%] flex flex-col">
                  <input
                    type="date"
                    className="input rounded-lg px-4 py-3 border-2 border-secondary2 text-md text-primary"
                    placeholder="Age"
                    onChange={(e) =>
                      setPet({ ...pet, date_of_birth: e.target.value })
                    }
                    value={pet.date_of_birth}
                  />
                </div>
                <div className="w-[45%] flex flex-col">
                  <input
                    className="input rounded-lg px-4 py-3 border-2 border-secondary2 text-md text-primary"
                    placeholder="Weight (Kg}"
                    onChange={(e) => setPet({ ...pet, weight: e.target.value })}
                    value={pet.weight}
                  />
                </div>
              </div>
              <div className="flex  justify-between  w-[80%] m-auto mt-5">
                <button
                  onClick={() => handleCancel()}
                  className="justify-center items-stretch w-[156px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-8 py-3 rounded-[86px] border-2 border-solid"
                >
                  Cancel
                </button>

                <button
                  onClick={hanldeSubmit}
                  className="text-white text-base font-bold  w-[156px] leading-4 tracking-normal justify-center items-center bg-slate-500 max-w-[160px] px-16 py-3 rounded-[86px]"
                >
                  Save
                </button>
              </div>
            </>
          )}
        </div>
      </Popup>
    </>
  );
};

export default PetForm;

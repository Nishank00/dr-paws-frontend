import React, { useState, useEffect } from "react";
import Popup from "@/components/ui/Popup";
import Select from "@/components/ui/Select";
import PetService from "@/services/Pet.Service";
import UploadProfile from "@/components/auth/UploadProfile";
import Button from "@/components/ui/Button";
import Image from "next/image";
const PetForm = ({ user_id, getPets, petData,getPetData }) => {
  const gridData = [1, 2, 3, 4, 5];
  const [isOpen, setIsOpen] = useState(false);
  const [ishover, setIsHover] = useState(false);
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
    pet_image:null,
  });
  const [petTypes, setPetTypes] = useState();
  const [breeds, setBreeds] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    if(petData){
      getPetData();
    }
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
        console.log(err.message);
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
        console.log(err.message);
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
        console.log(err.message);
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
      pet_image:null
    });
  };
  const onUpload=(url)=>{
setPet({...pet,pet_image:url})
  }
  useEffect(() => {
    if (petData) {
      console.log("petdatain petForm=>",petData)
      getPetsType();
      getPetBreedData({ parent_id: petData.pet_type });
      setPet(petData);
    } else {
      getPetsType()
    }
  }, [petData]);
  return (
    <>
      <div>
        <button
          onClick={openPopup}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={`justify-center  items-center font-custom-open-sans text-sm font-semibold  ${
            petData ? "w-[70px] md:w-[96px]" : " w-[90px] md:w-[166px]"
          } ${petData?"md:h-[40px]":"md:h-[50px]"} border-[color:var(--Secondary-1,#5281A2)] flex gap-2  rounded-full border-2 border-solid text-secondary hover:text-white hover:bg-secondary`}
        >
          {/* <div className="w-full flex items-center "> */}
          {!petData && (
            <Image
              src={ishover ? "plus_white_icon.svg" : "plus_blue_icon.svg"}
              alt=""
              width={12.5}
              height={11.5}
            />
          )}

          {petData ? "Edit" : "Add Pet"}
          {/* </div> */}
        </button>
      </div>
      <Popup isOpen={isOpen} onClose={closePopup} hideClose>
        <div className="bg-primary3 w-[430px] rounded-md flex flex-col py-5 justify-center items-center pt-6 ">
          <div className=" w-full  flex justify-center items-center text-2xl font-custom-roca text-secondary">
            {petData ? "Edit Profile" : "Add Pet"}
          </div>
          <div className="">
            <UploadProfile onUpload={onUpload}  image={pet.pet_image}/>
          </div>
          <div className="w-[80%]">
            <input
              className="input rounded-lg px-4 py-2 w-full border-2  text-md text-primary"
              placeholder="Pets name"
              value={pet.name}
              onChange={(e) => setPet({ ...pet, name: e.target.value })}
            />
          </div>
          <div className="w-[80%] mt-5">
            <select
              value={pet.pet_type}
              onChange={(e) => handlePetTypeChange(e)}
              class="rounded-lg px-4  font-custom-open-sans h-[45px] w-full border-2  text-md text-primary"
            >
              <option
                className=" text-sm font-custom-open-sans"
                value=""
                disabled
                selected
              >
                Select your pet
              </option>

              {petTypes &&
                petTypes.map((pettype, index) => (
                  <option
                    className=" text-sm font-custom-open-sans"
                    key={index}
                    value={pettype.id}
                  >
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
                class="rounded-lg px-4  w-full border-2 h-[45px] text-md text-primary"
              >
                <option value="" disabled selected>
                  Select your pet
                </option>

                {breeds &&
                  breeds.map((pettype, index) => (
                    <option
                      className=" text-sm font-custom-open-sans"
                      key={index + petData?.id}
                      value={pettype?.id}
                    >
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
                    class="rounded-lg px-4  w-full h-[45px] border-2  text-md text-primary"
                  >
                    <option
                      className=" text-sm font-custom-open-sans"
                      value=""
                      disabled
                      selected
                    >
                      {" "}
                      Gender
                    </option>
                    <option
                      className=" text-sm font-custom-open-sans"
                      value="MALE"
                    >
                      Male
                    </option>
                    <option
                      className=" text-sm font-custom-open-sans"
                      value="FEMALE"
                    >
                      Female
                    </option>
                  </select>
                </div>
                <div className="w-[45%] flex flex-col">
                  <input
                    className="input rounded-lg px-4 font-custom-open-sans h-[45px] border-2  text-md text-primary"
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
                    className="input rounded-lg px-4 font-custom-open-sans border-2 h-[45px] text-md text-primary"
                    placeholder="Age"
                    onChange={(e) =>
                      setPet({ ...pet, date_of_birth: e.target.value })
                    }
                    value={pet.date_of_birth}
                  />
                </div>
                <div className="w-[45%] flex flex-col">
                  <input
                    className="input rounded-lg px-4 h-[45px] border-2 text-md text-primary"
                    placeholder="Weight (Kg}"
                    onChange={(e) => setPet({ ...pet, weight: e.target.value })}
                    value={pet.weight}
                  />
                </div>
              </div>
              <div className="flex  justify-between  w-[80%] m-auto mt-5 h-[50px]">
                <button
                  onClick={() => handleCancel()}
                  className=" w-[150px] border-2 border-solid border-[color:var(--Secondary-1,#5281A2)]  rounded-full text-sm font-bold font-custom-open-sans text-primary hover:text-white hover:bg-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={hanldeSubmit}
                  className=" w-[150px] border-2 border-solid border-[color:var(--Secondary-1,#5281A2)]  rounded-full text-sm font-bold font-custom-open-sans text-primary hover:text-white hover:bg-secondary"
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

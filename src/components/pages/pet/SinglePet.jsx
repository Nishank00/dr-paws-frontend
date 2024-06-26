import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import DocumentCard from "./DocumentCard";
import MedicalHistory from "./MedicalHistory";
import PetService from "@/services/Pet.Service";
import { useToast } from "@/components/ui/ToastProvider";
import moment from "moment";
import Popup from "@/components/ui/Popup";
import PetForm from "./PetForm";

const SinglePet = ({ pet_id }) => {
  const showToast = useToast();
  const [petData, setPetData] = useState({});
  const [showEdit, setShowEdit] = useState(false);

  const openEditPopup = () => setShowEdit(true);
  const closeEditPopup = () => setShowEdit(false);

  const getPetData = () => {
    PetService.getPets({ pet_id })
      .then((response) => {
        if (!response.data.status) {
          return showToast(response.data.message, "warning");
        }
        setPetData(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPetData();
  }, []);

  return (
    <div className="body-padding-y">
      {petData.pet_membership &&
        Object.keys(petData.pet_membership).length > 0 && (
          <div className="flex items-center gap-8 bg-secondary p-5 rounded-t-xl ">
            <img
              src={`/membership/${petData.pet_membership?.image}`}
              alt=""
              className="w-40"
            />

            <div className="flex items-center flex-col md:flex-row gap-3 md:gap-0 justify-between w-full">
              <div>
                <h4 className="text-lg font-custom-roca">
                  {petData.pet_membership?.title || "NA"}
                </h4>
                <p className="text-xs font-custom-open-sans italic">
                  Expires on:{" "}
                  {petData.pet_membership?.membership_expires_at
                    ? moment(
                        petData.pet_membership?.membership_expires_at
                      ).format("LL")
                    : "NA"}
                </p>
              </div>

              <Button
                color="secondary"
                label="Manage Plan"
                className="border-2 border-primary2 w-36 h-10 hover:bg-primary3 hover:text-secondary"
              />
            </div>
          </div>
        )}

      <div className="flex flex-col md:flex-row gap-6 bg-primary3 p-4 sm:p-6 md:p-8 text-primary font-custom-open-sans rounded-xl">
        <div className="flex md:justify-end gap-4 w-full md:w-[20%]">
          <div
            id="icon"
            className="w-10 h-10 md:w-40 md:h-40 rounded-full"
            style={{
              backgroundImage: `url(${
                petData.pet_image
                  ? process.env.NEXT_PUBLIC_API_UPLOAD_URL +
                    "/" +
                    petData.pet_image
                  : petData?.pet_type_name == "Dog"
                  ? "/home/dog.png"
                  : "/home/cat_cartoon.png"
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />

          <h3 className="md:hidden text-lg text-secondary font-custom-roca">
            {petData.name || "Not Available"}
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-8 w-full md:w-[70%]">
          <h3 className="col-span-3 hidden md:block text-2xl text-secondary font-custom-roca">
            {petData.name || "Not Available"}
          </h3>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Type of Pet</p>
            <h4 className="text-lg">{petData.pet_type_name}</h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Breed</p>
            <h4 className="text-lg">{petData.breed_name || "NA"}</h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Gender</p>
            <h4 className="text-lg">
              {petData.gender
                ? petData.gender === "MALE"
                  ? "Male"
                  : petData.gender === "FEMALE"
                  ? "Female"
                  : "NA"
                : "NA"}
            </h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Age</p>
            <h4 className="text-lg">
              {petData.age ? petData.age + " Years" : "NA"}
            </h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Birthday</p>
            <h4 className="text-lg">
              {petData.date_of_birth
                ? moment(petData.date_of_birth).format("DD MMMM YYYY")
                : "NA"}
            </h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Weight</p>
            <h4 className="text-lg">
              {petData.weight ? petData.weight + "Kg" : "NA"}
            </h4>
          </div>
        </div>

        <div className="w-full md:w-[10%]">
          <Button
            label="Edit"
            className="bg-primary3 hover:bg-secondary border-2 border-secondary px-4 py-2 text-secondary hover:text-white"
            onClick={openEditPopup}
          />
        </div>
      </div>

      <MedicalHistory pet_id={pet_id} petData={petData} />

      <Popup isOpen={showEdit} onClose={closeEditPopup}>
        <PetForm
          petData={petData}
          pet_id={pet_id}
          closePopup={closeEditPopup}
          onPetAdded={getPetData}
        />
      </Popup>
    </div>
  );
};

export default SinglePet;

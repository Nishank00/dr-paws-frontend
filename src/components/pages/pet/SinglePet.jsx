import Button from "@/components/ui/Button";
import React from "react";

const SinglePet = () => {
  return (
    <>
      <div className="bg-secondary px-4 py-1 rounded-t-xl">
        <div className="flex items-center gap-1 mb-4 ">
          <div id="icon" className="w-8 h-8 bg-white"></div>
          <div>
            <h4 className="text-lg font-custom-roca">Care Senior Membership</h4>
            <p className="text-xs font-custom-open-sans italic">
              Expires on: 31st March 2024
            </p>
          </div>
        </div>

        <Button
          color="secondary"
          label="Manage Plan"
          className="border-2 border-primary2"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 bg-primary3 p-4 sm:p-6 md:p-8 text-primary font-custom-open-sans rounded-xl">
        <div className="flex items-center gap-4 w-full md:w-1/6">
          <div
            id="icon"
            className="w-10 h-10 md:w-40 md:h-40 rounded-full"
            style={{
              backgroundImage: `url("/pets/dog.jpeg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />

          <h3 className="md:hidden text-lg text-secondary font-custom-roca">
            Buddy
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-10 w-full md:w-4/6">
          <h3 className="col-span-3 hidden md:block text-2xl text-secondary font-custom-roca">
            Buddy
          </h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Type of Pet</p>
            <h4 className="text-lg">Dog</h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Breed</p>
            <h4 className="text-lg">Golden Retriever</h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Gender</p>
            <h4 className="text-lg">Male</h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Age</p>
            <h4 className="text-lg">2.5 years</h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Birthday</p>
            <h4 className="text-lg">5 April 2022</h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-secondary">Weight</p>
            <h4 className="text-lg">20kg</h4>
          </div>
        </div>

        <div className="w-full md:w-1/6">
          <Button
            color="primary3"
            label="Edit"
            className="text-secondary border-secondary"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePet;

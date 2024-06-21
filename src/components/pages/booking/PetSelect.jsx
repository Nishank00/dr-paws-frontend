import React from "react";

const PetSelect = ({ onSelect = () => pet, pet = {} }) => {
  const petImageUrl = pet.pet_image
    ? process.env.NEXT_PUBLIC_API_UPLOAD_URL + "/" + pet.pet_image
    : pet.pet_type_name == "Dog"
    ? "/home/dog.png"
    : "/home/cat_cartoon.png";
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        style={{
          backgroundImage: "url(" + petImageUrl + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`w-12 h-12 rounded-full cursor-pointer text-white flex items-center justify-center ${
          pet.isSelected
            ? "bg-secondary  border-[2px] border-primary"
            : "bg-primary3"
        }`}
        onClick={onSelect}
      >
        {pet.isSelected && (
          <svg
            width="22"
            height="17"
            viewBox="0 0 22 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66406 8.37891L8.41406 14.0039L19.9141 2.75391"
              stroke="white"
              strokeWidth="3.75"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
      <p className="text-sm">{pet.name}</p>
    </div>
  );
};

export default PetSelect;

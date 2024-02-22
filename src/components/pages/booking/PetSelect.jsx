import React from "react";

const PetSelect = ({ onSelect = () => this.pet, pet = {} }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-12 h-12 rounded-full cursor-pointer text-white flex items-center justify-center ${
          pet.isSelected ? "bg-secondary" : "bg-primary3"
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
              stroke-width="3.75"
              stroke-linecap="round"
            />
          </svg>
        )}
      </div>
      <p className="text-sm">{pet.name}</p>
    </div>
  );
};

export default PetSelect;

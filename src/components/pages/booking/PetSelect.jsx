import React from "react";

const PetSelect = ({ onSelect = () => this.pet, pet = {} }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        style={{
          backgroundImage: `url(${"https://images.app.goo.gl/91tsi3DsxKVJKKZi6"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={`w-16 h-16 rounded-full text-white flex items-center justify-center ${
          pet.isSelected ? "bg-primary" : pet.image ? "bg-primary2" : ""
        }`}
        onClick={onSelect}
      >
        {pet.isSelected && <h2 className="font-bold text-white text-4xl">X</h2>}
      </div>
      <p>{pet.name}</p>
    </div>
  );
};

export default PetSelect;

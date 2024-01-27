import React from "react";

const PetSelect = ({
  onSelect = () => this.pet,
  pet = {
    id: 1,
    isSelected: false,
    name: "Ranbir Kapoor",
    image: "https://images.app.goo.gl/91tsi3DsxKVJKKZi6",
  },
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${pet.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`w-16 h-16 rounded-lg text-white flex items-center justify-center ${
        pet.isSelected ? "bg-primary" : "bg-primary3"
      }`}
      onClick={onSelect}
    >
      {pet.isSelected && <h2 className="font-bold text-4xl">X</h2>}
    </div>
  );
};

export default PetSelect;

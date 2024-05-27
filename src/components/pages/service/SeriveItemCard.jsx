import React from "react";

const ServiceItemCard = ({ name }) => {
  // Only render the card if the name is not "It includes a free vet consultation."
  if (name === "It includes a free vet consulation.") {
    console.log("first");
    return null;
  }

  console.log("name", name);

  return (
    <div className="flex justify-center items-center flex-col text-center">
      {/* Image Section */}
      <div>
        <img
          className="w-[180px] h-[180px] rounded-full"
          src="/petting-dog.png"
          alt="Profile Image"
        />
      </div>
      {/* Name Section */}
      <h3 className="text-primary mt-4 text-lg font-custom-open-sans text-center">
        {name}
      </h3>
    </div>
  );
};

export default ServiceItemCard;

"use client";
import React from "react";
import PetProfile from "@/components/pages/petProile/PetProfile";
import { useParams } from "next/navigation";
import SinglePet from "@/components/pages/pet/SinglePet";

const Page = () => {
  const { id } = useParams();

  return (
    <div className="body-padding-x">
      <SinglePet />
      {/* <PetProfile pet_id={id} /> */}
    </div>
  );
};

export default Page;

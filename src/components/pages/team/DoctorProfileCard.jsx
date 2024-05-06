import Button from "@/components/ui/Button";
import React from "react";
import Image from "next/image";

const DoctorProfileCard = ({
  imageUrl = "https://s3-alpha-sig.figma.com/img/37d3/bc60/7a1b0…EN7VtkrATb653Ka~bZagHLXr~4K8AyBZGLWMtGXzy4SxFVQ__",
  openPopup,
  setSelectedDoctor,
  profileData,
}) => {
  const viewProfile = () => {
    setSelectedDoctor(profileData);
    openPopup();
  };
  return (
    <>
      <div className="bg-[#FCF9F2] p-6 max-w-[320px] w-full rounded-lg flex flex-col gap-6">
        <Image
          src="/image139.png"
          className="w-full rounded-lg"
          alt=""
          width={280}
          height={280}
        />
        <div className="flex flex-col gap-1">
          <span className="text-[#101828] font-bold text-xl">
            {profileData.full_name}
          </span>
          <span className="text-[#33495F] text-lg">
            {profileData.introduction}
          </span>
          <span className="text-[#33495F] text-lg">
            {profileData.experience} of Experience
          </span>
        </div>
        <div className="w-full flex overflow-x-auto">
          <div className="flex gap-2 border bg-white rounded border-[#D0D5DD] p-1 w-fit">
            <img src="/Teams/location_small.svg" alt="" loading="lazy" />
            <p className="text-sm font-custom-inter">
              Andheri West, Indiranagar
            </p>
          </div>
        </div>
        <Button
          className="mt-3 w-dull h-15 px-8 py-2"
          color="secondary"
          label="View Profile"
          onClick={viewProfile}
        />
      </div>
    </>
  );
};

export default DoctorProfileCard;

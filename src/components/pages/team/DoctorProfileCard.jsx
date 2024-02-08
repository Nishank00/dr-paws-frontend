import Button from "@/components/ui/Button";
import React from "react";

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
    <div className="bg-primary3 text-primary p-5 flex flex-col items-center shadow">
      <div
        className="rounded-full"
        style={{
          backgroundImage: "url('/image139.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "158px",
          width: "158px",
        }}
      />

      <div className="px-8 flex flex-col items-center text-center">
        <h4 className="font-bold text-xl mt-3">{profileData.full_name}</h4>

        <p className="mt-3 text-xs">DMV - Animal Welfare</p>
        <p className="text-xs">10 Years of Experience</p>

        <p className="mt-3 text-sm ">A - Andheri West, Indiranagar</p>

        <Button
          className="mt-3 w-40 px-8 py-2"
          color="secondary"
          label="View Profile"
          onClick={viewProfile}
        />
      </div>
    </div>
  );
};

export default DoctorProfileCard;

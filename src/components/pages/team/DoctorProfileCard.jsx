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
    <div className="bg-primary3 text-primary flex flex-col items-center shadow">
      {/* <div
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

        <p className="mt-3 text-xs">{profileData.introduction}</p>
        <p className="text-xs">{profileData.experience}</p>

        <p className="mt-3 text-sm ">A - Andheri West, Indiranagar</p>

        <Button
          className="mt-3 w-40 px-8 py-2"
          color="secondary"
          label="View Profile"
          onClick={viewProfile}
        />
      </div> */}
      <div
        className="w-[100%] h-[280px]"
        style={{
          backgroundImage: "url('/image139.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="w-full p-5">
        <div>
          <h4 className="font-bold font-custom-inter text-xl mt-3">
            {profileData.full_name}
          </h4>
          <p className=" text-primary line-clamp-2 font-custom-inter text-md">
            {profileData.introduction}
          </p>
        </div>
        <p className="text-primary text-sm flex gap-2 font-custom-inter mt-3">
          <Image
            src={"/profile/briefcase.svg"}
            alt="err"
            width={20}
            height={20}
          />
          {profileData.experience}
        </p>
        <p className="mt-3 text-sm flex gap-2 font-custom-inter text-primary ">
          <Image src={"/Teams/Location.svg"} alt="err" width={20} height={20} />
          A - Andheri West, Indiranagar
        </p>

        <p className="mt-3 text-sm flex gap-2 font-custom-inter text-primary ">
          <Image
            src={"/profile/teacher.svg"}
            alt="err"
            width={20}
            height={20}
          />
          {profileData.education || NA}
        </p>

        <Button
          className="mt-3 w-40 h-15 px-8 py-2"
          color="secondary"
          label="View Profile"
          onClick={viewProfile}
        />
      </div>
    </div>
  );
};

export default DoctorProfileCard;

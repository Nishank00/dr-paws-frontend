"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ClinicCard = ({
  imageUrl = "/home/clinic_image.png",
  clinic = {},
}) => {
  const [serviceString, setServiceString] = useState();
  const router = useRouter();

  const { id, name, services } = clinic;
  useEffect(() => {
    setServiceString(
      [...new Set(services?.map((service) => service.service_name))].join(" | ")
    );
  }, []);
  return (
    <div
      className="bg-primary3 rounded-md cursor-pointer shadow-md flex flex-col transition ease-in-out delay-150 hover:scale-105"
      onClick={() => router.push(`/clinics/overview/${id}`)}
    >
      <div
        className="rounded-t-md"
        style={{
          backgroundImage: "url(" + imageUrl + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "240px",
        }}
      />
      <div className="p-2 text-primary grow">
        <h4 className="font-semibold font-custom-open-sans text-xl line-clamp-1">Dr. Paw | {name}</h4>
        <p className="text-sm font-custom-open-sans text-primary line-clamp-1">{serviceString || "OPD | Surgery"}</p>
      </div>
      <div
        className="text-center text-white text-sm h-[50px] font-bold font-custom-open-sans bg-secondary hover:bg-primary flex justify-center items-center rounded-b-md"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/booking");
        }}
      >
        Book a Visit
      </div>
    </div>
  );
};

export default ClinicCard;

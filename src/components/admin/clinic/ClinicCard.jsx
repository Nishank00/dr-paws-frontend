"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ClinicCard = ({
  imageUrl = "	https://s3-alpha-sig.figma.com/img/37d3/bc60/7a1b0…EN7VtkrATb653Ka~bZagHLXr~4K8AyBZGLWMtGXzy4SxFVQ__",
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
          height: "158px",
        }}
      />
      <div className="p-4 text-primary grow">
        <h4 className="font-bold text-xl">Dr. Paw | {name}</h4>
        <p className="text-sm">{serviceString || "OPD | Surgery"}</p>
      </div>
      <div
        className="text-center text-white font-semibold bg-secondary hover:bg-primary py-2 rounded-b-md"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/booking");
        }}
      >
        Edit
      </div>
    </div>
  );
};

export default ClinicCard;

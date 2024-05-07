"use client";
import BookingButton from "@/components/ui/BookingButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ClinicCard = ({ imageUrl = "/home/clinic_image.png", clinic = {} }) => {
  const [serviceString, setServiceString] = useState();
  const router = useRouter();

  const { id, name, services } = clinic;
  useEffect(() => {
    setServiceString(
      [...new Set(services?.map((service) => service.service_name))].join(" | ")
    );
  }, [services]);
  return (
    <div className="bg-primary4 rounded-md cursor-pointer shadow-md flex flex-col transition ease-in-out delay-500 hover:shadoe-lg">
      <div
        onClick={() => router.push(`/clinics/overview/${id}`)}
        className="rounded-t-md w-full h-[92px] md:h-[240px] flex justify-end"
        style={{
          backgroundImage: "url(" + imageUrl + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-primary px-2 h-7 rounded-t-md text-sm md:text-lg text-center font-bold font-custom-open-sans bg-primary4 rounded-lg flex items-center justify-center">
          24 Hours
        </p>
      </div>
      <div
        onClick={() => router.push(`/clinics/overview/${id}`)}
        className="pl-6 pr-2 py-4 text-primary grow"
      >
        <h4 className="font-semibold font-custom-open-sans text-xs md:text-[18px] line-clamp-1">
          Dr. Paw | {name}
        </h4>
        <p className=" text-[10px] md:text-[12px] font-custom-open-sans mt-2 text-primary line-clamp-1">
          {serviceString || "OPD | Surgery"}
        </p>
      </div>
      <BookingButton className="text-center text-white text-xs md:text-sm h-[30px] md:h-[50px] font-bold font-custom-open-sans bg-secondary hover:bg-primary flex justify-center items-center rounded-b-md" />
    </div>
  );
};

export default ClinicCard;

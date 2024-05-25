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
    <div className="bg-primary4 relative rounded-md cursor-pointer w-[80%] m-auto lg:w-[100%] shadow-md flex flex-col transition ease-in-out delay-500 hover:shadow-lg">
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
        {clinic?.is_24_hr == "Y" ? (
          <div className="text-primary px-2 h-7 absolute top-1 right-1 rounded-t-md text-sm md:text-base text-center font-bold font-custom-open-sans bg-primary4 rounded-lg flex items-center justify-center">
            <Clock /> &nbsp; 24 Hours
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => router.push(`/clinics/overview/${id}`)}
        className="pl-6 pr-2 py-4 text-primary grow"
      >
        <h4 className="font-semibold font-custom-open-sans text-xs md:text-[18px] line-clamp-1">
          Dr. Paw | {name}
        </h4>
        <p className=" text-[10px] md:text-[12px] font-custom-open-sans mt-2 text-primary text-wrap">
          Check-Ups | Surgery | Diagnostics | Grooming | Retail
        </p>
      </div>
      <BookingButton className="text-center text-white text-xs md:text-sm transition h-[30px] md:h-[50px] font-bold font-custom-open-sans bg-secondary hover:bg-primary flex justify-center items-center rounded-b-md" />
    </div>
  );
};

export default ClinicCard;

const Clock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-clock text-primary"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

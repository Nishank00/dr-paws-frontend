import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BookingButton from "@/components/ui/BookingButton";
const BannerPetCard = ({
  pet_type = "Dog",
  pet_image = "https://s3-alpha-sig.figma.com/img/2c64/6ef4/2093dda8b37bea1a29fec7e91d55285f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DibwxwQIj7k~SDn~f~IoRoG7IOONKdh87T1e7f1nHRIVb6dvDa-iIMTrVkVyLclzKtK~WyDn~kggcBNthsYAPX0LtcKFaHUMNBB3NZs4Nzfo7ESSgzLECZBrZ-aPRG4HvNWdAuz4Urk6to07rKLR5JJzxRrPcFoyQflO62WiGro7AWtD5bH-o8vAHN~y5GoSee5mOlYJHDEQYRAiOKXuyCB-X5~nuHrIey6LveWSeissIWfnDARMCNMWwclXI0GovYPFEnzAXIbR4V5xQhe~caAXhbwjrcs93XXoBmqdE9Skm19fAGoJZBKOiBE59ZwBRTfwH1tDLhD8IXFdudEedQ__",
}) => {
  const router = useRouter();
  return (
    <>
      <div className="   border-blue-500   w-[100px] h-[130px] md:w-[200px] md:h-[250px] flex flex-col justify-between text-center bg-white rounded-2xl">
        <h3 className="text-secondary font-custom-roca mt-2  text-sm md:text-lg font-semibold">
          {pet_type}
        </h3>
        <div className=" border-red-700 bg-white h-12 w-12  md:h-36 md:w-36 m-auto p-2">
          <Image
            src={pet_image}
            alt={`${pet_type} Image`}
            width={150}
            height={80}
            layout="responsive"
            className="w-full h-full"
          />
        </div>
        <BookingButton className="bg-secondary hover:opacity-50 font-light font-custom-open-sans transition rounded-b-2xl text-[10px] md:text-[14px] py-2" />
      </div>
    </>
  );
};

export default BannerPetCard;

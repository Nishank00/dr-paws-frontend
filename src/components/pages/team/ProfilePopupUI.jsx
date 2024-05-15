import { useState } from "react";
import Image from "next/image";
import {
  ExperienceIcon,
  LocationIcon,
  SpecializationIcon,
} from "@/components/ui/Icons";
import BookingButton from "@/components/ui/BookingButton";

const ProfilePopupUI = ({ selectedDoctor }) => {
  const [isOpen, setIsOpen] = useState(true);
  const iconName = "";
  return (
    // <div className="  p-12 rounded-sm bg-white w-full  md:w-[1040px]">
    //   <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
    //     <div id="doc_image" className="md:order-1">
    //       <Image
    //         src="https://s3-alpha-sig.figma.com/img/7687/6f2b/c22730a4851aa3d42b3100376117e81f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IuZJhbAlyOBwVk5DWdVhvmAjUV2Nw3P87w7lUGnZQKfEufaAdZAkPfZgVUabJkaH7W1bE-UJvuVvNxFI7qn0CjyhBKJRFuk-qtmH4Ydpu-Aw2bKANyj63OYBhV0EowEqPrlfQdBeSOOEiH0dA2QvpMjBUC04KevlLxRFs7XAJaKdpvw1JhmpoXFlI7~au7OlybdFH9CgMapKTwCoFzmsglw~kEJz4P1zdL1nF6V4EHOnTNFEhuqSAWT-Mxf~9GzaGEtvI-2cVfzZPArt63zVeqSiDKK9~3gdcDiPffmjy52sqRjUyIO2rLACpiP8joJZ5liUEVzNwXg-RTAJpf9-wg__"
    //         alt="doctor"
    //         width={158}
    //         height={158}
    //         className="w-full"
    //       />
    //       <p>{selectedDoctor?.introduction}</p>
    //     </div>
    //     <div
    //       className="flex flex-col cursor-pointer items-left space-x-4"
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       <h1 className=" font-primary font-bold text-4xl w-full">
    //         {selectedDoctor?.full_name}
    //       </h1>
    //       <div className="mt-5">
    //         <span className="flex">
    //           <ExperienceIcon />
    //           <h3 className=" text-xl font-normal ml-3">Experience</h3>
    //         </span>
    //         <h2 className=" text-2xl font-semibold">
    //           {selectedDoctor?.experience}
    //         </h2>
    //       </div>
    //       <div className="mt-5">
    //         <span className="flex">
    //           <SpecializationIcon />
    //           <h3 className="text-xl font-normal ml-3">Specialization</h3>
    //         </span>
    //         <h2 className="text-2xl font-semibold">
    //           {selectedDoctor?.specialization}
    //         </h2>
    //       </div>
    //       <div className="mt-5">
    //         <span className="flex">
    //           <LocationIcon />
    //           <h3 className="text-xl font-normal ml-3">Clinics</h3>
    //         </span>
    //         <h2 className="text-2xl font-semibold">
    //           Andheri West, Indiranagar
    //         </h2>
    //       </div>
    //       <div className="mt-5">
    //         <span className="text-2xl font-bold">About the vet</span>
    //         <p className="text-xl font-normal">
    //           {selectedDoctor?.about}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-row m-auto  w-[80%] h-[400px] md:h-auto  overflow-y-scroll pv-8 md:w-[950px] bg-white">
      <div className="w-full md:w-[55%] h-auto">
        <h1 className=" text-primary font-custom-roca font-bold text-4xl w-full">
          {selectedDoctor?.full_name}
        </h1>
        <div className="mt-5 flex">
          <div className="w-[25px">
            {/* <Image src={"/Teams/SpecializationIcon.svg"} alt="err" width={25} height={25} /> */}
            <ExperienceIcon />
          </div>
          <div className="pl-2">
            <h3 className="text-xl text-primary font-normal font-custom-open-sans ">
              Experience
            </h3>
            <h2 className="text-2xl text-primary font-semibold font-custom-open-sans">
              {selectedDoctor?.experience}
            </h2>
          </div>
        </div>
        <div className="mt-5 flex">
          <div className="w-[25px">
            <Image
              src={"/Teams/SpecializationIcon.svg"}
              alt="err"
              width={25}
              height={25}
            />
          </div>
          <div className="pl-2">
            <h3 className="text-xl text-primary font-normal font-custom-open-sans ">
              Specialization
            </h3>
            <h2 className="text-2xl text-primary font-semibold font-custom-open-sans">
              {selectedDoctor?.specialization}
            </h2>
          </div>
        </div>
        <div className="mt-5 flex">
          <div className="w-[25px">
            <Image
              src={"/Teams/Location.svg"}
              alt="err"
              width={25}
              height={25}
            />
          </div>
          <div className="pl-2">
            <h3 className="text-xl text-primary font-normal font-custom-open-sans ">
              Clinics
            </h3>
            <h2 className="text-2xl text-primary font-semibold font-custom-open-sans">
              Andheri West, Indiranagar
            </h2>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-primary   font-bold font-custom-open-sans text-2xl">
            About The Vet
          </h3>
          <p className="text-primary text-xl">{selectedDoctor?.about}</p>
        </div>
      </div>
      <div className="w-full md:w-[40%] px-5">
        <Image
          src="/Teams/smiling.png"
          alt="doctor"
          width={300}
          height={466}
          className="w-[354px] "
        />
        <p>{selectedDoctor?.introduction}</p>
        <BookingButton className="w-full h-12 flex justify-center items-center rounded-full text-white bg-secondary font-bold font-custom-open-sans" />
      </div>
    </div>
  );
};

export default ProfilePopupUI;

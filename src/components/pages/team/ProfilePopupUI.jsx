import { useState } from "react";
import Image from "next/image";
import {
  ExperienceIcon,
  LocationIcon,
  SpecializationIcon,
} from "@/components/ui/Icons";

const ProfilePopupUI = ({ selectedDoctor }) => {
  const [isOpen, setIsOpen] = useState(true);
  const iconName = "";
  return (
    <div className="  p-12 rounded-sm bg-white w-full rounded-2xl md:w-[1040px]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div id="doc_image" className="md:order-1">
          <Image
            src="https://s3-alpha-sig.figma.com/img/7687/6f2b/c22730a4851aa3d42b3100376117e81f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IuZJhbAlyOBwVk5DWdVhvmAjUV2Nw3P87w7lUGnZQKfEufaAdZAkPfZgVUabJkaH7W1bE-UJvuVvNxFI7qn0CjyhBKJRFuk-qtmH4Ydpu-Aw2bKANyj63OYBhV0EowEqPrlfQdBeSOOEiH0dA2QvpMjBUC04KevlLxRFs7XAJaKdpvw1JhmpoXFlI7~au7OlybdFH9CgMapKTwCoFzmsglw~kEJz4P1zdL1nF6V4EHOnTNFEhuqSAWT-Mxf~9GzaGEtvI-2cVfzZPArt63zVeqSiDKK9~3gdcDiPffmjy52sqRjUyIO2rLACpiP8joJZ5liUEVzNwXg-RTAJpf9-wg__"
            alt="doctor"
            width={158}
            height={158}
            className="w-full"
          />
          <p>{selectedDoctor?.introduction}</p>
        </div>
        <div
          className="flex flex-col cursor-pointer items-left space-x-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className=" font-primary font-bold text-4xl w-full">
            {selectedDoctor?.full_name}
          </h1>
          <div className="mt-5">
            <span className="flex">
              <ExperienceIcon />
              <h3 className=" text-xl font-normal ml-3">Experience</h3>
            </span>
            <h2 className=" text-2xl font-semibold">
              {selectedDoctor?.experience}
            </h2>
          </div>
          <div className="mt-5">
            <span className="flex">
              <SpecializationIcon />
              <h3 className="text-xl font-normal ml-3">Specialization</h3>
            </span>
            <h2 className="text-2xl font-semibold">
              {selectedDoctor?.specialization}
            </h2>
          </div>
          <div className="mt-5">
            <span className="flex">
              <LocationIcon />
              <h3 className="text-xl font-normal ml-3">Clinics</h3>
            </span>
            <h2 className="text-2xl font-semibold">
              Andheri West, Indiranagar
            </h2>
          </div>
          <div className="mt-5">
            <span className="text-2xl font-bold">About the vet</span>
            <p className="text-xl font-normal">
              {selectedDoctor?.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopupUI;

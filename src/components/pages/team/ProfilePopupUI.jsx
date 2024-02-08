import { useState } from "react";
import Image from "next/image";

const ProfilePopupUI = () => {
  const [isOpen, setIsOpen] = useState(true);
  const iconName = "";
  return (
    <div className=" p-12 rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div id="doc_image" className="md:order-1">
          <Image
            src="https://s3-alpha-sig.figma.com/img/7687/6f2b/c22730a4851aa3d42b3100376117e81f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IuZJhbAlyOBwVk5DWdVhvmAjUV2Nw3P87w7lUGnZQKfEufaAdZAkPfZgVUabJkaH7W1bE-UJvuVvNxFI7qn0CjyhBKJRFuk-qtmH4Ydpu-Aw2bKANyj63OYBhV0EowEqPrlfQdBeSOOEiH0dA2QvpMjBUC04KevlLxRFs7XAJaKdpvw1JhmpoXFlI7~au7OlybdFH9CgMapKTwCoFzmsglw~kEJz4P1zdL1nF6V4EHOnTNFEhuqSAWT-Mxf~9GzaGEtvI-2cVfzZPArt63zVeqSiDKK9~3gdcDiPffmjy52sqRjUyIO2rLACpiP8joJZ5liUEVzNwXg-RTAJpf9-wg__"
            alt="doctor"
            width={158}
            height={158}
            className="w-full"
          />
          <p>Passionate about animal care and active member of AVMA.</p>
        </div>

        <div className="">
          <div
            className="flex cursor-pointer items-center space-x-4 hover:text-blue-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`text-2xl font-bold inline-flex items-center ${
                isOpen ? "text-blue-500" : ""
              }`}
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Replace with your desired icon based on the title or subtitle */}
                <path d={iconName} />
              </svg>
              Hii
            </span>
            {!isOpen && <span className="font-medium text-gray-500">MF</span>}
          </div>
          {isOpen && (
            <div className="mt-4 text-sm text-gray-500 leading-loose">
              {/* Your content here */}
              <p>Veterinarian with DVM from National Veterinary University.</p>
              <p>
                Associate Vet at City Animal Hospital, Emergency Vet at
                Emergency Veterinary Services, and currently Director & Senior
                Vet at Companion Care Vet Hospital.
              </p>
              <p>Active member of AVMA.</p>
              <p>Passionate about animal care.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePopupUI;

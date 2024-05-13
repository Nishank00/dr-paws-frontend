import Popup from "@/components/ui/Popup";
import React, { useState } from "react";
import DoctorProfile from "../team/DoctorProfile";
import DoctorProfileModal from "../team/DoctorProfileModal";

const DoctorProfileCard = ({
  full_name,
  experience,
  specialization,
  education,
  ...rest
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="justify-center bg-primary3 py-2 items-stretch self-stretch flex max-w-[292px] flex-col px-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&"
          className="aspect-square object-contain object-center w-[115px] overflow-hidden self-center max-w-full"
        />
        <div className="text-slate-700 text-center text-lg font-semibold whitespace-nowrap mt-5">
          Dr. {full_name || "NA"}
        </div>
        <div className="flex justify-between items-center  gap-2.5 mt-5">
          <img
            loading="lazy"
            src="/Teams/specialization_icon.svg"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-slate-700 text-sm grow ">{specialization}</div>
        </div>
        <div className="flex justify-between items-center  gap-2.5 mt-5">
          <img
            loading="lazy"
            src="/Teams/experience_icon.svg"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-slate-700 text-sm grow ">{experience}</div>
        </div>
        <div className="flex justify-between items-center  gap-2.5 mt-5">
          <img
            loading="lazy"
            src="/profile/teacher.svg"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-slate-700 text-sm grow ">{education}</div>
        </div>
        <div className="flex justify-between items-center  gap-2.5 mt-5">
          <img
            loading="lazy"
            src="/Teams/Location.svg"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-slate-700 text-sm leading-3 tracking-normal grow whitespace-nowrap">
            Andheri West, Indiranagar
          </div>
        </div>
        <div
          onClick={() => setShowPopup(true)}
          className="text-white text-base  font-bold whitespace-nowrap justify-center items-stretch bg-slate-500 self-center mt-8 mb-4 px-8 py-2.5 rounded-3xl"
        >
          View Profile
        </div>
      </div>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
        {/* <DoctorProfile
          selectedDoctor={{
            full_name,
            experience,
            specialization,
            education,
            ...rest,
          }}
        /> */}
        <DoctorProfileModal
          selectedDoctor={{
            full_name,
            experience,
            specialization,
            education,
            ...rest,
          }}
        />
      </Popup>
    </>
  );
};

export default DoctorProfileCard;

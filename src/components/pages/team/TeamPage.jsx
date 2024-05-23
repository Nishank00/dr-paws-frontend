"use client";
import { useEffect, useState } from "react";
import DoctorProfileCard from "../clinic/DoctorProfileCard";
import Popup from "@/components/ui/Popup";
import UserService from "@/services/User.Service";
import ProfilePopupUI from "./ProfilePopupUI";
import ImageHeader from "@/components/ui/ImageHeader";
import DoctorProfile from "./DoctorProfile";
import DoctorService from "@/services/Doctor.Service";
import DoctorProfileModal from "./DoctorProfileModal";

const TeamPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState({});

  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    console.log("first");
    setShowPopup(false);
  };

  const getAllDoctors = () => {
    DoctorService.getAllDotors()
      .then((response) => {
        if (response.data.status) {
          setDoctors(response.data.data);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  return (
    <div className="body-padding-x text-primary mb-10">
      <div className="mt-14">
        <ImageHeader
          imageUrl={"/image139.png"}
          imagePosition={"left"}
          header={
            <p className="leading-none text-[44px]">
              Meet our very own Superheroes
            </p>
          }
          text={
            "Our clinical team is comprised of experienced vets, with a broad range of specialisations, that are committed to treating your pet just like their own."
          }
          buttonVisibility={false}
        />
      </div>

      <h2 className="text-center text-primary  font-custom-roca text-4xl">
        Our Team
      </h2>

      <div className=" mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {doctors.map((doctor, i) => (
          <DoctorProfileCard key={i} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;

"use client";
import { useEffect, useState } from "react";
import ImageTextHeader from "../home/ImageTextHeader";
import DoctorProfileCard from "./DoctorProfileCard";
import Popup from "@/components/ui/Popup";
import UserService from "@/services/User.Service";
import ProfilePopupUI from "./ProfilePopupUI";
import ImageHeader from "@/components/ui/ImageHeader";
import DoctorProfile from "./DoctorProfile";

const TeamPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState({});

  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  const getDoctors = () => {
    UserService.getDoctors()
      .then((response) => {
        if (response.data.status) {
          setDoctors(response.data.data);
        }
      })
      .catch((error) => console.error("Error:", error.message));
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div className="body-padding-x text-primary mb-10">
      <div className="mt-14">
        <ImageHeader
          imageUrl={"/image139.png"}
          imagePosition={"left"}
          header={"Meet our very own Superheroes"}
          text={
            "Our clinical team is comprised of experienced vets, with a broad range of specialisations, with additional special training to create a new kind of veterinary experience. We love animals and find joy everyday helping our four legged friends stay happy & healthy."
          }
          buttonVisibility={false}
        />
      </div>

      <h2 className="text-center text-primary  font-custom-roca text-4xl">
        Our Team
      </h2>

      <div className=" mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {doctors.map((doctor) => (
          <DoctorProfileCard
            key={doctor.id}
            profileData={doctor}
            openPopup={openPopup}
            setSelectedDoctor={setSelectedDoctor}
          />
        ))}
      </div>

      <Popup isOpen={showPopup} onClose={closePopup}>
        <DoctorProfile selectedDoctor={selectedDoctor} />
        {/* <ProfilePopupUI selectedDoctor={selectedDoctor} /> */}
      </Popup>
    </div>
  );
};

export default TeamPage;

import Link from "next/link";
import {React, useEffect, useState} from "react";
import { TokenService, UserService } from "@/services/Storage.service";
import { redirect } from "next/navigation";
import PetService from "@/services/Pet.Service";

const ProfileDropdown = ({ onLogout, onClose }) => {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logoutUser = () => {
    TokenService.removeToken();
    UserService.removeUserInfo();
    onLogout();
  };

  const [hasActiveMembership, setHasActiveMembership] = useState(false);
  const [user_id, setUserID] = useState(null); // Assuming you're managing user_id state


  useEffect(() => {
    // Call getPets when user_id is updated
    if (user_id) {
      getPets();
    }
  }, [user_id]);


  useEffect(() => {
    // Fetch user_id from local storage and update state
    const userInfo = JSON.parse(localStorage.getItem("user_info"));
    if (userInfo && userInfo.id) {
      setUserID(userInfo.id);
    }
  }, []);


  const getPets = () => {
    console.log("GETTING PETS LASSI LUSSI");
    setUserID(JSON.parse(localStorage.getItem("user_info"))?.id);
    console.log("LASSI LUSSI USER ID:", JSON.parse(localStorage.getItem("user_info"))?.id);
    if (user_id) {
      PetService.getPetsByUserId(user_id)
        .then((response) => {
          console.log("GETTING PETS LASSI LUSSI", response.data.data);
          const pets = response.data.data;
          const hasActive = pets.some(pet => pet.pet_membership && pet.pet_membership.is_active === 1);
          console.log("HAS ACTIVE MEMBERSHIP", hasActive);
          setHasActiveMembership(hasActive);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };


  return (
    <div
      ref={dropdownRef}
      className="bg-primary3 p-6 text-primary w-full sm:w-56"
    >
      <ul>
        <li className="py-2 hover:border-y hover:border-accent hover:text-accent">
          <Link href="/profile">
            <p>Profile</p>
          </Link>
        </li>
        <li className="py-2 hover:border-y hover:border-accent hover:text-accent">
          <Link href="/appointments">
            <p>My Appointments</p>
          </Link>
        </li>
        <li className="py-2 hover:border-y hover:border-accent hover:text-accent">
          <Link href="/membership">
             {hasActiveMembership ? <p>Renew Membership</p> : <p>Become a Member</p>}
          </Link>
        </li>
        <li
          onClick={logoutUser}
          className="py-2 hover:border-y hover:border-accent hover:text-accent"
        >
          <p>Log Out</p>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;

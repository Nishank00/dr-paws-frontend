import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { TokenService, UserService } from "@/services/Storage.service";

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
            <p>Become a Member</p>
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

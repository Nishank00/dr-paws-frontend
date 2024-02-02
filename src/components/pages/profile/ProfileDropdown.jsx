import Link from "next/link";
import React from "react";
import { TokenService } from "@/services/Storage.service";
import { redirect } from "next/navigation";

const ProfileDropdown = ({ onLogout }) => {
  const logoutUser = () => {
    TokenService.removeToken();
    onLogout();
    redirect("/");
  };
  return (
    <div className="bg-primary3 p-6 text-primary w-full sm:w-56">
      <ul>
        <li className="py-2 border-b border-gray-300">
          <Link href="/profile">
            <p>Profile</p>
          </Link>
        </li>

        <li className="py-2 border-b border-gray-300">
          <Link href="/profile">
            <p>My Pets</p>
          </Link>
        </li>

        <li className="py-2 border-b border-gray-300">
          <Link href="#">
            <p>Medical History</p>
          </Link>
        </li>

        <li className="py-2 border-b border-accent">
          <Link href="#">
            <p>My Appointments</p>
          </Link>
        </li>

        <li className="py-2 border-b border-accent text-accent">
          <Link href="#">
            <p>Become a Member</p>
          </Link>
        </li>

        <li className="py-2 border-b border-gray-300">
          <Link href="#">
            <p>Billing Information</p>
          </Link>
        </li>

        <li className="py-2 border-b border-gray-300">
          <Link href="#">
            <p>Account Settings</p>
          </Link>
        </li>

        <li onClick={logoutUser} className="py-2 ">
          <p>Log Out</p>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;

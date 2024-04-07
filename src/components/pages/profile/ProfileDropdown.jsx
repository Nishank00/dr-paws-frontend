import Link from "next/link";
import React from "react";
import { TokenService, UserService } from "@/services/Storage.service";
import { redirect } from "next/navigation";

const ProfileDropdown = ({ onLogout }) => {
  const logoutUser = () => {
    TokenService.removeToken();
    UserService.removeUserInfo();
    onLogout();
  };
  return (
    <div className="bg-primary3 p-6 text-primary w-full sm:w-56">
      <ul>
        <li className="py-2 hover:border-y hover:border-accent hover:text-accent">
          <Link href="/profile">
            <p>Profile</p>
          </Link>
        </li>

        <li className="py-2 hover:border-y hover:border-accent hover:text-accent">
          <Link href="/profile">
            <p>My Pets</p>
          </Link>
        </li>

        <li className="py-2 hover:border-y hover:border-accent hover:text-accent">
          <Link href="#">
            <p>Medical History</p>
          </Link>
        </li>

        <li className="py-2 hover:border-y hover:border-accent hover:text-accent">
          <Link href="/appointments">
            <p>My Appointments</p>
          </Link>
        </li>

        <li className="py-2 hover:border-y hover:border-accent hover:text-accent">
          <Link href="#">
            <p>Become a Member</p>
          </Link>
        </li>

        <li className="py-2 hover:border-y hover:border-accent hover:text-accent">
          <Link href="#">
            <p>Billing Information</p>
          </Link>
        </li>

        <li className="py-2 hover:border-y hover:border-accent hover:text-accent">
          <Link href="#">
            <p>Account Settings</p>
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

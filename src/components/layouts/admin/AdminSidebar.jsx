import Link from "next/link";
import React from "react";

const AdminSidebar = () => {
  return (
    <>
      <aside className="flex md:flex-col  h-full bg-primary3 text-primary">
        <a className="flex-1 hover:ring hover:bg-primary2" href="#">
          Home
        </a>
        <Link
          className="flex-1 hover:ring hover:bg-primary2"
          href="/admin/master"
        >
          Masters
        </Link>

        <Link
          className="flex-1 hover:ring hover:bg-primary2"
          href="/admin/doctor"
        >
          Doctors
        </Link>
        <a className="flex-1 hover:ring hover:bg-primary2" href="#">
          Clinics
        </a>
        <a className="flex-1 hover:ring hover:bg-primary2" href="#">
          Appointments
        </a>
      </aside>
    </>
  );
};

export default AdminSidebar;

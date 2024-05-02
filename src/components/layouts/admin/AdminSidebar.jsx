import Link from "next/link";
import React from "react";

const AdminSidebar = () => {
  return (
    <>
      <aside className="flex md:flex-col  h-full bg-primary3 text-primary">
        <Link className="flex-1 hover:ring hover:bg-primary2" href="#">
          Home
        </Link>

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

        <Link
          className="flex-1 hover:ring hover:bg-primary2"
          href="/admin/clinic"
        >
          Clinics
        </Link>

        <Link className="flex-1 hover:ring hover:bg-primary2" href="#">
          Appointments
        </Link>
      </aside>
    </>
  );
};

export default AdminSidebar;

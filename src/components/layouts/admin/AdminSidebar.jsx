import React from "react";

const AdminSidebar = () => {
  return (
    <>
      <aside className="flex md:flex-col  h-full bg-primary3 text-primary">
        <a className="flex-1 hover:ring hover:bg-primary2" href="#">
          Home
        </a>
        <a className="flex-1 hover:ring hover:bg-primary2" href="#">
          Masters
        </a>
        <a className="flex-1 hover:ring hover:bg-primary2" href="#">
          Doctors
        </a>
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

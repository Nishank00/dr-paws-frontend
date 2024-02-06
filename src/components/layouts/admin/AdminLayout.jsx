import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen">
      <div className="col-span-12 row-span-1 md:col-start-3 md:col-span-10">
        <AdminHeader />
      </div>
      <main className="col-span-12 row-span-10 md:col-start-3 md:col-span-10 md:row-span-11 shadow-md bg-primary4 overflow-scroll">
        {children}
      </main>
      <div className="col-span-12 row-span-1 md:row-start-1 md:col-span-2 md:row-span-12">
        <AdminSidebar />
      </div>
    </div>
  );
};

export default AdminLayout;

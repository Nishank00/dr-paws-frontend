"use client";
import React from "react";
import MainLayout from "@/components/layouts/main/MainLayout";
import AdminLayout from "@/components/layouts/admin/AdminLayout";
import { useRouter } from "next/router";

const App = ({ children }) => {
  const isAdminRoute =
    typeof window !== "undefined" &&
    window.location.pathname &&
    window.location.pathname.startsWith("/admin");

  console.log("isAdminRoute => ", isAdminRoute);

  return (
    <div>
      {isAdminRoute ? (
        <AdminLayout>{children}</AdminLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </div>
  );
};
export default App;

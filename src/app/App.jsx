"use client";
import React from "react";
import MainLayout from "@/components/layouts/main/MainLayout";
import AdminLayout from "@/components/layouts/admin/AdminLayout";
import { useRouter } from "next/router";
import { Open } from "@next/font/google";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { LoaderProvider } from "@/components/ui/LoaderContext";

const App = ({ children }) => {
  const isAdminRoute =
    typeof window !== "undefined" &&
    window.location.pathname &&
    window.location.pathname.startsWith("/admin");

  return (
    <div>
      <LoaderProvider>
        <ToastProvider>
          {isAdminRoute ? (
            <AdminLayout>{children}</AdminLayout>
          ) : (
            <MainLayout>{children}</MainLayout>
          )}
        </ToastProvider>
      </LoaderProvider>
    </div>
  );
};
export default App;

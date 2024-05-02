"use client";
import React from "react";
import MainLayout from "@/components/layouts/main/MainLayout";
import AdminLayout from "@/components/layouts/admin/AdminLayout";
import { useRouter } from "next/router";
import { Open } from "@next/font/google";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { LoaderProvider } from "@/components/ui/LoaderContext";
import { store } from "@/store/store";
import { Provider } from "react-redux";

const App = ({ children }) => {
  const isAdminRoute =
    typeof window !== "undefined" &&
    window.location.pathname &&
    window.location.pathname.startsWith("/admin");

  return (
    <div>
      <Provider store={store}>
        <LoaderProvider>
          <ToastProvider>
            {isAdminRoute ? (
              <AdminLayout>{children}</AdminLayout>
            ) : (
              <MainLayout>{children}</MainLayout>
            )}
          </ToastProvider>
        </LoaderProvider>
      </Provider>
    </div>
  );
};
export default App;

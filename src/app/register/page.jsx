"use client";
import RegisterForm from "@/components/auth/RegisterForm";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "@/store/features/pageHeader/pageHeaderSlice";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(
      setPageHeader({
        title: "Register",
        currentMenu: "REGISTER",
        currentPath: "/register",
      })
    );
  }, []);
  return (
    <div>
      <RegisterForm
        loginClicked={() => router.push("/login")}
        onSuccess={() => router.push("/login")}
      />
    </div>
  );
};

export default page;

"use client";
import LoginForm from "@/components/auth/LoginForm";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPageHeader } from "@/store/features/pageHeader/pageHeaderSlice";
import { setUserLoggedIn } from "@/store/features/userSession/userSessionSlice";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginSuccessful = () => {
    dispatch(setUserLoggedIn({ isUserLoggedIn: true }));
    router.push("/");
  };

  useEffect(() => {
    dispatch(
      setPageHeader({
        title: "Login",
        currentMenu: "LOGIN",
        currentPath: "/login",
      })
    );
  }, []);
  return (
    <div>
      <LoginForm
        signUpClicked={() => {
          router.push("/register");
        }}
        onSuccess={loginSuccessful}
      />
    </div>
  );
};

export default page;

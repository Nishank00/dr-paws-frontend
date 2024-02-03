"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { TokenService } from "@/services/Storage.service";

export default function isAuth(Component) {
  return function IsAuth(props) {
    const token = TokenService.getToken() || false;

    useEffect(() => {
      if (!token) {
        return redirect("/");
      }
    }, []);

    if (!token) {
      return null;
    }

    return <Component {...props} />;
  };
}

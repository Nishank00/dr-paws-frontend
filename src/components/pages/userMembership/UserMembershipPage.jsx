import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "@/store/features/pageHeader/pageHeaderSlice";
import MembershipCard from "./MembershipCard";

const UserMembershipPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setPageHeader({
        title: "Your Membership",
        currentMenu: "MEMBERSHIP",
        currentPath: "/user-memberships",
      })
    );
  });

  return (
    <div className="px-2 py-3">
      <MembershipCard />
    </div>
  );
};

export default UserMembershipPage;

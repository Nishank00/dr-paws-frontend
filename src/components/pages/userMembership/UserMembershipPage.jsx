import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "@/store/features/pageHeader/pageHeaderSlice";
import MembershipCard from "./MembershipCard";
import UserService from "@/services/User.Service";
import { useToast } from "@/components/ui/ToastProvider";

const UserMembershipPage = () => {
  const dispatch = useDispatch();
  const showToast = useToast();
  const [memberships, setMemberships] = useState([]);

  const getMemberships = () => {
    UserService.getmemberships()
      .then((response) => {
        if (!response.data.status) {
          return showToast(response.data.message, "warning");
        }
        setMemberships(response.data.data);
      })
      .catch((error) => {
        showToast(error.message, "error");
      });
  };

  useEffect(() => {
    dispatch(
      setPageHeader({
        title: "Your Membership",
        currentMenu: "MEMBERSHIP",
        currentPath: "/user-memberships",
      })
    );

    getMemberships();
  }, []);

  return (
    <div className="px-2 py-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {memberships.map((membership, i) => (
          <MembershipCard key={`membership-${i}`} membership={membership} />
        ))}
      </div>
    </div>
  );
};

export default UserMembershipPage;

"use client";
import React, { useState, useEffect } from "react";
import ImageHeader from "@/components/ui/ImageHeader";
import MembershipService from "@/services/Membership.Service";
import MembershipCard from "./MembershipCard";
import { useToast } from "@/components/ui/ToastProvider";
import MembershipCardNew from "./MembershipCardNew";
import ImageTextHeader from "../home/ImageTextHeader";

const MembershipPage = () => {
  const showToast = useToast();
  const [memberships, setMemberships] = useState([]);

  const getMemberships = () => {
    MembershipService.getMemberships()
      .then((response) => {
        if (!response.data.status) {
          return showToast(response.data.message, "warning");
        }
        setMemberships(
          response.data.data.map((membership) => {
            membership.membership_plans.map(
              (membership_plan) => (membership_plan.selected = false)
            );
            return membership;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("memberships", memberships);
  useEffect(() => {
    getMemberships();
  }, []);
  return (
    <div className="md:pt-20 pt-12">
      <div className="m-auto df">
        <ImageTextHeader
          imageUrl={"/image139.png"}
          buttonText={"Explore Plans"}
          buttonColor={"secondary"}
          header={"Great value care, whatever your pet needs"}
          text={
            "Our memberships are designed to provide the convenience, security, and value pet-parents of today expect. Explore our plans to discover the one that fits your pet’s needs."
          }
          imagePosition={"left"}
          headingClass="!text-[48px] leading-none"
          paragraphClass="text-sm"
          buttonUrl={"/membership#memberships"}
          isWidthFull={false}
          isHeightFull={true}
        />
      </div>

      <div className="w-full mt-14 md:body-padding-x" id="memberships">
        <div className="w-full px-4 md:px-0 flex items-center justify-center">
          <img src="/membership/become_member_banner.png" alt="" />
        </div>

        <div className="md:py-20 py-8 flex md:grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6 px-5 md:px-0 overflow-scroll md:overflow-auto">
          {memberships.map((membership, index) => (
            <MembershipCardNew
              key={membership?.id + " " + index}
              membership={membership}
              memberships={memberships}
              setMemberships={setMemberships}
            />
            // <MembershipCard
            //   key={index}
            //   index={index}
            //   image={"/Membership/membership_card.png"}
            //   title={membership.title}
            //   description={membership.description}
            //   includes={membership.items.membership_description}
            // />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;

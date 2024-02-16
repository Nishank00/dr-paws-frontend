"use client"
import ImageTextHeader from "@/components/pages/home/ImageTextHeader";
import MembershipCard from "@/components/pages/membership/MembershipCard";
import MembershipService from "@/services/Membership.Service";
import { useState, useEffect } from "react";

const Page = () => {
  const [memberships, setMemberships] = useState([]);

  const getMemberships = () => {
    console.log('getUserData running');
    MembershipService.getMemberships()
        .then((response) => {
            if (!response.data.status) {
                console.log('error');
                return;
            }
            setMemberships(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
}
  useEffect(() => {
    getMemberships();
  }, [])
  return (
    <>
      <div className="bg-white">
        <div className="body-padding-x pt-20">
          <ImageTextHeader
            imageUrl={"/image139.png"}
            buttonText={"Explore Plans"}
            header={"Great value care, whatever your pet needs"}
            text={
              "Our memberships are designed to provide the convenience, security, and value pet-parents of today expect. Explore our plans to discover the one that fits your pet’s needs."
            }
            imagePosition={"left"}
          />
        </div>
        <div className="body-padding-x py-20 bg-primary3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        {memberships.map((membership, index) => (
            <MembershipCard
              key={index}
              image={membership.image}
              title={membership.title}
              description={membership.description}
              includes={membership.items.membership_description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;

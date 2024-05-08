"use client";
import React, { useState } from "react";
import ImageTextHeader from "@/components/pages/home/ImageTextHeader";
import PageTabs from "@/components/pages/service/PageTabs";
import Image from "next/image";
import ImageHeader from "@/components/ui/ImageHeader";
import ServiceTabs from "./ServiceTabs";

const ServicePage = () => {
  const [selectedTab, setSelectedTab] = useState("Tab 1");

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="w-full pb-8">
      <div className=" pt-20">
        <ImageTextHeader
          imageUrl={"/image139.png"}
          buttonText={"Book a Visit"}
          buttonColor={"secondary"}
          buttonUrl={"/booking"}
          header={
            <p className="leading-none">
              We{`'`}re here, whatever your friend needs
            </p>
          }
          text={
            "Our modern friendly clinics offer all the services you’ll need to keep your animal happy and healthy."
          }
          imagePosition={"left"}
          headingClass="!text-[48px]"
          paragraphClass="text-sm"
        />
      </div>
      <div className="w-full ">
        <PageTabs />
      </div>
    </div>
  );
};

export default ServicePage;
